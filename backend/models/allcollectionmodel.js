const express = require("express");
const router = express.Router();

const Messagess = require("../schemas/schema");
const Mentorship = require("../schemas/mentorschema");
const ProjectDiscuss = require("../schemas/projectschema");
const StartupMessage = require("../schemas/startupschema");
router.get("/api/collections", async (req, res) => {
  try {
    const messages = await Messagess.find();
    const mentorships = await Mentorship.find();
    const projectRequests = await ProjectDiscuss.find();
    const startupRequests = await StartupMessage.find();

    res.json({
      messages,
      mentorships,
      projectRequests,
      startupRequests,
    });
  } catch (error) {
    console.error("Error fetching collections:", error.message);
    res.status(500).json({ error: "Error fetching collections" });
  }
});

module.exports = router;
