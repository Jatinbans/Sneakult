import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,

        },
        rating: {
            type: Number,
            min: [1, 'Rating must be atleat 1'],
            max: [5, 'Rating can be atmost 5'],

        },
        comment: {
            type: String,
            trim: true,
            maxlength: [30, 'It should not be more than 30 words'],
        },


    }, { timestamps: true })
export const Review = mongoose.model("Review", reviewSchema)