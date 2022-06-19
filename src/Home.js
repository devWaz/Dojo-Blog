import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {


    return ( 
        <div className="home">
        { isLoading && <div>Loading....</div> }
        { errorMessage && <div>{ errorMessage}</div> }
        { blogs && <BlogList blogs={blogs} title = 'All Blogs'/> }
        </div>
     );
}


export default Home;