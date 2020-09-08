import React, { useState, useContext } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";

import { ChartDataContext } from "../../context/ChartData";

export default function Chart4() {
  const [chartData4, setCharData4] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { data } = useContext(ChartDataContext);

  const callFunction = async () => {
    const len = (await data.data) && data.data.length;
    if (len > 0 && dataLoaded === false) {
      chart_4_data();
      setDataLoaded(true);
    }
  };
  callFunction();
  const chart_4_data = () => {
    let winByRuns = 0;
    let winByWickets = 0;
    let tie = 0;
    data.data &&
      data.data.forEach((match, idx) => {
        if (match.win_by_runs != 0) {
          winByRuns += 1;
        } else if (match.win_by_wickets != 0) {
          winByWickets += 1;
        } else {
          tie += 1;
        }
      });
    setCharData4({
      labels: ["Runs", "Wickets", "tie"],
      datasets: [
        {
          label: "Result Type ",
          data: [winByRuns, winByWickets, tie],
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
        chartType="pie"
        chartData={chartData4}
        titleText="Win by Runs / Wickets "
      />
    </>
  );
}
