const router = require("express").Router();

const Conversation = require("../models/conversation.model");

//new conv

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.recieverId],
  });
  try {
    const savedConversation = await newConversation.save();
    res.status(200).send(savedConversation);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get conv of a user

router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).send(conversation);
  } catch (error) {
    res.status(500).send(err);
  }
});
module.exports = router;
