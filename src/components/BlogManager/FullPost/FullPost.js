import React, { useState, useEffect } from 'react'

import classes from './FullPost.module.css'

import axios from '../../../config/backend/jsonplaceholder';

const FullPost = (props) => {

    const [selectedPosts, setSelectedPosts] = useState(null);
    const [resolved, setResolved] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (props.selectedPost) {
            console.log('[FullPost.js] Sending HTTP request to get the details from the post:', props.selectedPost)
            setResolved(false)
            axios.get(`https://jsonplaceholder.typicode.com/posts/${props.selectedPost}`)
                .then(response => {
                    setResolved(true)
                    setSelectedPosts(response.data)
                    setError(false)
                })
                .catch(error => {
                    setResolved(true)
                    setError(true)
                });
        }
        return () => console.log('[FullPost.js] Cleaning up previous selected post: ', props.selectedPost)
    }, [props.selectedPost]);
    let post = null;
    if (resolved) {
        if (selectedPosts) {
            if (error) {
                return <p>Unable to load the post {props.selectedPost}</p>
            } else {
                post = ([
                    <h1 key="1">{selectedPosts.title}</h1>,
                    <p key="2">{selectedPosts.body}</p>
                ])
            }
        }
    } else {
        if (selectedPosts) {
            return <p>Loading posts {props.selectedPost}</p>
        } else {
            return <p>Please Select a post</p>
        }
    }
    return (<div className={classes.FullPost}>{post}</div>)
}

export default FullPost;