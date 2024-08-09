import { Review } from "../models/reviews.models.js";
//create review
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
};

//get all reviews
export const getAllReviews = async(req,res)=>{
    try{
        const allReviews = await Review.find();
        res.status(200).json(allReviews)
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};
//get review by id
export const getReviewById = async(req,res)=>{
    try{
        const {id} = req.params;
        const review = await Review.findById(id);
        if(!review){
            return res.status(404).json({message:'Review not found'});
        }
        res.status(200).json(review);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
//update review by id
export const updatereview = async(req,res)=>{
    try{
        const {id} = req.params;
        const{rating,comment} = req.body;
        const updatedReview = await Review.findByIdAndUpdate(id,
            {rating,comment},
            {new :true}
        );
        if(!updatedReview){
            return res.status(404).json({message:'Review not found'});
        }
        res.status(200).json(updatedReview);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}

//delete review by id
export const deleteReview = async(req,res)=>{
    try{
        const {id} = req.params;
        const deletedReview = await Review.findByIdAndDelete(id);
        if(!deletedReview){
            return res.status(404).json({message:'Review not found'});
        }
        res.status(200).json({message:"Review deleted successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};

