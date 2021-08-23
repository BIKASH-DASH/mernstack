import express from 'express'
import {getPosts,createPost} from '../controllers/posts'
export const postRoutes = express.Router();

postRoutes.get('/',getPosts)
postRoutes.post('/',createPost)
