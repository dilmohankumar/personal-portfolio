import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://personal-portfolio-4rrr.onrender.com/api/signup",
          formData
        );
        const { token } = response.data;
        localStorage.setItem("Token", token);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          window.location.href = "/dashboard";
        }
        setSuccessMessage("Account created successfully! You can now log in.");
        setFormData({ name: "", email: "", password: "" });
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors({
            api: error.response.data.message || "Failed to create account.",
          });
        } else {
          setErrors({ api: "Something went wrong. Please try again." });
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-page__container">
        <h1 className="signup-page__title">Create an Account</h1>
        <form className="signup-page__form" onSubmit={handleSubmit}>
          <div className="signup-page__input-group">
            <label htmlFor="name" className="signup-page__label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`signup-page__input ${
                errors.name ? "signup-page__input--error" : ""
              }`}
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <span className="signup-page__error">{errors.name}</span>
            )}
          </div>
          <div className="signup-page__input-group">
            <label htmlFor="email" className="signup-page__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`signup-page__input ${
                errors.email ? "signup-page__input--error" : ""
              }`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="signup-page__error">{errors.email}</span>
            )}
          </div>
          <div className="signup-page__input-group">
            <label htmlFor="password" className="signup-page__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`signup-page__input ${
                errors.password ? "signup-page__input--error" : ""
              }`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="signup-page__error">{errors.password}</span>
            )}
          </div>
          {errors.api && (
            <span className="signup-page__error">{errors.api}</span>
          )}
          <button
            type="submit"
            className="signup-page__button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </form>
        {successMessage && (
          <p className="signup-page__success">{successMessage}</p>
        )}
        <p className="signup-page__footer">
          Already have an account?{" "}
          <a href="/login" className="signup-page__link">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
