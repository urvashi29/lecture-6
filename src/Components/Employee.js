import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Employee = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res) => {
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });
    });

    // (condition) ? () : ()
    const postList = (post.length) ? (post.map((info) => {
        return (
            <React.Fragment key={info.id}>
                <p><Link to={'/employee/' + info.id}>Title: {info.title}</Link></p>
                <p>Body: {info.body}</p>
            </React.Fragment>
        )
    })) : (<p>No data Yet!</p>)


    return (
        <React.Fragment>
            Employee Page
            {postList}
        </React.Fragment>
    )
}

export default Employee;