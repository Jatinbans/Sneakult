import mongoose from "mongoose";
const postsSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
},{timestamps:true})
postsSchema.index({userId:1});
export const Posts = mongoose.model("Posts", postsSchema)