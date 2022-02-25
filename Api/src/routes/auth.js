const router = require("express").Router();
const User = require("../models/user.model");

const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
  try {
    //   generate new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("user not found");
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).send("wrong password");

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
