import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CountChartTrain = () => {
  const options = {
    chart: {
      type: "bar",
      backgroundColor: "transparent",
    },
    title: {
      text: "Count of images in each class in Train Data",
    },
    xAxis: {
      categories: ["aug_aca", "aug_n"],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Count",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false,
        },
      },
    },
    legend: {
      layout: "horizontal", // Horizontal layout for the legend
      align: "center", // Center align the legend
      verticalAlign: "bottom", // Position the legend at the bottom
      backgroundColor: "#FFFFFF",
      shadow: false,
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.x}</b>: ${this.y.toLocaleString()}`;
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Count",
        data: [8070, 7960], // Replace with your actual counts
        color: "#3498db", // You can change the bar color if needed
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CountChartTrain;
