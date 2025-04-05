import React, { useState } from "react";
import "../App.css";

const ColonCancerTest = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const medicalInfo = {
    "Colon adenocarcinoma": {
      description: "A malignant tumor that develops in the colon's glandular tissues.",
      symptoms: [
        "Changes in bowel habits",
        "Blood in stool",
        "Abdominal discomfort",
        "Unexplained weight loss"
      ],
      treatment: [
        "Surgical removal of tumor",
        "Chemotherapy",
        "Radiation therapy",
        "Targeted drug therapy"
      ]
    },
    "Colon benign tissue": {
      description: "Normal, healthy colon tissue with no signs of malignancy.",
      maintenance: [
        "Regular colonoscopies after age 45",
        "High-fiber diet",
        "Regular exercise",
        "Limit alcohol and avoid smoking"
      ]
    },
    "Error processing image": {
      description: "The image could not be processed successfully.",
      actions: [
        "Try uploading a clearer image",
        "Ensure the file is in JPG/PNG format",
        "Check your internet connection",
        "Contact support if problem persists"
      ]
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/predict/tumor", {
        method: "POST",
        body: formData,
      });
      const prediction = await response.text();
      setResult(prediction);
    } catch (error) {
      setResult("Error processing image");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="colon-test-container">
      <h1 className="main-title">COLON CANCER DETECTION</h1>
      
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="file-upload-wrapper">
          <label className="file-upload-label">
            <input
              type="file"
              id="imageUpload"
              onChange={handleFileChange}
              accept="image/*"
              className="file-upload-input"
            />
            <span className="file-upload-button">📁 CHOOSE FILE</span>
            <span className="file-upload-name">{fileName}</span>
          </label>
        </div>
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={!file || isLoading}
        >
          {isLoading ? "🔍 PROCESSING..." : "🔼 UPLOAD AND TEST"}
        </button>
      </form>

      {result && (
        <div className={`result-container ${result.includes("adenocarcinoma") ? "danger" : "safe"}`}>
          <h2 className="result-title">TEST RESULT: {result.toUpperCase()}</h2>
          
          <div className="medical-info-section">
            <h3>ℹ️ ABOUT THIS RESULT:</h3>
            <p>{medicalInfo[result]?.description}</p>
            
            {result === "Colon adenocarcinoma" && (
              <>
                <h3>⚠️ COMMON SYMPTOMS:</h3>
                <ul>
                  {medicalInfo[result]?.symptoms.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
                
                <h3>🏥 RECOMMENDED TREATMENTS:</h3>
                <ul>
                  {medicalInfo[result]?.treatment.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              </>
            )}
            
            {result === "Colon benign tissue" && (
              <>
                <h3>💚 HEALTHY COLON MAINTENANCE:</h3>
                <ul>
                  {medicalInfo[result]?.maintenance.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              </>
            )}
            
            {result === "Error processing image" && (
              <>
                <h3>🛠️ TROUBLESHOOTING:</h3>
                <ul>
                  {medicalInfo[result]?.actions.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColonCancerTest;