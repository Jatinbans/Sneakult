import mongoose, { mongo } from "mongoose";
const followersSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,

        },
        followerId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        },

},{timestamps:true})
export const Followers = mongoose.model("Followers", followersSchema)