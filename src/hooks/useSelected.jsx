import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useSelected = () => {
    // data from context
    const {user} = useContext(AuthContext);

    // selected items state
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/selectedItems?email=${user.email}`)
        .then(res=>res.json())
        .then(data=> setSelectedItems(data))
        .catch(err=>{
            console.log(err.message);
        })
    }, [user])

    return [selectedItems];
};

export default useSelected;