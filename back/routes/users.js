const userCtrl = require("../controllers/users");
const router = express.Router();
const express = require("express");
const auth = require("../middleware/auth");

router.get("/", auth, userCtrl.getAUser);
router.get("/friends/:userId", auth, userCtrl.getFriends);
router.put(":/id/follow", auth, userCtrl.followUser);
router.put(":/id/unfollow", auth, userCtrl.unfollowUser);

router.put(":/id", auth, userCtrl.updateUser);
router.delete(":/id", auth, userCtrl.deleteUser);

module.exports = router;