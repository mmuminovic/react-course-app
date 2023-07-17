import React, { useEffect, useState } from "react";
import "./App.css";
import {
  addToDoItem,
  auth,
  deleteAllToDoItems,
  getToDoList,
  login,
  logout,
  signUp,
  updateToDoItemData,
} from "./firebase";
import { Button, Box, Typography } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const App = (props) => {
  const [taskName, setTaskName] = useState("");
  const [toDoList, setToDoList] = useState([]);

  console.log(auth.currentUser);

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

  const setItemIsDone = (item) => {
    updateToDoItemData(item.id, { done: !item.done }).then(() => {
      getAllItems();
    });
  };

  const handleLogin = () => {
    login({ email: "muminovic.muhamed01@gmail.com", password: "muhamed123" });
  };
  const handleSignUp = () => {
    signUp({ email: "muminovic.muhamed01@gmail.com", password: "muhamed123" });
  };
  const handleLogout = () => {
    logout();
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
          <Button variant="contained" onClick={() => addNewTask()}>
            <PlaylistAddIcon />
          </Button>
        </div>
        <div id="list" className="d-grid gap-2 col-6 button">
          {toDoList.map((item, index) => {
            return (
              <button
                key={index}
                className="list-items"
                onClick={() => setItemIsDone(item)}
              >
                <p
                  style={{
                    textDecoration: item.done ? "line-through" : "none",
                  }}
                >
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>
        <div className="footerr">
          <p className="p">
            You have <span id="numberOfItems">{toDoList.length}</span> pending
            tasks
          </p>
          <Button variant="contained" color="error" onClick={clearAllItems}>
            Clear All
          </Button>
        </div>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleSignUp}>Sign up</Button>
        <Button onClick={handleLogout}>Logout</Button>
        <Typography color={auth.currentUser ? "primary" : "error"}>
          Status: {auth.currentUser ? "Logged in" : "Not authenticated"}
        </Typography>
      </div>
    </div>
  );
};

export default App;
