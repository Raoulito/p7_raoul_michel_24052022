const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/posts");
const auth = require("../middleware/auth");

router.get("/profile/:username", auth, postCtrl.getPosts);
router.get("timeline/:userId", auth, postCtrl.getPostsById);
router.get("/:id", auth, postCtrl.getPost);
router.post("/", postCtrl.createPost);
router.put("/:id/like", auth, postCtrl.likePost);
router.put("/:id", auth, postCtrl.updatePost);
router.delete("/:id", auth, postCtrl.deletePost);

module.exports = router;
