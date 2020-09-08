import React, { useState } from "react";
import ChartComponent from "react-chartjs-2";

export default function ChartDisplay({ chartType, chartData, ...restProps }) {
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
            display: restProps.displayTitle,
            text: restProps.titleText,
            fontSize: 25,
          },
          legend: {
            display: restProps.displayLegend,
          },
          scales:
            restProps.selectChart === "pie" ||
            restProps.selectChart === "doughnut"
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
                        display: restProps.selectLabel ? true : false,
                        labelString: restProps.selectLabelText,
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
