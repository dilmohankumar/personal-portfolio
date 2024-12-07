const mongoose = require("mongoose");
const ProjectDiscussSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
    trim: true,
  },
  email: {
    type: String,
    required: [true],
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
  },
  projectCategory: {
    type: String,
    required: [true],
  },
  projectBudget: {
    type: String,
    required: [true],
  },
  details: {
    type: String,
    required: [true],
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
});
module.exports = mongoose.model("ProjectDiscuss", ProjectDiscussSchema);
