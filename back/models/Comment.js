const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // each comment can only relates to one post
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

module.exports = mongoose.model("Comment", commentSchema);
