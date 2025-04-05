import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const OverallPerformanceChart = () => {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    title: {
      text: "Overall Model Performance",
    },
    tooltip: {
      pointFormat:
        "<b>{point.name}</b>: {point.y:.2f} ({point.percentage:.1f}%)",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format:
            "<b>{point.name}</b>: {point.y:.2f} ({point.percentage:.1f}%)",
        },
      },
    },
    series: [
      {
        name: "Performance",
        colorByPoint: true,
        data: [
          {
            name: "Accuracy",
            y: 1.0, // Accuracy from the classification report
            color: "#3498db", // Blue
          },
          {
            name: "Precision (Macro)",
            y: 1.0, // Macro precision from the classification report
            color: "#2ecc71", // Green
          },
          {
            name: "Recall (Macro)",
            y: 1.0, // Macro recall from the classification report
            color: "#e74c3c", // Red
          },
          {
            name: "F1-Score (Macro)",
            y: 1.0, // Macro F1-score from the classification report
            color: "#f1c40f", // Yellow
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default OverallPerformanceChart;
