import React from "react";
import "./style.css";
import PlusImg from "./slika/plus.png";

// const mockList = ["Buy fruits", "Read a book", "Take a shower"];

class App extends React.Component {
  state = { taskName: "", todoList: [] };

  addNewTask() {
    const newToDoList = this.state.todoList;
    newToDoList.push(this.state.taskName);
    this.setState({
      taskName: "",
      todoList: newToDoList,
    });
  }

  render() {
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
              value={this.state.taskName}
              onChange={(event) => {
                const taskNameValue = event.target.value;
                this.setState({ taskName: taskNameValue });
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  this.addNewTask();
                }
              }}
            />
            <button
              id="btnn1"
              className="btnn1"
              onClick={() => this.addNewTask()}
            >
              <img src={PlusImg} className="img" alt="" />
            </button>
          </div>
          <div id="list" className="d-grid gap-2 col-6 button">
            {/* {mockList.map((item) => (
              <p>{item.toUpperCase()}</p>
            ))} */}
            {this.state.todoList.map((item, index) => {
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
              You have{" "}
              <span id="numberOfItems">{this.state.todoList.length}</span>{" "}
              pending tasks
            </p>
            <button
              id="btnn2"
              className="btnn2"
              onClick={() => {
                this.setState({ taskName: "", todoList: [] });
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
