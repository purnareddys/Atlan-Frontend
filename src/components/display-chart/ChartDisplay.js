import React, { useState } from "react";
import ChartComponent from "react-chartjs-2";

export default function ChartDisplay({ chartType, chartData, ...restProps }) {
  const defaultProps = {
    chartType: "Bar",
    displayTitle: true,
    titleText: "Enter a title",
    displayLegend: true,
    legendPosition: "center",
    selectLabel: false,
    selectLabelText: "",
  };
  return (
    <div className="chart">
      <ChartComponent
        type={chartType}
        data={chartData}
        options={{
          plugins: {
            deferred: {
              xOffset: 50,
              yOffset: "40%",
              delay: 50,
            },
          },
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: defaultProps.displayTitle,
            text: restProps.titleText,
            fontSize: 25,
          },
          legend: {
            display: restProps.displayLegend,
          },
          scales:
            chartType === "pie" || chartType === "doughnut"
              ? {
                  xAxis: [
                    {
                      gridLineWidth: 0,
                    },
                  ],
                  yAxis: [
                    {
                      gridLineWidth: 0,
                      minorTickInterval: null,
                    },
                  ],
                }
              : {
                  xAxes: [
                    {
                      scaleLabel: {
                        display: defaultProps.selectLabel ? true : false,
                        labelString: defaultProps.selectLabelText,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
        }}
      />
    </div>
  );
}
