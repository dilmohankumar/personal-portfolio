import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Developer from "../../assests/developer.png";
import Logo from "../../assests/logo.png";
import "./learning-intro.css";
import "./responsive.css";

const LearningIntro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    journey: "",
    mentorship: "",
    result: "",
  });
  const [errors, setErrors] = useState({});
  const [, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear specific error on input
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.journey) newErrors.journey = "Journey cannot be empty.";
    if (!formData.mentorship)
      newErrors.mentorship = "Please select a mentorship type.";
    if (!formData.result)
      newErrors.result = "Please select an expected result.";
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
      const response = await fetch("https://personal-portfolio-4rrr.onrender.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          journey: formData.journey,
          mentorship: formData.mentorship,
          result: formData.result,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          journey: "",
          mentorship: "",
          result: "",
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
                I'm excited about the opportunity to learn from you! Could you
                share a little about yourself?
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
                    autoComplete="name"
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
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="input-col">
                <div className="flexs">
                  <label className="input-label" htmlFor="input-mentorship">
                    Types of Mentorship
                  </label>
                  <select
                    className={`input-field ${
                      errors.mentorship ? "error-border" : ""
                    }`}
                    id="input-mentorship"
                    name="mentorship"
                    value={formData.mentorship}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Select an option...
                    </option>
                    <option value="Responsive design">Responsive design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="App Design">App Design</option>
                  </select>
                  {errors.mentorship && (
                    <span className="error-message">{errors.mentorship}</span>
                  )}
                </div>
                <div className="flexs">
                  <label className="input-label" htmlFor="input-result">
                    Expected result
                  </label>
                  <select
                    className={`input-field ${
                      errors.result ? "error-border" : ""
                    }`}
                    id="input-result"
                    name="result"
                    value={formData.result}
                    onChange={handleChange}
                  >
                    <option disabled value="">
                      Select an option...
                    </option>
                    <option value="Address a knowledge gap">
                      Address a knowledge gap
                    </option>
                    <option value="Master design principles">
                      Master design principles
                    </option>
                    <option value="Explore a new career path">
                      Explore a new career path
                    </option>
                  </select>
                  {errors.result && (
                    <span className="error-message">{errors.result}</span>
                  )}
                </div>
              </div>
              <div className="flexs">
                <label className="input-label" htmlFor="input-journey">
                  Your journey
                </label>
                <textarea
                  className={`textarea-field ${
                    errors.journey ? "error-border" : ""
                  }`}
                  id="input-journey"
                  name="journey"
                  value={formData.journey}
                  onChange={handleChange}
                  placeholder="Send Your journey..."
                  autoComplete="off"
                ></textarea>
                {errors.journey && (
                  <span className="error-message">{errors.journey}</span>
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

export default LearningIntro;
