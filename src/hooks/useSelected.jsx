import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

import { useQuery } from '@tanstack/react-query';

const useSelected = () => {
    // data from context
    const {user} = useContext(AuthContext);
   
    

    // normal system to get data from database
    // useEffect(()=>{
    //     fetch(`https://sports-camp-server-neon.vercel.app/selectedItems?email=${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=> setSelected(data))
    //     .catch(err=>{
    //         console.log(err.message);
    //     })
    // }, [user])



    // get selected data from database (using tanstack query)
    const {data: selectedItemss = [], isLoading, refetch, error } = useQuery({
        queryKey: ['selectedItems', user?.email],
        queryFn: async() =>{
            const res = await fetch(`https://sports-camp-server-neon.vercel.app/selectedItems?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            });

            return res.json();
        }
      })

    return [selectedItemss, refetch, isLoading, error];
};

export default useSelected;