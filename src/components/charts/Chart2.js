import React, { useState, useContext } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";

import { ChartDataContext } from "../../context/ChartData";

export default function Chart2() {
  const [chartData2, setCharData2] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { data } = useContext(ChartDataContext);

  const callFunction = async () => {
    const len = (await data.data) && data.data.length;
    if (len > 0 && dataLoaded === false) {
      chart_2_data();
      setDataLoaded(true);
    }
  };
  callFunction();
  const chart_2_data = () => {
    let resultType = {};
    data.data &&
      data.data.forEach((match, idx) => {
        if (resultType[match.result] !== undefined) {
          resultType[match.result] += 1;
        } else {
          resultType[match.result] = 1;
        }
      });
    setCharData2({
      labels: [...Object.keys(resultType)],
      datasets: [
        {
          label: "Result Type ",
          data: [...Object.values(resultType)],
          backgroundColor: [
            "rgba(255, 159, 64, 0.5)",

            "rgba(54, 162, 235, 0.5)",

            "rgba(255, 99, 132, 0.5)",
          ],
          borderColor: [
            "rgba(255, 159, 64, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <>
      <ChartDisplay
        chartType="doughnut"
        chartData={chartData2}
        titleText="Result Type"
        displayLegend={true}
      />
    </>
  );
}
