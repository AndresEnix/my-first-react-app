import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../../context/AuthContext/AuthContext'
import axios from '../../../config/backend/jsonplaceholder';
import Post from './Post/Post'

const Posts = (props) => {

    const [posts, setPost] = useState([]);
    const [resolved, setResolved] = useState(false);
    const [error, setError] = useState(false);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (authContext.isAuth && props.userId) {
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
    }, [authContext.isAuth, props.userId]);
    if (!authContext.isAuth) {
        return <p>Please log in to see the posts</p>
    } else if (!resolved && props.userId) {
        return <p>Loading posts created by {props.userName}</p>
    } else if (!resolved && !props.userId) {
        return <p>Please specify the user</p>
    } else if (resolved && error) {
        return <p>Unable to load the posts from {props.userName}</p>
    } else if (resolved && !error) {
        return (
            posts.map((post) => {
                return (
                    <Link exact="true" to={'/post/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={props.userName} />
                    </Link>
                )
            })
        );
    } else {
        return null;
    }

}

Posts.propTypes = {
    userId: PropTypes.string
};

export default Posts;