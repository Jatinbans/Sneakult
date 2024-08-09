import express, { Router } from "express";
import { createPost } from "../controllers/posts.controllers";

const router = express.Router();
router.post('/posts',createPost);
export default Router;