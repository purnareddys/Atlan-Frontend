import { useEffect } from "react";

export default function useWordTrimmer(props) {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.jokes.one/jod")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  //  let finalStr = "";
  // let finalWordArr = [];

  // const trimNamesWord = (string) => {
  //   let isSpace = true;
  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] === " ") {
  //       isSpace = true;
  //     } else if (string[i] !== " " && isSpace === true) {
  //       isSpace = false;
  //       finalStr += string[i];
  //     }
  //   }
  //   finalWordArr.push(finalStr);
  //   // console.log(finalWordArr);
  //   finalStr = "";
  //   return finalWordArr;
  // };
  // const trimNamesString = async (names) => {
  //   let finalStringArr = [];
  //   for (let i = 0; i < names.length; i++) {
  //     let tempString = names[i];
  //     finalStringArr.push(trimNamesWord(tempString));
  //   }
  //   setTrimmedName(finalStringArr[0]);
  //   return finalStringArr[0];
  // };
  // async function fun1() {
  //   let res = await trimNamesString(newArrayName);

  //   console.log(res);
  // }
  // fun1();
  return "hello world";
}
