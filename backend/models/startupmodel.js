const express = require("express");
const router = express.Router();
const StartupMessage = require("../schemas/startupschema");
router.post("/", async (req, res) => {
  const { name, email, projectCategory, focus, details } = req.body;
  try {
    const newStartupMessage = new StartupMessage({
      name,
      email,
      projectCategory,
      focus,
      details,
    });
    await newStartupMessage.save();
    res
      .status(201)
      .json({ message: "Startup project request submitted successfully!" });
  } catch (error) {
    res.status(500).json({
      message: "Error saving startup project request",
      error: error.message,
    });
  }
});
router.get("/startupmessages", async (req, res) => {
  try {
    const startupRequests = await StartupMessage.find();
    res.json(startupRequests);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching startup project requests",
      error: error.message,
    });
  }
});
module.exports = router;
