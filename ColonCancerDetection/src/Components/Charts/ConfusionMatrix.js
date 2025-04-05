import React from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

// Initialize the heatmap module
HighchartsHeatmap(Highcharts);

const ConfusionMatrixChart = () => {
  const options = {
    chart: {
      type: "heatmap",
      backgroundColor: "transparent",
    },
    title: {
      text: "Confusion Matrix",
    },
    xAxis: {
      categories: ["colon_aca", "color_n"],
      title: {
        text: "Predicted Label",
      },
    },
    yAxis: {
      categories: ["colon_aca", "color_n"],
      title: {
        text: "Truth Label",
      },
      reversed: true, // Make sure the Y-axis is aligned properly
    },
    colorAxis: {
      min: 0,
      max: 400, // Adjust this max value based on your data
      minColor: "#FFFFFF",
      maxColor: "#003366",
      stops: [
        [0, "#ffffff"], // Low value color
        [0.5, "#3498db"], // Medium value color
        [1, "#003366"], // High value color
      ],
    },
    legend: {
      align: "right",
      layout: "vertical",
      verticalAlign: "middle",
      symbolHeight: 200,
    },
    tooltip: {
      formatter: function () {
        return `<b>Actual:</b> ${
          this.series.yAxis.categories[this.point.y]
        }<br/><b>Predicted:</b> ${
          this.series.xAxis.categories[this.point.x]
        }<br/><b>Count:</b> ${this.point.value}`;
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: "Confusion Matrix",
        borderWidth: 1,
        data: [
          [0, 0, 410], // [x, y, value] for colon_aca predicted as colon_aca
          [0, 1, 1], // [x, y, value] for colon_aca predicted as color_n
          [1, 0, 0], // [x, y, value] for color_n predicted as colon_aca
          [1, 1, 389], // [x, y, value] for color_n predicted as color_n
        ],
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ConfusionMatrixChart;
