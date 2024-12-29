import React, { useState } from "react";
import "./messform.css";
import "./responsive.css";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Messform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Clear previous status
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("https://personal-portfolio-4rrr.onrender.com/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        navigate("/success");
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus("Error submitting the form!");
    }
  };

  return (
    <div className="message-body">
      <div className="message-header-logo">
        <Link to="/">
          <img
            src={Logo}
            style={{ width: "5rem", height: "5rem" }}
            alt="logo"
          />
        </Link>
      </div>
      {/* Form Section */}
      <div className="message-form-wrapper">
        <div
          className="message-form-box"
          style={{ backgroundColor: "#00ffff17" }}
        >
          <div className="message-logo-section">
            <img
              src={Developer}
              style={{ width: "5rem", height: "5rem" }}
              className="message-developer-logo"
              alt="developer"
            />
            <h1 className="message-form-title">
              I appreciate you reaching out. How may I assist you today?
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="message-input-section">
              <div className="message-input-column">
                <div className="message-input-group">
                  <label className="message-label" htmlFor="name-input">
                    Name
                  </label>
                  <input
                    className={`message-input ${
                      errors.name ? "message-error-border" : ""
                    }`}
                    id="name-input"
                    name="name"
                    value={formData.name}
                    placeholder="Enter Your Name..."
                    autoComplete="name"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="message-error-message">{errors.name}</span>
                  )}
                </div>
                <div className="message-input-group">
                  <label className="message-label" htmlFor="email-input">
                    Email
                  </label>
                  <input
                    className={`message-input ${
                      errors.email ? "message-error-border" : ""
                    }`}
                    id="email-input"
                    name="email"
                    value={formData.email}
                    placeholder="Enter Your Email..."
                    autoComplete="email"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="message-error-message">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="message-input-group">
                  <label className="message-label" htmlFor="message-input">
                    Message
                  </label>
                  <textarea
                    className={`message-textarea ${
                      errors.message ? "message-error-border" : ""
                    }`}
                    id="message-input"
                    name="message"
                    value={formData.message}
                    placeholder="Send Message..."
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="message-error-message">
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="message-button-wrapper">
                <button type="submit" className="message-send-button">
                  Send
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messform;
