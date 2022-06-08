const commentCtrl = require("../controllers/comment");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.post("post/:id/comment", auth, commentCtrl.createComment);