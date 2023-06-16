import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCourses = () => {

    // data from context
    const {user} = useContext(AuthContext);

    // states
   
    const [topCourses, setTopCourses] = useState([]);
    const [coursesByInstructor, setCoursesByInstructor] = useState([]);

    // // get all courses
    // useEffect(()=>{
    //     fetch('https://sports-camp-server-neon.vercel.app/courses')
    //     .then(res=>res.json())
    //     .then(data=> setAllCourses(data))
    //     .catch(err=>{
    //         console.log(err.message);
    //     })

    
    // }, [])


    // used tanstack instead of normal data fetching to get all courses from database
    const { data: allCourses = [] , refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async() =>{
            const res = await fetch(`https://sports-camp-server-neon.vercel.app/courses`);

            return res.json();
        }
      })

      

    // get top courses
    useEffect(()=>{
        fetch('https://sports-camp-server-neon.vercel.app/topCourses')
        .then(res=>res.json())
        .then(data=>setTopCourses(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [])

    // get courses by instructor
    useEffect(()=>{
        fetch(`https://sports-camp-server-neon.vercel.app/coursesByInstructor?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setCoursesByInstructor(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])

    return [allCourses, topCourses, coursesByInstructor, refetch];
};

export default useCourses;