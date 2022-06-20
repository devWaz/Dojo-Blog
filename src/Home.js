import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data : blogs , isLoading , errorMessage} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
        { isLoading && <div>Loading....</div> }
        { errorMessage && <div>{ errorMessage}</div> }
        { blogs && <BlogList blogs={blogs} title = 'All Blogs'/> }
        </div>
     );
}


export default Home;