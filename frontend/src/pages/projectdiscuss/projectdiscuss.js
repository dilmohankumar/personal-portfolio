import React, { useState } from "react";
import "./responsivee.css";
import "./projectdiscuss.css";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import { Link, useNavigate } from "react-router-dom";

const ProjectDiscuss = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectCategory: "",
    projectBudget: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [, setStatus] = useState("");

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
    if (!formData.projectBudget)
      newErrors.projectBudget = "Please select a project budget.";
    if (!formData.details) newErrors.details = "Details cannot be empty.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("https://golden-cocada-649fc2.netlify.app/api/project", {
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
          projectBudget: "",
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
      {/* ----form-start----- */}
      <div className="form-containerpp">
        <div
          className="form-container"
          style={{ backgroundColor: "#d1ba5438" }}
        >
          <div className="logo-section">
            <img
              src={Developer}
              style={{ width: "10rem", height: "10rem" }}
              className="form-logo"
              alt="logo"
            />
            <div className="formw">
              <h1 className="form-title">
                I’m thrilled to hear about your project! Let’s dive in and get
                started
              </h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-section">
              <div className="input-col">
                <div className="flexs">
                  <label className="input-label" htmlFor="input-name">
                    Name
                  </label>
                  <input
                    className={`input-field ${
                      errors.name ? "error-border" : ""
                    }`}
                    id="input-name"
                    name="name"
                    placeholder="Enter Your Name..."
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>
                <div className="flexs">
                  <label className="input-label" htmlFor="input-email">
                    Email
                  </label>
                  <input
                    className={`input-field ${
                      errors.email ? "error-border" : ""
                    }`}
                    id="input-email"
                    name="email"
                    placeholder="Enter Your Email..."
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="input-col">
                <div className="flexs">
                  <label
                    className="input-label"
                    htmlFor="input-project-category"
                  >
                    Project category
                  </label>
                  <select
                    className={`input-field ${
                      errors.projectCategory ? "error-border" : ""
                    }`}
                    id="input-project-category"
                    name="projectCategory"
                    value={formData.projectCategory}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    <option value="responsive_design">Responsive design</option>
                    <option value="web_design">Web Design</option>
                    <option value="app_design">App Design</option>
                  </select>
                  {errors.projectCategory && (
                    <span className="error-message">
                      {errors.projectCategory}
                    </span>
                  )}
                </div>
                <div className="flexs">
                  <label className="input-label" htmlFor="input-project-budget">
                    Project budget
                  </label>
                  <select
                    className={`input-field ${
                      errors.projectBudget ? "error-border" : ""
                    }`}
                    id="input-project-budget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option...
                    </option>
                    <option value="2000_5000">$2,000 - $5,000</option>
                    <option value="5000_10000">$5,000 - $10,000</option>
                    <option value="10000_plus">$10,000 +</option>
                  </select>
                  {errors.projectBudget && (
                    <span className="error-message">
                      {errors.projectBudget}
                    </span>
                  )}
                </div>
              </div>
              <label className="input-label" htmlFor="input-details">
                Details
              </label>
              <textarea
                className={`textarea-fieldp ${
                  errors.details ? "error-border" : ""
                }`}
                id="input-detailp"
                name="details"
                placeholder="Send Details..."
                autoComplete="off"
                value={formData.details}
                onChange={handleChange}
              ></textarea>
              {errors.details && (
                <span className="error-message" id="mess">
                  {errors.details}
                </span>
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
      {/* ----form-end----- */}
    </div>
  );
};

export default ProjectDiscuss;
