const bcrypt = require("bcryptjs");
const Reset = require("../models/resetmodel");
const generateOTP = require("../utility/otpGenerator");
const sendEmail = require("../utility/mailService");
const User = require("../schemas/User");

exports.sendOtp = async (req, res) => {
  const { identifier } = req.body;

  try {
    if (!identifier) {
      return res.status(400).json({ message: "Identifier is required" });
    }

    const user = await User.findOne({ email: identifier });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please create an account." });
    }

    const otp = generateOTP();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    let resetEntry = await Reset.findOne({ identifier });
    if (!resetEntry) {
      resetEntry = await Reset.create({ identifier, otp, otpExpiresAt });
    } else {
      resetEntry.otp = otp;
      resetEntry.otpExpiresAt = otpExpiresAt;
      await resetEntry.save();
    }

    await sendEmail(identifier, "Your OTP Code", `Your OTP is: ${otp}`);

    return res
      .status(200)
      .json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in sendOtp:", error);
    return res
      .status(500)
      .json({ message: "Failed to send OTP. Please try again." });
  }
};

exports.verifyOtp = async (req, res) => {
  const { identifier, otp } = req.body;

  try {
    if (!identifier || !otp) {
      return res.status(400).json({ message: "OTP are required" });
    }

    const resetEntry = await Reset.findOne({ identifier });
    if (!resetEntry) {
      return res.status(400).json({ message: "User not found" });
    }

    const isOtpExpired = new Date() > resetEntry.otpExpiresAt;
    if (resetEntry.otp !== otp || isOtpExpired) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    resetEntry.otp = null;
    resetEntry.otpExpiresAt = null;
    await resetEntry.save();

    return res
      .status(200)
      .json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in verifyOtp:", error);
    return res.status(500).json({ message: "OTP verification failed" });
  }
};

exports.resetPassword = async (req, res) => {
  const { identifier, newPassword } = req.body;

  try {
    if (!identifier || !newPassword) {
      return res
        .status(400)
        .json({ message: "Identifier and new password are required" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    const userToUpdate = await User.findOneAndUpdate(
      { email: identifier },
      { password: hashedPassword },
      { new: true }
    );

    if (!userToUpdate) {
      return res.status(400).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "Password reset successfully", success: true });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    return res.status(500).json({ message: "Password reset failed" });
  }
};
