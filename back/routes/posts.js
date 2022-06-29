const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/posts");
const auth = require("../middleware/auth");

router.get("/", postCtrl.getAllPosts);

router.get("/profile", auth, postCtrl.getPosts);
router.get("/timeline/:id", auth, postCtrl.getPostsById);
router.get("/:id", auth, postCtrl.getPost); 
router.post("/",  postCtrl.createPost);
router.put("/:id/like", auth, postCtrl.likePost);
router.put("/:id", postCtrl.updatePost);
router.delete("/:id", postCtrl.deletePost); 

module.exports = router;
