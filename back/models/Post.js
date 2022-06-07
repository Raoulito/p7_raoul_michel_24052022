const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
        //A post can have multiple comment, so array. A VOIR PLUS TARD IL Y A UN TRUC QUI NE MARCHE PAS AVEC LE MODEL COMMENT
        // comments: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Comment",
        //     },
        // ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
