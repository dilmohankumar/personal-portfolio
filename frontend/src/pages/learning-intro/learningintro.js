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
      const response = await fetch("http://localhost:5000/api/submit", {
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
    <div className="learning-container-fin">
      <div className="learning-header-logo-wrapper-fin" id="headerp">
        <Link to="/">
          <img
            src={Logo}
            style={{ width: "5rem", height: "5rem" }}
            alt="logo"
          />
        </Link>
      </div>
      {/* ---- Form Start ---- */}
      <div className="learning-form-wrapper-fin">
        <div
          className="learning-form-inner-wrapper-fin"
        
        >
          <div className="learning-logo-section-wrapper-fin">
            <img
              src={Developer}
              style={{ width: "10rem", height: "10rem" }}
              className="learning-form-logo-img-fin"
              alt="developer"
            />
            <div className="learning-form-text-wrapper-fin">
              <h1 className="learning-form-header-fin">
                I'm excited about the opportunity to learn from you! Could you
                share a little about yourself?
              </h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="learning-input-wrapper-fin">
              <div className="learning-input-column-wrapper-fin">
                <div className="learning-input-field-group-fin">
                  <label className="learning-input-label-fin" htmlFor="input-name">
                    Name
                  </label>
                  <input
                    className={`learning-input-field-fin ${
                      errors.name ? "learning-error-border-fin" : ""
                    }`}
                    id="input-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name..."
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className="learning-error-text-fin">{errors.name}</span>
                  )}
                </div>
                <div className="learning-input-field-group-fin">
                  <label className="learning-input-label-fin" htmlFor="input-email">
                    Email
                  </label>
                  <input
                    className={`learning-input-field-fin ${
                      errors.email ? "learning-error-border-fin" : ""
                    }`}
                    id="input-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email..."
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="learning-error-text-fin">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="learning-input-column-wrapper-fin">
                <div className="learning-input-field-group-fin">
                  <label
                    className="learning-input-label-fin"
                    htmlFor="input-mentorship"
                  >
                    Types of Mentorship
                  </label>
                  <select
                    className={`learning-input-field-fin ${
                      errors.mentorship ? "learning-error-border-fin" : ""
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
                    <span className="learning-error-text-fin">{errors.mentorship}</span>
                  )}
                </div>
                <div className="learning-input-field-group-fin">
                  <label className="learning-input-label-fin" htmlFor="input-result">
                    Expected result
                  </label>
                  <select
                    className={`learning-input-field-fin ${
                      errors.result ? "learning-error-border-fin" : ""
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
                    <span className="learning-error-text-fin">{errors.result}</span>
                  )}
                </div>
              </div>
              <div className="learning-input-field-group-fin">
                <label className="learning-input-label-fin" htmlFor="input-journey">
                  Your journey
                </label>
                <textarea
                  className={`learning-textarea-field-fin ${
                    errors.journey ? "learning-error-border-fin" : ""
                  }`}
                  id="input-journey"
                  name="journey"
                  value={formData.journey}
                  onChange={handleChange}
                  placeholder="Send Your journey..."
                  autoComplete="off"
                ></textarea>
                {errors.journey && (
                  <span className="learning-error-text-fin">{errors.journey}</span>
                )}
              </div>
            </div>
            <div className="learning-submit-wrapper-fin">
              <button type="submit" className="learning-submit-btn-fin">
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
