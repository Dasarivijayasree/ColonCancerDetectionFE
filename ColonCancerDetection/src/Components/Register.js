import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.text();
      setMessage(result);
      
      if (response.ok && result === "Registration successful") {
        navigate("/login");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      console.error("Registration error:", error);
    }
  };


  return (
    <div className="register-container">
      <div className="register-content">
        <h1 className="register-title">Join Colon Cancer Detection</h1>
        <p className="register-subtitle">
          Be part of a community dedicated to early detection and prevention of
          colon cancer. Together, we can make a difference.
        </p>
        <div className="register-features">
          <h2>Why Register?</h2>
          <ul>
            <li>Access to advanced detection tools</li>
            <li>Personalized health insights</li>
            <li>24/7 support from medical experts</li>
          </ul>
        </div>
        <p className="register-cta">
          Already have an account? <a href="/login">Login here</a>.
        </p>
      </div>

      <div className="register-form-container">
        <h1 className="form-title">Register</h1>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        {status === 404 && <div className="error-message">{message}</div>}
      </div>
    </div>
  );
};

export default Register;