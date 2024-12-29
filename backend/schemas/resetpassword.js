const mongoose = require("mongoose");

const resetSchema = new mongoose.Schema({
  identifier: { type: String, required: true }, // Email 
  otp: { type: String, required: false },
  otpExpiresAt: { type: Date, required: false },
});

module.exports = mongoose.model("Reset", resetSchema);
