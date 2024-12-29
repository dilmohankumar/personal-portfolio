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
      const response = await fetch("https://personal-portfolio-4rrr.onrender.com/api/project", {
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
    <div className="project-discuss">
      <header className="project-discuss__header">
        <Link to="/" className="project-discuss__logo-link">
          <img
            src={Logo}
            className="project-discuss__logo"
            alt="Company Logo"
          />
        </Link>
      </header>

      <div className="project-discuss__form-container">
        <div className="project-discuss__form-wrapper">
          <div className="project-discuss__intro">
            <img
              src={Developer}
              className="project-discuss__image"
              alt="Developer Illustration"
            />
            <h1 className="project-discuss__title">
              Let’s discuss your project and bring your ideas to life!
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="project-discuss__form">
            <div className="project-discuss__input-group">
              <label htmlFor="name" className="project-discuss__label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`project-discuss__input ${
                  errors.name ? "project-discuss__input--error" : ""
                }`}
                placeholder="Enter Your Name..."
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="project-discuss__error">{errors.name}</span>
              )}
            </div>

            <div className="project-discuss__input-group">
              <label htmlFor="email" className="project-discuss__label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`project-discuss__input ${
                  errors.email ? "project-discuss__input--error" : ""
                }`}
                placeholder="Enter Your Email..."
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="project-discuss__error">{errors.email}</span>
              )}
            </div>

            <div className="project-discuss__input-group">
              <label
                htmlFor="projectCategory"
                className="project-discuss__label"
              >
                Project Category
              </label>
              <select
                id="projectCategory"
                name="projectCategory"
                className={`project-discuss__select ${
                  errors.projectCategory ? "project-discuss__select--error" : ""
                }`}
                value={formData.projectCategory}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an option...
                </option>
                <option value="responsive_design">Responsive Design</option>
                <option value="web_design">Web Design</option>
                <option value="app_design">App Design</option>
              </select>
              {errors.projectCategory && (
                <span className="project-discuss__error">
                  {errors.projectCategory}
                </span>
              )}
            </div>

            <div className="project-discuss__input-group">
              <label
                htmlFor="projectBudget"
                className="project-discuss__label"
              >
                Project Budget
              </label>
              <select
                id="projectBudget"
                name="projectBudget"
                className={`project-discuss__select ${
                  errors.projectBudget ? "project-discuss__select--error" : ""
                }`}
                value={formData.projectBudget}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select an option...
                </option>
                <option value="2000_5000">$2,000 - $5,000</option>
                <option value="5000_10000">$5,000 - $10,000</option>
                <option value="10000_plus">$10,000+</option>
              </select>
              {errors.projectBudget && (
                <span className="project-discuss__error">
                  {errors.projectBudget}
                </span>
              )}
            </div>

            <div className="project-discuss__input-group">
              <label htmlFor="details" className="project-discuss__label">
                Details
              </label>
              <textarea
                id="details"
                name="details"
                className={`project-discuss__textarea ${
                  errors.details ? "project-discuss__textarea--error" : ""
                }`}
                placeholder="Enter project details..."
                value={formData.details}
                onChange={handleChange}
              ></textarea>
              {errors.details && (
                <span className="project-discuss__error">{errors.details}</span>
              )}
            </div>

            <button type="submit" className="project-discuss__submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectDiscuss;
