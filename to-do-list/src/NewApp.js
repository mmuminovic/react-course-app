import React, { useState } from "react";
import "./style.css";
import PlusImg from "./slika/plus.png";

const App = (props) => {
  //   const [state, setState] = useState({ taskName: "", todoList: [] });
  const [taskName, setTaskName] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addNewTask = () => {
    const newToDoList = [...toDoList];
    newToDoList.push(taskName);
    setToDoList(newToDoList);
    setTaskName("");
    // setState({
    //   taskName: "",
    //   todoList: newToDoList,
    // });
  };

  return (
    <div className="container">
      <div className="todo__box">
        <div className="title">
          <h2 className="h__todo">Todo App</h2>
        </div>
        <div className="form">
          <input
            id="taskName"
            placeholder="Add your new todo"
            value={taskName}
            onChange={(event) => {
              const taskNameValue = event.target.value;
              setTaskName(taskNameValue);
              //   setState((prevState) => {
              //     return { ...prevState, taskName: taskNameValue };
              //   });
              //   setState({ ...state, taskName: taskNameValue });
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addNewTask();
              }
            }}
          />
          <button id="btnn1" className="btnn1" onClick={() => addNewTask()}>
            <img src={PlusImg} className="img" alt="" />
          </button>
        </div>
        <div id="list" className="d-grid gap-2 col-6 button">
          {/* {mockList.map((item) => (
                <p>{item.toUpperCase()}</p>
              ))} */}
          {toDoList.map((item, index) => {
            return (
              <button key={index} className="list-items">
                {item}
              </button>
            );
          })}
          {/* <button className="list-items">keyword researching</button> */}
          {/* <button className="list-items">ui ux desing for app</button> */}
        </div>
        <div className="footerr">
          <p className="p">
            You have <span id="numberOfItems">{toDoList.length}</span> pending
            tasks
          </p>
          <button
            id="btnn2"
            className="btnn2"
            onClick={() => {
              setToDoList([]);
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
