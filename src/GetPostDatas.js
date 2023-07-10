import {useEffect, useState} from 'react';
import axios from 'axios';

const GetPostDatas = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        return () => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(data => setPosts(data.data))
            .catch(err => console.log(err));
        };
    }, []);

    return (
        <div>
            <h3>Posts</h3>
            <ol>
                { posts.map((post, index)  => <li key={index} className='list'> {post.title} </li>) }
            </ol>
        </div>
    );
}

export default GetPostDatas;
