import express, { Router } from "express";
import { createList } from "../controllers/listings.controllers";
const router = express.Router();
router.post('/listings',createList)
export default router;