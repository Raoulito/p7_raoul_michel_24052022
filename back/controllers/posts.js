const Post = require("../models/Post");
const User = require("../models/User");

//Create a post - OK postman
exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Update a post - OK Postman
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
        } else {
            res.status(403).json("you can update only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

//Delete a post - OK postman
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("The post has been deleted");
        } else {
            res.status(403).json("You can only delete your posts");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

//Get user's all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.userId });
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error });
    }
};

//Get timeline posts
exports.getPostsById = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (error) {
        res.status(500).json({ error });
    }
};

//get a post - OK postman
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error });
    }
};

//(dis)like a post
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
