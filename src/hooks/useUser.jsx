import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useUser = () => {
    // founded user from database
    const [currentUser, setCurrentUser] = useState({});
    const [allUsers, setAllUsers] = useState([]);

    // user from context (logged in user)
    const {user} = useContext(AuthContext);

    // get all users from database
    useEffect(()=>{
        fetch(`http://localhost:5000/users`)
        .then(res=>res.json())
        .then(data=>setAllUsers(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/currentUser?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setCurrentUser(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])

    return [allUsers, currentUser];
};

export default useUser;