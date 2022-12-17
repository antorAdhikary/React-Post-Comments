import React, {  useEffect, useState } from 'react';
import Post from '../Post/Post';

const Navigation = () => {
    const[post, setPost] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);

    return (
        <div>
            {
                post.map(pst => <Post post={pst}></Post>)
            }
        </div>
    );
};

export default Navigation;