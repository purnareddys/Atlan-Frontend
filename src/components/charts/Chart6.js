import React, { useState, useContext } from "react";
import ChartDisplay from "../display-chart/ChartDisplay";
//context
import { ChartDataContext } from "../../context/ChartData";

//Chart Component for Ms Dhoni, man of the Matches

export default function Chart6() {
  const [chartData6, setCharData6] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const { data } = useContext(ChartDataContext);

  const callFunction = async () => {
    const len = (await data.data) && data.data.length;
    if (len > 0 && dataLoaded === false) {
      chart_6_data();
      setDataLoaded(true);
    }
  };
  callFunction();
  const chart_6_data = () => {
    let manOfTheMatch2012 = 0;
    let manOfTheMatch2013 = 0;
    let manOfTheMatch2014 = 0;
    let manOfTheMatch2015 = 0;
    let manOfTheMatch2016 = 0;
    let manOfTheMatch2017 = 0;

    data.data &&
      data.data.forEach((match, idx) => {
        if (match.season === 2017 && match.player_of_match === "MS Dhoni") {
          manOfTheMatch2017 += 1;
        } else if (
          match.season === 2016 &&
          match.player_of_match === "MS Dhoni"
        ) {
          manOfTheMatch2016 += 1;
        } else if (
          match.season === 2015 &&
          match.player_of_match === "MS Dhoni"
        ) {
          manOfTheMatch2015 += 1;
        } else if (
          match.season === 2014 &&
          match.player_of_match === "MS Dhoni"
        ) {
          manOfTheMatch2014 += 1;
        } else if (
          match.season === 2013 &&
          match.player_of_match === "MS Dhoni"
        ) {
          manOfTheMatch2013 += 1;
        } else if (
          match.season === 2012 &&
          match.player_of_match === "MS Dhoni"
        ) {
          manOfTheMatch2012 += 1;
        }
      });
    setCharData6({
      labels: ["2012", "2013", "2014", "2015", "2016", "2017"],
      datasets: [
        {
          label: "Man of the Matches ",
          data: [
            manOfTheMatch2012,
            manOfTheMatch2013,
            manOfTheMatch2014,
            manOfTheMatch2015,
            manOfTheMatch2016,
            manOfTheMatch2017,
          ],
          backgroundColor: ["rgba(255, 99, 132, 0.5)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <>
      <ChartDisplay
        chartType="line"
        chartData={chartData6}
        displayLegend={true}
        titleText="Ms Dhoni"
      />
    </>
  );
}
