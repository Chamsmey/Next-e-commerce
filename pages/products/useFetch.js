import { useEffect, useState } from "react";

const useFetch =  (path) => {
    const [data,setData] =useState([]);

    useEffect(()=>{
        const getData= async()=>
            await fetch('https://fakestoreapi.com/products/'+path)
            .then(res=> res.json()).then(data=>{
                console.log(data)
                setData(data)
            } )
        
          
          // call back
          getData()
    },
    // unsubscribe 
    []
    )
    


return data
}
 
export default useFetch;