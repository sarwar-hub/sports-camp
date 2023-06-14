import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
    // founded user from database
    const [currentUser, setCurrentUser] = useState({});

    // user from context (logged in user)
    const {user} = useContext(AuthContext);

    // // get all users from database
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/users`)
    //     .then(res=>res.json())
    //     .then(data=>setAllUsers(data))
    //     .catch(err=>{
    //         console.log(err.message);
    //     })
    // }, [user])


    // get all users using tanstack
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['users', user],
        queryFn: async() =>{
          const res = await fetch('http://localhost:5000/users');
          return res.json();
        }
      })
    
    
    useEffect(()=>{
        fetch(`http://localhost:5000/currentUser?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setCurrentUser(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])

    return [allUsers, currentUser, refetch];
};

export default useUser;