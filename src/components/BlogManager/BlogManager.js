import React, { useState, useEffect, useContext } from 'react';

import classes from './BlogManager.module.css'

import Posts from './Posts/Posts'
import FullPost from './FullPost/FullPost'
import WithClass from '../../hoc/WithClass/WithClass'
import { AuthContext } from '../../context/AuthContext/AuthContext'

const BlogManager = (props) => {
    const authContext = useContext(AuthContext);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        console.log('[BlogManager.js] Performing side effect')
        return () => console.log('[BlogManager.js] Cleaning up previous side effect')
    }, [authContext.userId]);

    const clickPostHandler = (postId) => {
        setSelectedPost(postId);
    }

    return (
        <WithClass classes={classes.BlogManager}>
            <section className={classes.Post}>
                <Posts userId={authContext.userId} userName={authContext.userName} clicked={clickPostHandler} />
            </section>
            <FullPost selectedPost={selectedPost} />
        </WithClass>
    );
}

export default BlogManager;
