import { useState } from "react";
import { useEffect } from "react";

const useInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [topInstructors, setTopInstructors] = useState([]);
    
    useEffect(()=>{
        fetch('https://sports-camp-server-neon.vercel.app/instructors')
        .then(res=>res.json())
        .then(data=>setAllInstructors(data))
        .catch(err=>{
            console.log(err.message);
        })

    }, [])
    
    useEffect(()=>{
        fetch('https://sports-camp-server-neon.vercel.app/topInstructors')
        .then(res=>res.json())
        .then(data=>setTopInstructors(data))
        .catch(err=>{
            console.log(err.message);
        })

    }, [])
    
    return [allInstructors, topInstructors];
};

export default useInstructors;