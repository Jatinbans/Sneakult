import { User } from "../models/user.models.js";
//create user
export const createUser = async (req, res) => {
    try {
        const { name, email, isEmailVerified, location, image, role } = req.body;
        const user = new User({ name, email, isEmailVerified, location, image, role })
        await user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
};
//get all users
// Get all users
export const getAllUsers = async (_, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get user by id
// Get user by ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//update user by id
// Update user by ID
export const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, isEmailVerified, location, image, role } = req.body;
        const updatedUser = await User.findByIdAndUpdate(id,
            { name, email, isEmailVerified, location, image, role },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//delete user by id
// Delete user by ID
export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
