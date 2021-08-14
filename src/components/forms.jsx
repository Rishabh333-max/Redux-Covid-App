import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CovidInfoAction } from "../redux/actions/covid/index";
function Forms() {
  const [country, setCountry] = useState(null);
  const dispatch = useDispatch();
  
  const submit1 = async (e) => {
    e.preventDefault();
    console.log("country=", country);
    await dispatch(CovidInfoAction(country));
  };
  return (
    <div id="forms">
      <form>
        <input
          type="text"
          placeholder="country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <button onClick={submit1}>Search</button>
      </form>
    </div>
  );
}

export default Forms;
