import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://personal-portfolio-4rrr.onrender.com/api/login",
          formData
        );
        const { token } = response.data;
        console.log("Token received:", token);
        if (!token) {
          throw new Error("Token not received from API");
        }
        const decodedToken = jwtDecode(token);

        localStorage.setItem("Token", token);
        console.log("Saved token:", localStorage.getItem("Token"));
        if (decodedToken.role === "admin") {
          navigate("/");
        } else {
          navigate("/");
        }
      } catch (err) {
        setErrors({
          server: err.response?.data?.msg || "Login failed. Please try again.",
        });
      }
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "login-input-error" : ""}
            />
            {errors.email && (
              <span className="login-error-text">{errors.email}</span>
            )}
          </div>
          <div className="login-input-container">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "login-input-error" : ""}
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="login-error-text">{errors.password}</span>
            )}
          </div>
          {errors.server && <div className="server-error">{errors.server}</div>}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a>
          <a href="/signup">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
