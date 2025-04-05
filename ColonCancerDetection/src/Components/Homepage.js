import React from "react";
import { useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "../App.css";
// import brainTumorImage from "../assets/brain-tumor.jpg"; // Add an image in the 'assets' folder

// Home page
const Homepage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <HelmetProvider>
        <title>Home Page | Colon Cancer Detection</title>
      </HelmetProvider>
      <div className="homepage-container">
        <div className="overlay">
          <div className="content">
            <h1 className="title">Real-Time Colon Cancer Detection</h1>
            <p className="subtitle">
              Early diagnosis can lead to better treatment outcomes.
              Stay ahead with our powerful detection tools, and protect your
              health with precision medicine. Regular screenings and proactive 
              monitoring can help identify potential risks, allowing for timely intervention and care.
            </p>
            {/* <img
              src={brainTumorImage}
              alt="Brain Tumor"
              className="brain-image"
            /> */}

            <div className="about-section">
              <h2 className="about-title">Why Early Detection Matters</h2>
              <p className="about-description">
                Colon Cancers can be life-threatening if not detected early. Our
                system helps in identifying potential tumors using advanced
                machine learning models and image processing techniques. Take
                control of your health today.
              </p>
            </div>

            <div className="buttons">
              <button className="button" onClick={handleRegisterClick}>
                Register
              </button>
              <button className="button" onClick={handleLoginClick}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
