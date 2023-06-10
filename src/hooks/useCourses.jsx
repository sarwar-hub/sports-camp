import { useState } from "react";
import { useEffect } from "react";


const useCourses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [topCourses, setTopCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=> setAllCourses(data))
        .catch(err=>{
            console.log(err.message);
        })

    
    }, [])

    useEffect(()=>{
        fetch('http://localhost:5000/topCourses')
        .then(res=>res.json())
        .then(data=>setTopCourses(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [])

    return [allCourses, topCourses];
};

export default useCourses;