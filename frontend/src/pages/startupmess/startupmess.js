import React, { useState } from "react";
import "./startupmess.css";
import "./responsive.css";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import { Link, useNavigate } from "react-router-dom";

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
      const response = await fetch("https://comforting-caramel-4f804e.netlify.app/api/startup", {
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
      {/* ---- Form Start ---- */}
      <div className="form-containerpp">
        <div
          className="form-container"
          style={{ backgroundColor: "#d1acf614" }}
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
                Looking to collaborate on a startup? I’m totally up for it.
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
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name..."
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email..."
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
                    <option disabled value="">
                      Select an option...
                    </option>
                    <option value="Responsive design">Responsive design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="App Design">App Design</option>
                  </select>
                  {errors.projectCategory && (
                    <span className="error-message">
                      {errors.projectCategory}
                    </span>
                  )}
                </div>
                <div className="flexs">
                  <label className="input-label" htmlFor="input-your-focus">
                    Your focus
                  </label>
                  <select
                    className={`input-field ${
                      errors.focus ? "error-border" : ""
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
                    <span className="error-message">{errors.focus}</span>
                  )}
                </div>
              </div>
              <div className="flexs">
                <label className="input-label" htmlFor="input-details">
                  Details
                </label>
                <textarea
                  className={`textarea-fields ${
                    errors.details ? "error-border" : ""
                  }`}
                  id="input-details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Send Details..."
                ></textarea>
                {errors.details && (
                  <span className="error-message">{errors.details}</span>
                )}
              </div>
            </div>
            <div className="button-section">
              <button type="submit" className="send-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ---- Form End ---- */}
    </div>
  );
};

export default StartupMess;
