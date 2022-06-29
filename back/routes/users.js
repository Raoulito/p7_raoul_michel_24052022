const userCtrl = require("../controllers/users");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/:id", userCtrl.getAUser); 
router.get("/friends/:id", auth, userCtrl.getFriends);
router.put("/:id/follow", auth, userCtrl.followUser);
router.put("/:id/unfollow", auth, userCtrl.unfollowUser);
router.put("/:id", auth, userCtrl.updateUser);
router.delete("/:id", auth, userCtrl.deleteUser);

module.exports = router;