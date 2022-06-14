const User = require("../models/User");
const bcrypt = require("bcrypt");

//update user
exports.updateUser = async (req, res) => {
    if (req.body.id === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(12);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).json({ error });
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json("Account has been updated");
        } catch (error) {
            res.status(500).json({ error });
        }
    } else {
        res.status(403).json("You can only update your own account");
    }
};

//Delete user
exports.deleteUser = async (req, res) => {
    if (req.body.id === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account deleted");
        } catch (error) {
            res.status(500).json({ error });
        }
    } else {
        res.status(403).json("You can only delete your own account");
    }
};

//Get a user by userId - OK postman
exports.getAUser = async (req, res) => {
    const id = req.query.id;
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
}

//Get friends
exports.getFriends = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const friends = await Promise.all(
            user.followings.map((friendId) => {
                return User.findById(friendId);
            })
        );
        let friendList = [];
        friends.map((friend) => {
            const { _id, username, profilePicture } = friend;
            friendList.push({ _id, username, profilePicture });
        });
        res.status(200).json(friendList);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Follow a user
exports.followUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("User has been followed");
            } else {
                res.status(403).json("You already follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can't follow yourself");
    }
};

//Unfollow a user
exports.unfollowUser = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("User has been unfollowed");
            } else {
                res.status(403).json("You don't follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can't unfollow yourself");
    }
}

