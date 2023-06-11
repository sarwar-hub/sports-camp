import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useUser = () => {
    // founded user from database
    const [currentUser, setCurrentUser] = useState({});

    // user from context (logged in user)
    const {user} = useContext(AuthContext);
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/currentUser?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setCurrentUser(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])

    return [currentUser];
};

export default useUser;