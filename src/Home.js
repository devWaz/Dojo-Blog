import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs , setBlogs] = useState([
        {title: 'BlockChain Basics' , body: 'lorem ipsum yeah...' , author: 'devWaz' , id: 1},
        {title: 'Python for Beginners' , body: 'lorem ipsum yeah...' , author: 'Charles Arigato' , id: 2},
        {title: 'Welcome to the Backend' , body: 'lorem ipsum yeah...' , author: 'Boy Developer' , id: 3},
        {title: 'Solidity for Dummies' , body: 'lorem ipsum yeah...' , author: 'devWaz' , id: 4}
    ]);

    const [name , setName] = useState('Fawaz');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(() => {
        console.log('has run');
    }, []);

    return ( 
        <div className="home">
        <BlogList blogs={blogs} title = 'All Blogs' handleDelete ={handleDelete}/>
        </div>
     );
}
 


export default Home;