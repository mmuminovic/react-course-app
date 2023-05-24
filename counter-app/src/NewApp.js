import React, { useState } from "react";
import "./App.css";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="count-number">{counter}</h1>
        <div className="buttons-wrapper">
          <div
            className="count-button"
            onClick={() => {
              setCounter(counter + 1);
            }}
          ></div>
          <div
            className="reset-button"
            onClick={() => {
              setCounter(0);
            }}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default App;
