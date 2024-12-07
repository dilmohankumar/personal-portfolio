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
      const response = await fetch("http://localhost:5000/api/message", {
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
    <div className="bodyy">
      <div className="header-logo" id="headerp">
        <Link to="/">
          <img
            src={Logo}
            style={{ width: "5rem", height: "5rem" }}
            alt="logo"
          />
        </Link>
      </div>
      {/* Form Section */}
      <div className="form-containerpp">
        <div
          className="form-container"
          style={{ backgroundColor: "#00ffff17" }}
        >
          <div className="logo-section">
            <img
              src={Developer}
              style={{ width: "10rem", height: "10rem" }}
              className="form-logo"
              alt="developer"
            />
            <div className="formw">
              <h1 className="form-title">
                I appreciate you reaching out. How may I assist you today?
              </h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-section">
              <div className="input-col">
                <div className="flexs">
                  <label className="input-label" htmlFor="name-input">
                    Name
                  </label>
                  <input
                    className={`input-field ${
                      errors.name ? "error-border" : ""
                    }`}
                    id="name-input"
                    name="name"
                    value={formData.name}
                    placeholder="Enter Your Name..."
                    autoComplete="name"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="flexs">
                  <label className="input-label" htmlFor="email-input">
                    Email
                  </label>
                  <input
                    className={`input-field ${
                      errors.email ? "error-border" : ""
                    }`}
                    id="email-input"
                    name="email"
                    value={formData.email}
                    placeholder="Enter Your Email..."
                    autoComplete="email"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>
              <label className="input-label" htmlFor="message-input">
                Message
              </label>

              <textarea
                className={`textarea-fieldm ${
                  errors.message ? "error-border" : ""
                }`}
                id="message-input"
                name="message"
                value={formData.message}
                placeholder="Send Message..."
                autoComplete="off"
                onChange={handleChange}
              >
                {" "}
              </textarea>
              {errors.message && (
                <span className="error-messagess">{errors.message}</span>
              )}
            </div>
            <div className="button-section">
              <button type="submit" className="send-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messform;
