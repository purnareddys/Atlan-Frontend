import React, { useState, createContext, useEffect } from "react";
import Papa from "papaparse";
const ChartDataContext = createContext(null);
const ChartDataContextProvider = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    Papa.parse("./datasets_409682_784596_matches.csv", {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: parsedData,
    });
  };
  const parsedData = (result) => {
    setData(result);
  };
  return (
    <ChartDataContext.Provider value={{ data: data }}>
      {props.children}
    </ChartDataContext.Provider>
  );
};

export { ChartDataContextProvider, ChartDataContext };
