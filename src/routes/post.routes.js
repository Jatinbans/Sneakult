import express, { Router } from "express";
import {
     createPost,
     getAllPosts,
     getPostById,
     updatePostbyId,
     deletePost,

} from "../controllers/posts.controllers.js";

const router = express.Router();
router.post('/posts',createPost);
router.get('/posts',getAllPosts);
router.get('/posts/:id',getPostById);
router.put('/posts/:id',updatePostbyId);
router.delete('/posts/:id',deletePost);
export default router;