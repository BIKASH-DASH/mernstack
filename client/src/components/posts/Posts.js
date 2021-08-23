import React from 'react'
import Post from './post/Post'
import useStyles from './styles'

import {useSelector} from 'react-redux'

export default function Posts() {
    const classes = useStyles();
    const posts = useSelector((state)=>state.Posts);
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            <Post/>
        </div>
    )
}
