import React from 'react';
import { Link } from "react-router-dom";
import {Button} from '@mui/material';

const Post = (props) => {
    const postStyle = {
        border : '2px solid #f6f',
        borderRadius : '5px',
        textAlign: 'center',
        margin: '1% 10% 3% 10%',
        padding: '10px'
    }
    const {id, title, body} = props.post;
    return (
        <div style={postStyle}>
            <h4>Title: {title}</h4>
            <p>{body.slice(0, 100)}.....<Link to={'/post/fullPost/'+ id} >
                <Button color="secondary">
                View Post</Button></Link></p>
            
        </div>
    );
};

export default Post;