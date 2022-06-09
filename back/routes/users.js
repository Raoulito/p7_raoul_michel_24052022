const userCtrl = require("../controllers/users");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/:id", userCtrl.getAUser);
router.get("/friends/:userId", userCtrl.getFriends);
router.put("/:id/follow", userCtrl.followUser);
router.put("/:id/unfollow", userCtrl.unfollowUser);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;