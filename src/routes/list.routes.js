import express, { Router } from "express";
import { 
    createList,
    getAllListings,
    getListingById,
    updateListing,
    deleteListing,

 } from "../controllers/listings.controllers.js";
const router = express.Router();
router.post('/listings',createList)
router.get('/listings',getAllListings)
router.get('/listings/:id',getListingById)
router.put('/listings/:id',updateListing)
router.delete('/listings/:id',deleteListing)
export default router;