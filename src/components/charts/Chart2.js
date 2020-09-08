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
            "rgba(168, 218, 220, 1)",
            "rgba(69, 123, 157, 1)",
            "rgba(29, 53, 87, 1)",
          ],
          borderColor: [
            "rgba(168, 218, 220, 0.5)",
            "rgba(69, 123, 157, 0.5)",
            "rgba(29, 53, 87, 0.5)",
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
      />
    </>
  );
}
