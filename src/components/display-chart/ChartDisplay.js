import React from "react";
import ChartComponent from "react-chartjs-2";
import "./Chart.css";
export default function ChartDisplay({ chartType, chartData, ...restProps }) {
  // default Properties, if we haven't recived some of the props from chart
  //components
  const defaultProps = {
    chartType: "pie",
    displayTitle: true,
    titleText: "Title",
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
                        display: restProps.selectLabel ? true : false,
                        labelString: restProps.selectLabelText
                          ? restProps.selectLabelText
                          : "",
                      },
                      ticks: {
                        beginAtZero: true,
                        max: 10,
                        min: 0,
                        maxTicksLimit: 6,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                        maxTicksLimit: 6,
                      },
                    },
                  ],
                },
        }}
      />
    </div>
  );
}
