import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import CompList from "./CompList";

const CompApp = observer(() => {
  const [forecast, setForecast] = useState(""); //состояние знач. поля ввода, прексказание
  const [stackState, setStackState] = useState([]); //состояние массива

  React.useEffect(() => {
    setForecast(Math.round(Math.random() * 100));
  }, []);

  function pushFunction() {
    setStackState((stackState) => [...stackState, forecast]);
  }

  function popFunction() {
    setStackState(stackState.slice(0, -1));
  }

  function changingInputValue(event) {
    setForecast(event.target.value);
  }

  return (
    <div className="App">
      <h1>Stack</h1>
      <input
        id="subject"
        type="text"
        value={forecast}
        onChange={(event) => changingInputValue(event)}
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
});

export default CompApp;
