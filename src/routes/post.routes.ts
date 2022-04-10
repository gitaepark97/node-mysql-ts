import { Router } from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.controller'

const router = Router()

router.route('/').get(getPosts).post(createPost)

router.route('/:postId').get(getPost).put(updatePost).delete(deletePost)

export default router
