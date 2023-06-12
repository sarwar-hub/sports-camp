import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import useCourses from "./useCourses";

const useSelected = () => {
    // data from context
    const {user} = useContext(AuthContext);
    
    const [selected, setSelected] = useState([]);
    const selectedItems = [];

    // get all courses
    const [allCourses, ] = useCourses();
    
        for (const courseItem of selected) {

            const matchedItem = allCourses.find(course => course._id === courseItem.courseId);

            selectedItems.push(matchedItem);
        }
    


    useEffect(()=>{
        fetch(`http://localhost:5000/selectedItems?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setSelected(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])

    return [selectedItems];
};

export default useSelected;