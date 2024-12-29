import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./otp.css";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [identifier, setIdentifier] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.identifier) {
      setIdentifier(location.state.identifier);
    }
  }, [location.state]);

  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1);
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const otpValue = otp.join("");
      const response = await axios.post(
        "http://localhost:5000/api/auth/verifyotp",
        {
          identifier,
          otp: otpValue,
        }
      );

      setMessage(response.data.message);

      if (response.data.success) {
        navigate("/resetpassword", {
          state: { identifier, otp: otpValue },
        });
      }
    } catch (error) {
      console.error(
        "Verification Error:",
        error.response?.data || error.message
      );
      setMessage(
        error.response?.data?.message ||
          "OTP verification failed. Please try again."
      );
    }
  };

  return (
    <div className="otp-body">
      <div className="otp-container">
        <h1 className="otp-header">Verify OTP</h1>
        <form className="otp-form" onSubmit={handleVerifyOtp}>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                className="otp-digit"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp[index] && index > 0) {
                    document.getElementById(`otp-${index - 1}`).focus();
                  }
                }}
              />
            ))}
          </div>
          <button className="otp-button" type="submit">
            Verify
          </button>
        </form>
        {message && <p className="otp-message">{message}</p>}
      </div>
    </div>
  );
};

export default VerifyOtp;
