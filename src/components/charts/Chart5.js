import React, { useState, useContext, useEffect } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";

// Custom hook
import { useWordTrimmer } from "../../hooks";

//context
import { ChartDataContext } from "../../context/ChartData";

// Chart Component for Most Match Winner for a perticular season

export default function Chart5({ year }) {
  const [chartData5, setCharData5] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [toBeTrimmed, setToBeTrimmed] = useState([]);
  const { data } = useContext(ChartDataContext);

  const trimmedNames = useWordTrimmer(toBeTrimmed, "team");

  const callFunction = async () => {
    const len = (await data.data) && data.data.length;
    if (len > 0 && dataLoaded === false) {
      setDataLoaded(true);
    }
  };
  callFunction();
  useEffect(() => {
    const chart_5_data = (year) => {
      let MostWins = {};
      data.data &&
        data.data.forEach((match, idx) => {
          if (match.season === parseInt(year)) {
            if (MostWins[match.winner] !== undefined) {
              MostWins[match.winner] += 1;
            } else {
              MostWins[match.winner] = 1;
            }
          }
        });

      //For finding the top 5 teams
      const keys = [...Object.keys(MostWins)];
      const values = [...Object.values(MostWins)];

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
      setToBeTrimmed(newArrayName);
      setCharData5({
        labels: [...trimmedNames],
        datasets: [
          {
            label: "Wins",
            data: [...newArrayData],
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
    chart_5_data(year);
  }, [year, data.data, trimmedNames]);

  return (
    <>
      <ChartDisplay
        chartType="bar"
        chartData={chartData5}
        titleText={`Most Match Winners ${year}`}
        selectLabel={true}
        selectLabelText="Overs"
      />
    </>
  );
}
