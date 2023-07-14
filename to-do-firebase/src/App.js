import React, { useEffect, useState } from "react";
import "./App.css";
import { addToDoItem, deleteAllToDoItems, getToDoList } from "./firebase";

const App = (props) => {
  const [taskName, setTaskName] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const getAllItems = () => {
    getToDoList().then((data) => {
      setToDoList(data);
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const addNewTask = () => {
    const itemData = {
      title: taskName,
      description: "",
      date: new Date(),
      done: false,
    };

    addToDoItem(itemData).then(() => {
      getAllItems();
      setTaskName("");
    });
  };

  const clearAllItems = () => {
    deleteAllToDoItems().then(() => {
      getAllItems();
    });
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
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addNewTask();
              }
            }}
          />
          <button id="btnn1" className="btnn1" onClick={() => addNewTask()}>
            {/* <img src={PlusImg} className="img" alt="" /> */}+
          </button>
        </div>
        <div id="list" className="d-grid gap-2 col-6 button">
          {toDoList.map((item, index) => {
            return (
              <button key={index} className="list-items">
                {item.title}
              </button>
            );
          })}
        </div>
        <div className="footerr">
          <p className="p">
            You have <span id="numberOfItems">{toDoList.length}</span> pending
            tasks
          </p>
          <button id="btnn2" className="btnn2" onClick={clearAllItems}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
