import mongoose from "mongoose";
const listingsSchema = new mongoose.Schema(
    {
        id:{
            type:mongoose.Schema.Types.ObjectId,
            auto:true,
        },
        Userid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        },
        title:{
            type:String,
            required:true,
            trim:true,

        },
        description:{
            type:String,
            required:true,
            trim:true,

        },
        price:{
            type:Number,
            required:true,
            min:[0,'Price must be a positive number']

        },
    },{timestamps:true})
export const Listings = mongoose.model("Listings", listingsSchema)