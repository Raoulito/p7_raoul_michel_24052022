const userCtrl = require("../controllers/users");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/:id", userCtrl.getAUser); //ok
router.get("/friends/:id", userCtrl.getFriends);//ok
router.put("/:id/follow", userCtrl.followUser);
router.put("/:id/unfollow", userCtrl.unfollowUser);
router.put("/:id", userCtrl.updateUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;