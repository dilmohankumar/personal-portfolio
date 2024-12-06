const express = require("express");
const router = express.Router();
const Message = require("./schema"); // Assuming schema is the file where your Message model is defined

// POST route to submit a message
router.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message received successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving message", error: error.message });
  }
});

// GET route to fetch all messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find(); // Fetch all messages from the MongoDB database
    res.json(messages); // Send the messages as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error: error.message });
  }
});

module.exports = router;
