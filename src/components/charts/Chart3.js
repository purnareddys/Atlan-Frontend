import React, { useState, useContext, useEffect } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";
import { ChartDataContext } from "../../context/ChartData";
import { useWordTrimmer } from "../../hooks";

//Chart component for Top 5 Venues

export default function Chart3({ year }) {
  const [chartData3, setCharData3] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [tobeTrimmed, setTobeTrimmed] = useState([]);
  const { data } = useContext(ChartDataContext);

  const trimmedNames = useWordTrimmer(tobeTrimmed, "venue");
  const callFunction = async () => {
    const len = (await data.data) && data.data.length;
    if (len > 0 && dataLoaded === false) {
      setDataLoaded(true);
    }
  };

  useEffect(() => {
    const chart_3_data = () => {
      let venue = {};
      data.data &&
        data.data.forEach((match, idx) => {
          if (match.season === parseInt(year)) {
            if (venue[match.venue] !== undefined) {
              venue[match.venue] += 1;
            } else {
              venue[match.venue] = 1;
            }
          }
        });

      //For finding the Top 5 Venues in which ipl matchs are played
      //for a selected season
      const keys = [...Object.keys(venue)];
      const values = [...Object.values(venue)];

      const arrayOfObj = keys.map(function (d, i) {
        return {
          name: d,
          data: values[i] || 0,
        };
      });

      const sortedArrayOfObj = arrayOfObj.sort(function (a, b) {
        return b.data - a.data;
      });
      const newArrayName = [];
      const newArrayData = [];

      const filteredObj = sortedArrayOfObj.filter((ele, idx) => {
        return idx < 5;
      });
      filteredObj.forEach(function (d) {
        newArrayName.push(d.name);
        newArrayData.push(d.data);
      });
      setTobeTrimmed(newArrayName);
      setCharData3({
        labels: [...trimmedNames],
        datasets: [
          {
            label: "Matches ",
            data: [...Object.values(newArrayData)],
            backgroundColor: [
              "rgba(255, 159, 64, 0.5)",
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(245, 135, 31, 0.5)",
              "rgba(128, 203, 174, 0.5)",
            ],
            borderColor: [
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(245, 135, 31, 1)",
              "rgba(128, 203, 174, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    };

    chart_3_data(year);
  }, [year, data.data, trimmedNames]);
  callFunction();

  return (
    <>
      <ChartDisplay
        chartType="horizontalBar"
        displayLegend={false}
        chartData={chartData3}
        titleText={`Top 5 Venues of ${year}`}
      />
    </>
  );
}
