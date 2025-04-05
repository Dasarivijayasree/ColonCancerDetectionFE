import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const EpochMetricsChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
    },
    title: {
      text: "Model Training Metrics per Epoch",
    },
    xAxis: {
      categories: [
        "Epoch 1",
        "Epoch 2",
        "Epoch 3",
        "Epoch 4",
        "Epoch 5",
        "Epoch 6",
        "Epoch 7",
        "Epoch 8",
        "Epoch 9",
        "Epoch 10",
      ],
      title: {
        text: "Epochs",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Metric Values",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      column: {
        stacking: "normal", // Enables stacked bars
        dataLabels: {
          enabled: false,
          formatter: function () {
            return this.y.toFixed(2);
          },
        },
      },
    },
    tooltip: {
      shared: false,
      pointFormat: "<b>{series.name}</b>: {point.y}<br/>",
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
      backgroundColor: "#FFFFFF",
      shadow: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Accuracy",
        data: [
          0.7216, 0.6273, 0.8682, 0.931, 0.9481, 0.9544, 0.9521, 0.9718, 0.971,
          0.9712,
        ],
        color: "#3498db",
      },
      {
        name: "Loss",
        data: [
          10.9383, 4.854, 3.246, 2.1131, 1.3862, 0.9565, 0.7136, 0.523, 0.4267,
          0.3792,
        ],
        color: "#e74c3c",
      },
      {
        name: "Precision",
        data: [
          0.7216, 0.6273, 0.8682, 0.931, 0.9481, 0.9544, 0.9521, 0.9718, 0.971,
          0.9712,
        ],
        color: "#2ecc71",
      },
      {
        name: "Recall",
        data: [
          0.7216, 0.6273, 0.8682, 0.931, 0.9481, 0.9544, 0.9521, 0.9718, 0.971,
          0.9712,
        ],
        color: "#f1c40f",
      },
      {
        name: "Validation Accuracy",
        data: [
          0.4867, 0.8875, 0.9975, 0.9992, 0.9992, 1.0, 0.9992, 0.9975, 1.0,
          0.9992,
        ],
        color: "#9b59b6",
      },
      {
        name: "Validation Loss",
        data: [
          5.3066, 3.608, 2.4343, 1.4693, 0.9786, 0.6674, 0.5191, 0.3772, 0.3217,
          0.2652,
        ],
        color: "#e67e22",
      },
      {
        name: "Validation Precision",
        data: [
          0.4867, 0.8875, 0.9975, 0.9992, 0.9992, 1.0, 0.9992, 0.9975, 1.0,
          0.9992,
        ],
        color: "#1abc9c",
      },
      {
        name: "Validation Recall",
        data: [
          0.4867, 0.8875, 0.9975, 0.9992, 0.9992, 1.0, 0.9992, 0.9975, 1.0,
          0.9992,
        ],
        color: "#8e44ad",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EpochMetricsChart;
