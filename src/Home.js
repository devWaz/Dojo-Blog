import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs , setBlogs] = useState(null);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };
    
    useEffect(() => {
        fetch('http://http://localhost:8000/blogs')
        .then(res => {return res.json();})
        .then(data =>{
            console.log(data);
        })
    }, []);

    return ( 
        <div className="home">
        <BlogList blogs={blogs} title = 'All Blogs' handleDelete ={handleDelete}/>
        </div>
     );
}
 


export default Home;