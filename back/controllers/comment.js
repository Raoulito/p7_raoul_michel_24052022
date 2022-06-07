const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

export.createComment = async (req, res) => {
    const id = req.params.id;
    const comment = new Comment({
        text: req.body.comment,
        post: id,
        user: req.user._id,
    });
    await comment.save();
    res.status(201).json(comment);
    const relatedPost = await Post.findById(id);
    relatedPost.comments.push(comment);
    await relatedPost.save(function (err) {
        if (err) {
            res.status(500).json(err);
        }
        res.redirect("/post/" + id);
    });
    }