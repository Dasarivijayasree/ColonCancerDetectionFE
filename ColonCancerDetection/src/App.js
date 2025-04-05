import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import ColonCancerTest from "./Components/ColonCancerTest";
import ModelStatistics from "./Components/ModelStatistics";

//This is App.js
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coloncancerTest" element={<ColonCancerTest />} />
          <Route path="/modelstats" element={<ModelStatistics />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
