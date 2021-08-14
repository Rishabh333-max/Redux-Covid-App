import React from "react";
import { useSelector } from "react-redux";

function Result() {
  const res = useSelector((state) => state.covidReducer).result;
  console.log("res=", res);
  return <div id="result">{res[0]?.deaths}</div>;
}

export default Result;
