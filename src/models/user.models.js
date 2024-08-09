import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        id:{
            type:mongoose.Schema.Types.ObjectId,
            auto:true,

        },
        name:{
            type:String,
            required:true,
            trim:true,

        },
        userName:{
            type:String,
            trim:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true,

        },
        isEmailVerified:{
            type:Boolean,
            default:false,

        },
        location:{
            street: {
                type: String,
                trim: true,
            },
            city: {
                type: String,
                trim: true,
            },
            state: {
                type: String,
                trim: true,
            },
            zipCode: {
                type: String,
                trim: true,
            },
            country: {
                type: String,
                trim: true,
            },

        },
        image:{
            type:String,
            trim:true,

        },
        role:{
            type:[String],
            enum:['buyer','seller'],
            defaul:['buyer'],
        }

},{timestamps:true})
export const User = mongoose.model("User", userSchema)