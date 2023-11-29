import React from "react";

const CompList = (props) => {
  let eachValue = props.stack.map((val) => (
    <li>
      <b>{val}</b>
    </li>
  ));

  let arrayAndForecast = [...eachValue, <li>{props.forecast}</li>];
  return <ul>{arrayAndForecast}</ul>;
};

export default CompList;
