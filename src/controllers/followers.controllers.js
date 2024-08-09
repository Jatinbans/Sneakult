import { Followers } from "../models/followers.models.js";

//follow a user
export const followUser = async (req, res) => {
    try {
        const { userId, followerId } = req.body;
        const existingFollow = await Followers.findOne({ userId, followerId });

        if (existingFollow) {
            return res.status(400).json({ message: "Already following this user" });
        }

        const newFollow = new Followers({ userId, followerId });
        await newFollow.save();
        res.status(201).json(newFollow);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//unfollow a user
export const unfollowUser = async (req, res) => {
    try {
        const { userId, followerId } = req.body;
        const follow = await Followers.findOneAndDelete({ userId, followerId });

        if (!follow) {
            return res.status(404).json({ message: "You are not following this user" });
        }

        res.status(200).json({ message: "Unfollowed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//get follower of user
export const getFollowers = async (req, res) => {
    try {
        const { userId } = req.params;
        const followers = await Followers.find({ userId }).populate('followerId');
        res.status(200).json(followers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get following of user
export const getFollowing = async (req, res) => {
    try {
        const { followerId } = req.params;
        const following = await Followers.find({ followerId }).populate('userId');
        res.status(200).json(following);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//check if user is following a user
export const isFollowing = async (req, res) => {
    try {
        const { userId, followerId } = req.params;
        const isFollowing = await Followers.findOne({ userId, followerId });

        if (!isFollowing) {
            return res.status(404).json({ message: "Not following this user" });
        }

        res.status(200).json({ message: "Following" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
