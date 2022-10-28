import { useEffect, useState } from "react";
import axios from "axios";
 const useFetch =  (path) => {
    const [data,setData] =useState(null);

            useEffect(()=>{
                const getData= async()=>
                    axios.get('https://fakestoreapi.com/'+ path)
                    .then(res=> setData(res.data))
                    getData()
            },
            // unsubscribe 
            []
    )
    


return {data}
}
 
export default useFetch;