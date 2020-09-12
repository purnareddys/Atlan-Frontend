import React, { useState, useContext } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";

//context
import { ChartDataContext } from "../../context/ChartData";

// Chart Component for Bat / Field Toss Decision

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

          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <>
      <ChartDisplay
        chartType="bar"
        displayLegend={false}
        chartData={chartData1}
        titleText="Bat / Field Toss Decision"
      />
    </>
  );
}
