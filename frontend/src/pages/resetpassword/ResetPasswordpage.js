import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./resetpassword.css";

const ResetPasswordpage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [identifier, setIdentifier] = useState("");
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setIdentifier(location.state.identifier);
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(
        "https://personal-portfolio-4rrr.onrender.com/api/auth/reset-password",
        {
          identifier,
          newPassword,
        }
      );
      setMessage(response.data.message);
      if (response.data.success) {
        localStorage.setItem("resetMessage", response.data.message);
        navigate("/");
      }
    } catch (error) {
      setMessage("Password reset failed. Please try again.");
    }
  };

  return (
    <div className="reset-password-container-body">
      <div className="reset-password-container">
        <h1 className="reset-password-header">Reset Your Password</h1>
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <input
            className="reset-password-input"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            className="reset-password-input"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="reset-password-button" type="submit">
            Reset Password
          </button>
        </form>
        {message && <p className="reset-password-message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPasswordpage;
