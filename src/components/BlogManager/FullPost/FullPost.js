import React, { useContext, useState, useEffect } from 'react'

import classes from './FullPost.module.css'

import { AuthContext } from '../../../context/AuthContext/AuthContext'
import axios from '../../../config/backend/jsonplaceholder';

const FullPost = (props) => {
    const postParam = props.match.params.id;
    const [selectedPost, setSelectedPost] = useState(null);
    const [resolved, setResolved] = useState(false);
    const [error, setError] = useState(false);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (authContext.isAuth && postParam) {
            console.log('[FullPost.js] Sending HTTP request to get the details from the post:', postParam)
            setResolved(false)
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postParam}`)
                .then(response => {
                    setResolved(true)
                    setSelectedPost(response.data)
                    setError(false)
                })
                .catch(error => {
                    setResolved(true)
                    setError(true)
                });
        }
        return () => console.log('[FullPost.js] Cleaning up previous selected post: ', postParam)
    }, [authContext.isAuth, postParam]);
    if (!authContext.isAuth) {
        return <p>Please log in to see the post</p>
    } else if (!resolved && postParam) {
        return <p>Loading post {postParam}</p>
    } else if (!resolved && !postParam) {
        return <p>Please select a post</p>
    } else if (resolved && error) {
        return <p>Unable to load the post {postParam}</p>
    } else if (resolved && !error && selectedPost) {
        return (
            <div className={classes.FullPost}>
                <h1>{selectedPost.title}</h1>
                <p>{selectedPost.body}</p>
            </div>
        )
    } else {
        return null;
    }
}

export default FullPost;