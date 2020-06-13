import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import axios from '../../../config/backend/jsonplaceholder';
import Post from './Post/Post'

const Posts = (props) => {

    const [posts, setPost] = useState([]);
    const [resolved, setResolved] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (props.userId) {
            console.log('[Posts.js] Sending HTTP request to get the posts for the user with id:', props.userId)
            setResolved(false);
            axios.get(`/posts?userId=${props.userId}`)
                .then(response => {
                    setResolved(true);
                    setPost(response.data);
                    setError(false);
                })
                .catch(error => {
                    setResolved(true);
                    setError(true);
                });
        }
        return () => console.log('[Posts.js] Cleaning up post for user with id: ', props.userId)
    }, [props.userId]);
    if (resolved) {
        if (props.userId) {
            if (error) {
                return <p>Unable to get the posts created by {props.userName}</p>
            }
            if (!posts || posts.length <= 0) {
                return <p>{props.userName} has not created any post yet</p>
            }
        }
    } else {
        if (props.userId) {
            return <p>Loading posts created by {props.userName} ...</p>
        } else {
            return <p>Please log in to see the posts</p>
        }
    }
    return (
        posts.map((post) => {
            return <Post
                title={post.title}
                author={props.userName}
                key={post.id}
                clicked={() => props.clicked(post.id)} />
        })
    );
}

Posts.propTypes = {
    userId: PropTypes.number
};

export default Posts;