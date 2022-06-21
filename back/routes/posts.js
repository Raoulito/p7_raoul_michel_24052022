const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/posts");
const auth = require("../middleware/auth");

router.get("/", postCtrl.getAllPosts);

router.get("/profile", postCtrl.getPosts);
router.get("/timeline/:id", postCtrl.getPostsById);
router.get("/:id", postCtrl.getPost); 
router.post("/", postCtrl.createPost);
router.put("/:id/like", postCtrl.likePost);
router.put("/:id", postCtrl.updatePost);
router.delete("/:id", postCtrl.deletePost); 

module.exports = router;
