const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            type: Array,
            default: [],
        },
        followings: {
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isCE: {
            type: Boolean,
            default: false,
        },
        desc: {
            type: String,
            max: 50,
            default: "Éditez votre bio via la page Mon compte",
        },
        city: {
            type: String,
            max: 50,
            default: "Ajoutez votre ville actuelle via la page Mon compte",
        },
        from: {
            type: String,
            max: 50,
            default: "Ajoutez votre ville d'origine via la page Mon compte",
        },
        relationship: {
            type: Number,
            enum: [1, 2, 3],
        },
        dateBirth: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
