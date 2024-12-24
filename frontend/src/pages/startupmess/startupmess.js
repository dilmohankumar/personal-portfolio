import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import "./responsive.css";
import "./startupmess.css";

const StartupMess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectCategory: "",
    focus: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
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
    if (!formData.projectCategory)
      newErrors.projectCategory = "Please select a project category.";
    if (!formData.focus) newErrors.focus = "Please select your focus.";
    if (!formData.details) newErrors.details = "Details cannot be empty.";
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
      const response = await fetch("http://localhost:5000/api/startup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          projectCategory: "",
          focus: "",
          details: "",
        });
        navigate("/success");
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      setStatus("Error submitting the form!");
    }
  };

  return (
    <div className="startupmess-container">
      <div className="startupmess-header-logo-wrapper">
        <Link to="/">
          <img
            src={Logo}
            className="startupmess-logo"
            alt="logo"
          />
        </Link>
      </div>

      <div className="startupmess-form-container">
        <div className="startupmess-form-inner-wrapper">
          <div className="startupmess-logo-section-wrapper">
            <img
              src={Developer}
              className="startupmess-form-logo"
              alt="logo"
            />
            <h1 className="startupmess-form-header">Looking to collaborate on a startup? I’m totally up for it.</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="startupmess-input-section">
              <div className="startupmess-input-column-wrapper">
                <div className="startupmess-input-field-group">
                  <label className="startupmess-input-label" htmlFor="input-name">
                    Name
                  </label>
                  <input
                    className={`startupmess-input-field ${
                      errors.name ? "startupmess-error-border" : ""
                    }`}
                    id="input-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name..."
                  />
                  {errors.name && (
                    <span className="startupmess-error-text">{errors.name}</span>
                  )}
                </div>

                <div className="startupmess-input-field-group">
                  <label className="startupmess-input-label" htmlFor="input-email">
                    Email
                  </label>
                  <input
                    className={`startupmess-input-field ${
                      errors.email ? "startupmess-error-border" : ""
                    }`}
                    id="input-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email..."
                  />
                  {errors.email && (
                    <span className="startupmess-error-text">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="startupmess-input-column-wrapper">
                <div className="startupmess-input-field-group">
                  <label
                    className="startupmess-input-label"
                    htmlFor="input-project-category"
                  >
                    Project category
                  </label>
                  <select
                    className={`startupmess-input-field ${
                      errors.projectCategory ? "startupmess-error-border" : ""
                    }`}
                    id="input-project-category"
                    name="projectCategory"
                    value={formData.projectCategory}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Select an option...
                    </option>
                    <option value="Responsive design">Responsive design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="App Design">App Design</option>
                  </select>
                  {errors.projectCategory && (
                    <span className="startupmess-error-text">
                      {errors.projectCategory}
                    </span>
                  )}
                </div>

                <div className="startupmess-input-field-group">
                  <label className="startupmess-input-label" htmlFor="input-your-focus">
                    Your focus
                  </label>
                  <select
                    className={`startupmess-input-field ${
                      errors.focus ? "startupmess-error-border" : ""
                    }`}
                    id="input-your-focus"
                    name="focus"
                    value={formData.focus}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Select an option...
                    </option>
                    <option value="collaborate">Collaborate</option>
                    <option value="invest">Invest</option>
                    <option value="founder">Founder</option>
                  </select>
                  {errors.focus && (
                    <span className="startupmess-error-text">{errors.focus}</span>
                  )}
                </div>
              </div>

              <div className="startupmess-input-field-group">
                <label className="startupmess-input-label" htmlFor="input-details">
                  Details
                </label>
                <textarea
                  className={`startupmess-textarea-field ${
                    errors.details ? "startupmess-error-border" : ""
                  }`}
                  id="input-details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Send Details..."
                ></textarea>
                {errors.details && (
                  <span className="startupmess-error-text">{errors.details}</span>
                )}
              </div>
            </div>

            <div className="startupmess-submit-wrapper">
              <button type="submit" className="startupmess-submit-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartupMess;
