import React from "react";
import "../App.css";
import CountChartTrain from "./Charts/CountChartTrain";
import CountChartTest from "./Charts/CountChartTest";
import EpochMetricsChart from "./Charts/EpochMetricsChart";
import ConfusionMatrixChart from "./Charts/ConfusionMatrix";
import OverallPerformanceChart from "./Charts/OverAllPerformanceChart";

const ModelStatistics = () => {
  return (
    <div className="model-stats-container">
      <h1 className="model-stats-title">
        Colon Cancer Detection Model Statistics
      </h1>

      <div className="chart-container">
        <div>
          <div className="inner-container">
            <CountChartTrain />
          </div>
          <div className="inner-container">
            <EpochMetricsChart />
          </div>
        </div>
        <div>
          <div className="inner-container">
            <CountChartTest />
          </div>
          <div className="inner-container">
            <ConfusionMatrixChart />
          </div>
        </div>
      </div>
      <div>
        <OverallPerformanceChart />
      </div>
    </div>
  );
};

export default ModelStatistics;
