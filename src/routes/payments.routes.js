import express from "express";
import { 
    createPayment,
    getAllPayments,
    getPaymentsById,
    updatePayment,
    deletePaymentById
} from "../controllers/payments.controllers.js";

const router = express.Router();

router.post('/payments', createPayment);
router.get('/payments', getAllPayments);
router.get('/payments/:id', getPaymentsById);
router.put('/payments/:id', updatePayment);
router.delete('/payments/:id', deletePaymentById);

export default router;
