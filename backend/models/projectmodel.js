const express = require("express");
const router = express.Router();
const ProjectDiscuss = require("../schemas/projectschema");
router.post("/", async (req, res) => {
  const { name, email, projectCategory, projectBudget, details } = req.body;
  try {
    const newProjectDiscuss = new ProjectDiscuss({
      name,
      email,
      projectCategory,
      projectBudget,
      details,
    });
    await newProjectDiscuss.save();
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
router.get("/projectdiscuss", async (req, res) => {
  try {
    const projectRequests = await ProjectDiscuss.find();
    res.json(projectRequests);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching startup project requests",
      error: error.message,
    });
  }
});
module.exports = router;
