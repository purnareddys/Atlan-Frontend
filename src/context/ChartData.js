import React, { useState, createContext, useEffect } from "react";
import Papa from "papaparse";
const ChartDataContext = createContext(null);
const ChartDataContextProvider = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);
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
  const parsedData = (result) => {
    setData(result);
    localStorage.setItem("data", JSON.stringify(result));
  };
  return (
    <ChartDataContext.Provider value={{ data: data }}>
      {props.children}
    </ChartDataContext.Provider>
  );
};

export { ChartDataContextProvider, ChartDataContext };
