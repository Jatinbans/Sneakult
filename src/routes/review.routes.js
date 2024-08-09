import express from "express";
import { 
    createReview,
    getAllReviews,
    getReviewById,
    updatereview,
    deleteReview,
 } from "../controllers/reviews.controllers.js";
const router = express.Router();
router.post('/reviews',createReview);
router.get('/reviews',getAllReviews);
router.get('/reviews/:id',getReviewById);
router.put('/reviews/:id',updatereview);
router.delete('/reviews/:id',deleteReview);
export default router;