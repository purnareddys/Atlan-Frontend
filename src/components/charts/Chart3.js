import React, { useState, useContext } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";
import { ChartDataContext } from "../../context/ChartData";

//Pending

export default function Chart3() {
  const [chartData3, setCharData3] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { data } = useContext(ChartDataContext);

  const callFunction = async () => {
    const len = (await data.data) && data.data.length;
    if (len > 0 && dataLoaded === false) {
      chart_3_data();
      setDataLoaded(true);
    }
  };
  callFunction();
  const chart_3_data = () => {
    let venue = {};
    data.data &&
      data.data.forEach((match, idx) => {
        if (venue[match.venue] !== undefined) {
          venue[match.venue] += 1;
        } else {
          venue[match.venue] = 1;
        }
      });

    let sortable = [];
    for (var stadium in venue) {
      sortable.push([stadium, venue[stadium]]);
    }
    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });
    setCharData3({
      labels: [...Object.keys(venue)],
      datasets: [
        {
          label: "Result Type ",
          data: [...Object.values(venue)],
          backgroundColor: [
            "rgba(29, 53, 87, 1)",
            "rgba(29, 53, 87, 1)",
            "rgba(29, 53, 87, 1)",
            "rgba(29, 53, 87, 1)",
            "rgba(29, 53, 87, 1)",
          ],
          borderColor: [
            "rgba(29, 53, 87, 0.5)",
            "rgba(29, 53, 87, 0.5)",
            "rgba(29, 53, 87, 0.5)",
            "rgba(29, 53, 87, 0.5)",
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
        chartType="horizontalBar"
        displayLegend={false}
        chartData={chartData3}
        titleText="Venue"
      />
    </>
  );
}
