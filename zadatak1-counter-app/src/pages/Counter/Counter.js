import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../../store/counterSlice";

const Counter = () => {
  const authState = useSelector((state) => state.auth);
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counterState, "counterState");
  console.log(authState, "authState");

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="count-number">{counterState.counter}</h1>
        <div className="buttons-wrapper">
          <div
            className="count-button"
            onClick={() => {
              dispatch(counterSlice.actions.increaseCounter());
            }}
          ></div>
          <div className="button-wrapper2">
            <div
              className="reset-button"
              onClick={() => {
                dispatch(counterSlice.actions.resetCounter());
              }}
            ></div>
            <div
              className="save-button"
              onClick={() => {
                if (authState.id) {
                  dispatch(
                    counterSlice.actions.saveCounting({
                      fullName: authState.fullName,
                      id: authState.id,
                    })
                  );
                }
              }}
            ></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Counter;
