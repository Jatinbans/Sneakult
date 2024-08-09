import express from "express";
import { createReview } from "../controllers/reviews.controllers.js";
const router = express.Router();
router.post('/reviews',createReview);
export default router;