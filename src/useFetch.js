import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [data , setData] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);

    useEffect(() => {
        setTimeout(()=>{
        fetch( url )
        .then(res => {
            if (!res.ok){
            throw Error("Could not fetch data for that resource!");
            }
            return res.json();
        })
        .then(data =>{
            setData(data);
            setIsLoading(false);
            setErrorMessage(null);
        })
        .catch(err => {
            setIsLoading(false);
            setErrorMessage(err.message);
        })
    } , 1000)
    }, [url]);

    return {data , isLoading , errorMessage}
}
 
export default useFetch;
