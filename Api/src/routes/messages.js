const router = require("express").Router();
const Message = require("../models/message.model");

//create

router.post("/", async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(200).send(newMessage);
  } catch (error) {
    res.status(500).send(error);
  }
});

//get

router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
