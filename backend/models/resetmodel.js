const mongoose = require("mongoose");

const resetSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: false,
  },
  otpExpiresAt: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reset", resetSchema);
