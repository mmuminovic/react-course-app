import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import "./App.css";
import {
  addToDoItem,
  auth,
  deleteAllToDoItems,
  getToDoList,
  getToDoListForUser,
  login,
  logout,
  signUp,
  updateToDoItemData,
} from "./firebase";
import { Button, Box, Typography } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useTranslation } from "react-i18next";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  const buttonRef = useRef();

  const foundItems = useMemo(() => {
    return toDoList.filter((item) => item.title.includes(search));
  }, [search]);

  const firstToDoWithReadWord = useMemo(() => {
    console.log("recalculating firstToDoWithReadWord");
    return toDoList.find((item) => item.title.includes("read"));
  }, [toDoList]);

  const getAllItems = useCallback(() => {
    getToDoListForUser().then((data) => {
      setToDoList(data);
    });
  }, []);

  const amIGoingToRead = useMemo(() => {
    return taskName.toLowerCase().includes("read");
  }, [taskName]);

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      getAllItems();
    });
  }, [getAllItems]);

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  const addNewTask = () => {
    const itemData = {
      title: taskName,
      description: "",
      date: new Date(),
      done: false,
    };

    setToDoList([...toDoList, itemData]);
    // addToDoItem(itemData).then(() => {
    //   getAllItems();
    //   setTaskName("");
    // });
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
  const handleLogin2 = () => {
    login({ email: "muminovic.muhamed02@gmail.com", password: "muhamed123" });
  };
  const handleSignUp = () => {
    signUp({ email: "muminovic.muhamed02@gmail.com", password: "muhamed123" });
  };
  const handleLogout = () => {
    logout();
  };

  const sayHelloWorld = () => {
    alert("Hello world!");
  };

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };

  // useEffect(() => {
  //   const lng = localStorage.getItem("i18nextLng");
  //   if (lng) {
  //     i18n.changeLanguage(lng);
  //   }
  // }, []);
  if (inputRef) {
    // console.log(inputRef.current);
  }
  if (buttonRef) {
    console.log(buttonRef.current);
  }

  return (
    <div className="container">
      <div className="todo__box">
        <h1>{t("welcome")}</h1>
        <div className="title">
          <h2 className="h__todo">{t("todoAppName")}</h2>
        </div>
        {amIGoingToRead && <p>Go ahead!</p>}
        <div className="form">
          <input
            ref={inputRef}
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
            {toDoList.length === 1
              ? t("numPendingTasks", { num: 1 })
              : t("numPendingTasksMore", { num: toDoList.length })}
          </p>
          <Button variant="contained" color="error" onClick={clearAllItems}>
            Clear All
          </Button>
        </div>
        <Button onClick={handleLogin}>Login 01 - Branch 01</Button>
        <Button onClick={handleLogin}>Login 01 - Branch 02</Button>
        <Button onClick={handleLogin2}>Login 02</Button>
        <Button onClick={handleSignUp}>Sign up</Button>
        <Button onClick={handleLogout}>Logout</Button>
        <Button ref={buttonRef} onClick={sayHelloWorld}>
          Say Hello World
        </Button>
        <Typography color={auth.currentUser ? "primary" : "error"}>
          Status: {auth.currentUser ? "Logged in" : "Not authenticated"}
        </Typography>
        <div>
          <Button onClick={() => handleChangeLanguage("en")}>English</Button>
          <Button onClick={() => handleChangeLanguage("rs")}>Srpski</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
