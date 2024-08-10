import express, { Router } from "express";
import {
     createPost,
     getAllPosts,
     getPostById,
     updatePostbyId,
     deletePost,

} from "../controllers/posts.controllers.js";

const router = express.Router();
router.post('/',createPost);
router.get('/',getAllPosts);
router.get('/:id',getPostById);
router.put('/:id',updatePostbyId);
router.delete('/:id',deletePost);
export default router;