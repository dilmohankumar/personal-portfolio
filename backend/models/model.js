const express = require("express");
const router = express.Router();
const Messagess = require("../schemas/schema.js");
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Messagess({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message received successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving message", error: error.message });
  }
});
router.get("/messages", async (req, res) => {
  try {
    const messages = await Messagess.find();
    res.json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching messages", error: error.message });
  }
});
module.exports = router;
