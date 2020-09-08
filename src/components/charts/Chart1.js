import React, { useEffect, useState, useContext } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";

import { ChartDataContext } from "../../context/ChartData";

export default function Chart1() {
  const [chartData1, setCharData1] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { data } = useContext(ChartDataContext);

  const callFunction = async () => {
    const len = (await data.data) && data.data.length;
    if (len > 0 && dataLoaded === false) {
      chart_1_data();
      setDataLoaded(true);
    }
  };
  callFunction();
  const chart_1_data = () => {
    let fieldCount = 0;
    let batCount = 0;
    data.data &&
      data.data.forEach((match, idx) => {
        if (match.toss_decision === "field") {
          fieldCount += 1;
        }
      });
    batCount = data.data && data.data.length - fieldCount;
    setCharData1({
      labels: ["Bat", "Field"],
      datasets: [
        {
          label: "Bat or Field Decision",
          data: [batCount, fieldCount],
          backgroundColor: ["rgba(121, 85, 72, 0.5)", "rgba(76, 175, 80, 0.5)"],
          borderColor: ["rgba(121, 85, 72,1)", "rgba(76, 175, 80, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };
  //   data.data && chart_1_data();

  return (
    <>
      <ChartDisplay
        chartType="bar"
        displayLegend={false}
        chartData={chartData1}
        titleText="Batting / Fielding Decision"
      />
      <h1>Testing</h1>
    </>
  );
}
