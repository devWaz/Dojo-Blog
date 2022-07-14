import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [data , setData] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(()=>{
        fetch( url , {signal: abortCont.signal} )
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
            if (err.name === 'AbortError'){
                console.log('fetch aborted');
            } else{
            setIsLoading(false);
            setErrorMessage(err.message);
            } 
        })
    } , 1000);

    return ()=> abortCont.abort();
    }, [url]);

    return {data , isLoading , errorMessage}
}
 
export default useFetch;
