// This custom hook is for converting strings of words to Abbrevations
//For Example
//Chennai Super Kings -> CSK
//Rajiv Gandhi International Stadium ->  RGISU
//Implemented by me :)

import { useEffect, useState } from "react";

export default function useWordTrimmer(strings, type) {
  const [data, setData] = useState(["RGISU", "MCS", "WS", "MCAS", "Eg"]);
  const [wordStrings, setWordStrings] = useState([]);

  useEffect(() => {
    if (strings) {
      setWordStrings(strings);
    }
  }, [strings, wordStrings]);
  useEffect(() => {
    let finalStr = "";
    let finalWordArr = [];
    const timer = setTimeout(() => {
      const trimNames = async (str) => {
        for (let i = 0; i < str.length; i++) {
          let tempString = await str[i];
          let finalStringArr = await trimNames2(tempString);
          if (i === 4) {
            setData(finalStringArr);
          }
        }
      };
      const trimNames2 = async (str) => {
        let isSpace = true;
        for (let i = 0; i < str.length; i++) {
          if (str[i] === " ") {
            isSpace = true;
          } else if (str[i] !== " " && isSpace === true) {
            isSpace = false;
            finalStr += str[i];
          }
        }
        finalWordArr.push(finalStr);
        finalStr = "";
        return finalWordArr;
      };
      trimNames(wordStrings);
    }, 1000);

    return () => clearTimeout(timer);
  }, [wordStrings]);

  return data;
}
