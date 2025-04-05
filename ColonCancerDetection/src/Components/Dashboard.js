import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure your CSS is linked
import { HelmetProvider } from "react-helmet-async";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleTestClick = () => {
    navigate("/coloncancerTest");
  };

  const handleGraphClick = () => {
    navigate("/modelstats");
  };

  return (
    <>
      <HelmetProvider>
        <title>Colon Cancer Detection</title>
      </HelmetProvider>
      <div className="dash-main-container">
        <div className="dash-content-box">
          <h1 className="dash-heading">Test Colon Cancer Detection Here</h1>
          <p className="dash-description">
            With our advanced ML-based Colon Cancer Detection system, you can
            test for early signs of colon cancer. Click the button below to
            begin the test or view model statistics.
          </p>
          <div className="dash-btn-group">
            <button className="dash-btn-primary" onClick={handleTestClick}>
              Colon Cancer Test
            </button>
            <button className="dash-btn-secondary" onClick={handleGraphClick}>
              View Model Statistics
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
