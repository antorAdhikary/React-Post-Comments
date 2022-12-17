import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const PostDetails = () => {
    const [mainpst, setMainpst] = useState({});
    const { id } = useParams();
    const postStyle = {
        border: '2px solid blue',
        borderRadius: '5px',
        padding: '10px',
        margin: '20px'
    }
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMainpst(data));
    });
    const { title, body, userId } = mainpst;

    return (
        <div style={postStyle}>
            
            <h3>Post Create By : {userId}</h3>
            <h1>Title: {title}</h1>
            <h2>{body} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fugiat molestias in vero quae perferendis vel commodi quibusdam? Quam, adipisci?</h2>

            <h3><Link to={'/post/fullPost/comment/' + userId}>
                <Button variant="outlined">
                    View Comment
                </Button>
            </Link></h3>
        </div>
    );
};

export default PostDetails;