const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/users"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/uploadCover", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Cover photo uploaded successfully");
  } catch (error) {
    console.error(error);
  }
});
//upadate user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).send(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    return res.status(403).send("You can update only your account");
  }
});
//delete user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      res.status(200).send("Account has been deleted");
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    return res.status(403).send("You can delete only your account");
  }
});

//get user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    let user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).send(other);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get friends
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.friends.map((friendId) => {
        return User.findById(friendId);
      })
    );

    let friendsList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendsList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendsList);
  } catch (error) {
    res.status(500).json(error);
  }
});

// follow user

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).send("user has been followed");
      } else {
        res.status(403).send("your allready follow this user");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("you cant follow yourself");
  }
});

// unfollow user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).send("user has been unfollowed");
      } else {
        res.status(403).send("your dont followed this user");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("you cant unfollow yourself");
  }
});

// send Request

router.put("/:id/sentreq", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!currentUser.sentReq.includes(req.params.id)) {
        await user.updateOne({ $push: { pendingReq: req.body.userId } });
        await currentUser.updateOne({ $push: { sentReq: req.params.id } });
        res.status(200).send("Request has been sended");
      } else {
        res.status(403).send("you allready sent a request");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("you cant sent friend request to yourself");
  }
});

// un friend
router.put("/:id/unfriend", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (currentUser.friends.includes(req.params.id)) {
        await user.updateOne({ $pull: { friends: req.body.userId } });
        await currentUser.updateOne({ $pull: { friends: req.params.id } });
        res.status(200).send("user has been unfriended");
      } else {
        res.status(403).send("this user is not your friende");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("you cant unfriend yourself");
  }
});

// accept req
router.put("/:id/accept", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (currentUser.pendingReq.includes(req.params.id)) {
        await user.updateOne({ $pull: { sentReq: req.body.userId } });
        await currentUser.updateOne({ $pull: { pendingReq: req.params.id } });
        await user.updateOne({ $push: { friends: req.body.userId } });
        await currentUser.updateOne({ $push: { friends: req.params.id } });
        res.status(200).send("friend request accepted");
      } else {
        res.status(403).send("this user is not your friende");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("you cant unfriend yourself");
  }
});

// cancel req
router.put("/:id/cancelreq", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (currentUser.sentReq.includes(req.params.id)) {
        await user.updateOne({ $pull: { pendingReq: req.body.userId } });
        await currentUser.updateOne({ $pull: { sentReq: req.params.id } });
        res.status(200).send("friend request cancel");
      } else {
        res.status(403).send("this user is not your friende");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("you cant unfriend yourself");
  }
});

// delete req from pending req
router.put("/:id/deletereq", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (currentUser.pendingReq.includes(req.params.id)) {
        await user.updateOne({ $pull: { sentReq: req.body.userId } });
        await currentUser.updateOne({ $pull: { pendingReq: req.params.id } });
        res.status(200).send("friend request deleted");
      } else {
        res.status(403).send("this user is not your in your pending requests");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(403).send("you cant delete friend request");
  }
});

//find friends
router.get("/suggestions", async (req, res) => {
  const userId = req.query.userId;
  console.log(userId);
  try {
    const result = await User.find({
      $and: [
        { _id: { $ne: userId } },
        { friends: { $ne: userId } },
        { sentReq: { $ne: userId } },
        { pendingReq: { $ne: userId } },
      ],
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

//pending requestw
router.get("/pendingrequest", async (req, res) => {
  try {
    const user = await User.findById(req.query.userId);
    const pendings = await Promise.all(
      user.pendingReq.map((friendId) => {
        return User.findById(friendId);
      })
    );

    let pendingList = [];
    pendings.map((pending) => {
      pendingList.push(pending);
    });
    res.status(200).json(pendingList);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
