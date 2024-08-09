import { Review } from "../models/reviews.models.js";
export const createReview = async(req,res)=> {
    try{
        const{userId, rating, comment} = req.body;
        const review = new Review({userId,rating,comment});
        await review.save();
        res.status(201).json(review);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}