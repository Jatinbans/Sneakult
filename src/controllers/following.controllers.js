import { Following } from "../models/following.models.js";

//follow a user
export const followUser = async (req, res) => {
    try {
        const { userId, followingId } = req.body;
        const existingFollow = await Following.findOne({ userId, followingId });

        if (existingFollow) {
            return res.status(400).json({ message: "Already following this user" });
        }

        const newFollow = new Following({ userId, followingId });
        await newFollow.save();
        res.status(201).json(newFollow);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//unfollow user
export const unfollowUser = async (req, res) => {
    try {
        const { userId, followingId } = req.body;
        const follow = await Following.findOneAndDelete({ userId, followingId });

        if (!follow) {
            return res.status(404).json({ message: "You are not following this user" });
        }

        res.status(200).json({ message: "Unfollowed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//allusers, a user is following
export const getFollowing = async (req, res) => {
    try {
        const { userId } = req.params;
        const following = await Following.find({ userId }).populate('followingId');
        res.status(200).json(following);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//get user of specific user
export const getFollowers = async (req, res) => {
    try {
        const { followingId } = req.params;
        const followers = await Following.find({ followingId }).populate('userId');
        res.status(200).json(followers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//check if user is follwing another user
export const isFollowing = async (req, res) => {
    try {
        const { userId, followingId } = req.params;
        const isFollowing = await Following.findOne({ userId, followingId });

        if (!isFollowing) {
            return res.status(404).json({ message: "Not following this user" });
        }

        res.status(200).json({ message: "Following" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
