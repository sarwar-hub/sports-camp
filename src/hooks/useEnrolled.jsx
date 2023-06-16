import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useEnrolled = () => {
    const {user} = useContext(AuthContext);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    // normal system to get data from database
    useEffect(()=>{
        fetch(`http://localhost:5000/enrolledCourses?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=> setEnrolledCourses(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])
    return [enrolledCourses];
};

export default useEnrolled;