import React from 'react'
import Post from './post/Post'
import useStyles from './styles'
export default function Posts() {
    const classes = useStyles();
    return (
        <div>
            <h1>Posts</h1>
            <Post/>
        </div>
    )
}
