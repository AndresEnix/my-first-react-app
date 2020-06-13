import React from 'react'

import classes from './Post.module.css'

const Post = (props) => {
    return (
        <article className={classes.Post} onClick={props.clicked}>
            <h2>{props.title}</h2>
            <p>Created by {props.author}</p>
        </article>
    )
}

export default Post;