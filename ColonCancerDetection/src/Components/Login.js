import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.text();
      setMessage(result);
      
      if (response.ok && result === "Login successful") {
        navigate("/dashboard");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      console.error("Login error:", error);
    }
  };
  
  return (
    <>
      <HelmetProvider>
        <title>Login | Colon Cancer Detection</title>
      </HelmetProvider>
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Welcome to Colon Cancer Detection</h1>
          <p className="login-subtitle">
            Early detection saves lives. Be part of a supportive community focused on awareness and prevention.
          </p>
          <div className="login-features">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Accurate and reliable detection methods</li>
              <li>User-friendly interface</li>
              <li>24/7 support and guidance</li>
            </ul>
          </div>
          <p className="login-cta">
            Don't have an account? <a href="/register">Register here</a>.
          </p>
        </div>

        <div className="login-form-container">
          <h1 className="form-title">Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="userName">Username:</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {status === 404 && <div className="error-message">{message}</div>}
        </div>
      </div>
    </>
  );
};

export default Login;
