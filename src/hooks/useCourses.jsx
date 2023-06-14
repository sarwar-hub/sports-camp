import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";


const useCourses = () => {

    // data from context
    const {user} = useContext(AuthContext);

    // states
    const [allCourses, setAllCourses] = useState([]);
    const [topCourses, setTopCourses] = useState([]);
    const [coursesByInstructor, setCoursesByInstructor] = useState([]);

    // get all courses
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=> setAllCourses(data))
        .catch(err=>{
            console.log(err.message);
        })

    
    }, [])

    // get top courses
    useEffect(()=>{
        fetch('http://localhost:5000/topCourses')
        .then(res=>res.json())
        .then(data=>setTopCourses(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [])

    // get courses by instructor
    useEffect(()=>{
        fetch(`http://localhost:5000/coursesByInstructor?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setCoursesByInstructor(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])

    return [allCourses, topCourses, coursesByInstructor];
};

export default useCourses;