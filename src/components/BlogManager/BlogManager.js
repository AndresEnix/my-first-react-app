import React, { useEffect, useContext } from 'react';

import classes from './BlogManager.module.css'

import Posts from './Posts/Posts'
import WithClass from '../../hoc/WithClass/WithClass'
import { AuthContext } from '../../context/AuthContext/AuthContext'

const BlogManager = (props) => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[BlogManager.js] Performing side effect')
        return () => console.log('[BlogManager.js] Cleaning up previous side effect')
    }, [authContext.userId]);

    return (
        <WithClass classes={classes.BlogManager}>
            <section className={classes.Post}>
                <Posts userId={authContext.userId} userName={authContext.userName}/>
            </section>
        </WithClass>
    );
}

export default BlogManager;
