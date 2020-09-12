import React, { useState, createContext, useEffect } from "react";
import Papa from "papaparse";
const ChartDataContext = createContext(null);
const ChartDataContextProvider = (props) => {
  const [data, setData] = useState({});
  const [totalMatches, setTotalMatches] = useState(0);
  const [superOvers, setSuperOvers] = useState(null);
  const [winByRunsWickets, setWinByRunsWickets] = useState([]);
  useEffect(() => {
    const getData = () => {
      var data = JSON.parse(localStorage.getItem("data"));
      //Checking for local Storage
      if (data !== null) {
        parsedData(data);
      } else {
        Papa.parse("./datasets_409682_784596_matches.csv", {
          header: true,
          download: true,
          dynamicTyping: true,
          complete: parsedData,
        });
      }
    };
    getData();
  }, []);

  const parsedData = (result) => {
    setData(result);
    localStorage.setItem("data", JSON.stringify(result));
    setTotalMatches(result.data.length);
  };
  //For getting and setting the super overs
  const getSuperOvers = (overs) => {
    setSuperOvers(overs);
  };
  //for getting and setting the win by runs and win by wickets
  const getRunsWickets = (runs, wickets) => {
    setWinByRunsWickets([runs, wickets]);
  };

  return (
    <ChartDataContext.Provider
      value={{
        data: data,
        totalMatches: totalMatches,
        getSuperOvers: getSuperOvers,
        superOvers: superOvers,
        getRunsWickets: getRunsWickets,
        winByRunsWickets: winByRunsWickets,
      }}
    >
      {props.children}
    </ChartDataContext.Provider>
  );
};

export { ChartDataContextProvider, ChartDataContext };
