import { Listings } from "../models/listings.models.js";

// Create a listing
export const createList = async (req, res) => {
    try {
        const { userId, title, description, price } = req.body;
        const list = new Listings({ userId, title, description, price });
        await list.save();
        res.status(201).json(list);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all listings
export const getAllListings = async (req, res) => {
    try {
        const listings = await Listings.find();
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get listing by ID
export const getListingById = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listings.findById(id);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a listing
export const updateListing = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price } = req.body;
        const updatedListing = await Listings.findByIdAndUpdate(
            id,
            { title, description, price },
            { new: true } // Return the updated document
        );
        if (!updatedListing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        res.status(200).json(updatedListing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete listing by ID
export const deleteListing = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listings.findByIdAndDelete(id);
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        res.status(200).json({ message: "Listing deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
