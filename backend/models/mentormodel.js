const express = require("express");
const router = express.Router();
const Mentorship = require("../schemas/mentorschema");
router.post("/submit", async (req, res) => {
  const { name, email, mentorship, journey, result } = req.body;
  try {
    const newMentorship = new Mentorship({
      name,
      email,
      mentorship,
      journey,
      result,
    });
    await newMentorship.save();
    res
      .status(201)
      .json({ message: "Mentorship request submitted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error saving mentorship request",
        error: error.message,
      });
  }
});
router.get("/mentorships", async (req, res) => {
  try {
    const mentorships = await Mentorship.find(); 
    res.json(mentorships);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching mentorship requests",
        error: error.message,
      });
  }
});
module.exports = router;
