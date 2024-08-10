import mongoose from "mongoose";
const followingSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        followingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
    }, { timestamps: true })
export const Following = mongoose.model("Following", followingSchema)