import mongoose, { mongo } from "mongoose";
const reviewSchema = new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
            
        },
        rating:{
            type:Number,
            min:[1,'Rating must be atleat 1'],
            max:[5,'Rating can be atmost 5'],

        },
        comment:{
            type:String,
            trim:true,
            maxlength:[30,'It should not be more than 30 words'],
        },


    },{timestamps:true})
export const Review = mongoose.model("Review", reviewSchema)