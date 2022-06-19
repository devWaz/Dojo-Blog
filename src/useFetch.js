import { useEffect, useState } from "react";

const useFetch = () => {
    return ( 
    const [blogs , setBlogs] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);

    useEffect(() => {
        setTimeout(()=>{
        fetch( 'http://localhost:8000/blogs' )
        .then(res => {
            if (!res.ok){
            throw Error("Could not fetch data for that resource");
            }
            return res.json();
        })
        .then(data =>{
            setBlogs(data);
            setIsLoading(false);
            setErrorMessage(null);
        })
        .catch(err => {
            setIsLoading(false)
            setErrorMessage(err.message)
        })
    } , 1000)
    }, []);

     );
}
 
export default useFetch;