const express = require("express");
const router = express.Router();
const Mentorship = require("./mentorschema"); // Importing the Mentorship model

// POST route to submit a mentorship request
router.post("/submit", async (req, res) => {
  const { name, email, mentorship, journey, result } = req.body;
 
  try {
    const newMentorship = new Mentorship({ name, email, mentorship, journey, result });
    await newMentorship.save();
    res.status(201).json({ message: "Mentorship request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving mentorship request", error: error.message });
  }
});

// GET route to fetch all mentorship requests
router.get("/mentorships", async (req, res) => {
  try {
    const mentorships = await Mentorship.find(); // Fetch all mentorship requests
    res.json(mentorships); // Send the mentorships as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching mentorship requests", error: error.message });
  }
});

module.exports = router;
