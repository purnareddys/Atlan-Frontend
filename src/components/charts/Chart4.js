import React, { useState, useContext } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";
import { ChartDataContext } from "../../context/ChartData";

//Chart Component for Win by Runs/ Wickets

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
        if (match.win_by_runs !== 0) {
          winByRuns += 1;
        } else if (match.win_by_wickets !== 0) {
          winByWickets += 1;
        } else {
          tie += 1;
        }
      });
    setCharData4({
      labels: ["Runs", "Wickets", "tie"],
      datasets: [
        {
          label: "Runs/Wickets ",
          data: [winByRuns, winByWickets, tie],
          backgroundColor: [
            "rgba(128, 203, 174, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 99, 132, 0.5)",
          ],
          borderColor: [
            "rgba(128, 203, 174, 1)",
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
        chartType="pie"
        chartData={chartData4}
        displayLegend={true}
        titleText="Win by Runs / Wickets "
      />
    </>
  );
}
