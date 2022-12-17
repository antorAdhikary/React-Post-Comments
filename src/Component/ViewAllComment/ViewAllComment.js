import React from 'react';

const ViewAllComment = (props) => {
    const commentStyle = {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '10px',
        margin: '20px',
    }
    const { name, email, body, id } = props.comments;
   
    return (
        <div>
            <div style={commentStyle}>
                {id}
                <h3>Comment By : {name}</h3>
                <p>{email}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default ViewAllComment;