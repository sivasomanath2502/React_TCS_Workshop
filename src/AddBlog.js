import { useState } from 'react';

const AddBlog = () => {
    const [blog, setBlog] = useState("");
    const [blogs, setBlogs] = useState([]);

    const handleOnChange = (e) => {
        setBlog(e.target.value);
    }

    const handleOnSubmit = () => {
        if(blog === "")
            alert('Empty blog not allowed!');
        else {
            setBlogs([...blogs, blog]);
            setBlog("");    
        }
    }

    const handleReset = () => {
        setBlogs([]);
    }

    return (
        <div>
            <input onChange={handleOnChange} value={blog} type="text" style={{padding: "10px"}}/>
            <button onClick={handleOnSubmit} className='btn'>Submit</button>
            <button onClick={handleReset} className='btn'>Reset Blog</button>
            {
                blogs.length === 0 && <h2>No Blogs available</h2>
            }
            <ol>
                { blogs.map((blog, index) => <li key={index} className='list'>{blog}</li>) }
            </ol>
        </div>
    );
}

export default AddBlog;
