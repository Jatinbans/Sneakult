import { Payments } from "../models/payments.models.js";

// Create Payment
export const createPayment = async (req, res) => {
    try {
        const { userId, amount, paymentDate, paymentMode } = req.body;
        const payment = new Payments({ userId, amount, paymentDate, paymentMode });
        await payment.save();
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Payments
export const getAllPayments = async (req, res) => {
    try {
        const payments = await Payments.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Payment by ID
export const getPaymentsById = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payments.findById(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Payment by ID
export const updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, paymentDate, paymentMode } = req.body;
        const updatedPayment = await Payments.findByIdAndUpdate(
            id,
            { amount, paymentDate, paymentMode },
            { new: true }
        );
        if (!updatedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Payment by ID
export const deletePaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPayment = await Payments.findByIdAndDelete(id);
        if (!deletedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
