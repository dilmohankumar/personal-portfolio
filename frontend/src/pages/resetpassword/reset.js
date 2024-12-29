import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./reset.css";

const Reset = () => {
  const [identifier, setIdentifier] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/sendotp",
        { identifier }
      );
      console.log("Response from backend:", response.data);
      if (response.data.success) {
        navigate("/otp", { state: { identifier } });
      }
    } catch (error) {
      setMessage("User not found. Please create an account:");
    }
  };

  return (
    <div className="reset-container-body">
      <div className="reset-container">
        <h1 className="reset-header">Reset Password</h1>
        <form className="reset-form" onSubmit={handleSendOtp}>
          <input
            className="reset-input"
            type="text"
            placeholder="Enter email to reset password:"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <button className="reset-button" type="submit">
            Reset
          </button>
        </form>
        {message && <p className="reset-message">{message}</p>}
      </div>
    </div>
  );
};

export default Reset;
