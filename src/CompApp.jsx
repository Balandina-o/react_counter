import React, { useState } from "react";
import CompList from "./CompList";

const CompApp = () => {
  const [forecast, setForecast] = useState(Math.round(Math.random() * 100)); //состояние знач. поля ввода, предсказание
  const [stackState, setStackState] = useState([]); //состояние массива

  function pushFunction() {
    setStackState((stackState) => [...stackState, forecast]);
  }

  function popFunction() {
    setStackState(stackState.slice(0, -1));
  }

  return (
    <div className="App">
      <h1>Stack</h1>
      <input
        id="subject"
        type="text"
        value={forecast}
        onChange={(event) => setForecast(event.target.value)}
      />
      <br />
      <br />
      <button id="push" onClick={pushFunction}>
        Push
      </button>
      <button id="pop" onClick={popFunction}>
        Pop
      </button>
      <br />

      <CompList stack={stackState} forecast={forecast}></CompList>
    </div>
  );
};

export default CompApp;
