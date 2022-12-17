import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewAllComment from '../ViewAllComment/ViewAllComment';

const ViewComment = () => {
    const [comment, setComment] = useState([]);
    const { userId } = useParams();

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, []);

    return (
        <div>
            {
                comment.map(cmmt => <ViewAllComment key={cmmt.id} comments={cmmt}></ViewAllComment>)
            }
        </div>
    );
};

export default ViewComment;