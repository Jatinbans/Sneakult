import mongoose from "mongoose";

const paymentsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: [0, 'Amount must be a positive number'],
    },
    paymentDate: {
        type: Date,
        default: Date.now,
    },
    paymentMode: {
        type: String, // Should be a single string, not an array
        enum: ['upi', 'card'],
        default: 'upi',
    },
}, { timestamps: true });

paymentsSchema.index({ userId: 1, paymentDate: 1 }, { unique: true });

export const Payments = mongoose.model("Payments", paymentsSchema);
