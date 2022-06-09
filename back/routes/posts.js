const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/posts");
const auth = require("../middleware/auth");

router.get("/profile/:username", postCtrl.getPosts);// PAS OK postman
router.get("/timeline/:userId", postCtrl.getPostsById);// PAS OK postman
router.get("/:id", postCtrl.getPost); //OK postman
router.post("/", postCtrl.createPost); //OK postman
router.put("/:id/like", auth, postCtrl.likePost);
router.put("/:id", postCtrl.updatePost); //OK postman
router.delete("/:id", postCtrl.deletePost); //OK postman

module.exports = router;
