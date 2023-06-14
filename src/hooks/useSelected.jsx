import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

import { useQuery } from '@tanstack/react-query';

const useSelected = () => {
    // data from context
    const {user} = useContext(AuthContext);
   
   
    

    // normal system to get data from database
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/selectedItems?email=${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=> setSelected(data))
    //     .catch(err=>{
    //         console.log(err.message);
    //     })
    // }, [user])



    // get selected data from database (using tanstack query)
    const { isLoading, refetch, error, data: selectedItems = [] } = useQuery({
        queryKey: ['selectedItems', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/selectedItems?email=${user?.email}`);

            return res.json();
        }
      })

    return [selectedItems, refetch, isLoading, error];
};

export default useSelected;