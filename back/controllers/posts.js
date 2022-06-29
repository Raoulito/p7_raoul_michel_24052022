const Post = require("../models/Post");
const User = require("../models/User");

//Create a post
exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Update a post
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId || req.body.isAdmin) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated");
        } else {
            res.status(403).json("You can update only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

//Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId || req.body.isAdmin) {
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
        const user = await User.findById(req.params.id);
        const posts = await Post.find({ userId: user._id });
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error });
    }
};

//Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error });
    }
};

//Get timeline posts
exports.getPostsById = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.id);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.reverse().map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (error) {
        res.status(500).json({ error });
    }
};

//get a post
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({ post });
    } catch (error) {
        res.status(500).json({ error });
    }
};

//(dis)like a post with userId and postId in body
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.body.postId);
        if (post.likes.includes(req.body.userId)) {
            post.likes = post.likes.filter((id) => id !== req.body.userId);
        } else {
            post.likes.push(req.body.userId);
        }
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error });
    }
};
