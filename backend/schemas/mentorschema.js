const mongoose = require("mongoose");
const mentorshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  mentorship: { type: String, required: true },
  journey: { type: String, required: true },
  result: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
});
const Mentorship = mongoose.model(
  "Mentorship",
  mentorshipSchema,
  "mentorships"
);
module.exports = Mentorship;
