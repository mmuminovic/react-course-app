import React from "react";
import "./style.css";
import PlusImg from "./slika/plus.png";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="todo__box">
          <div className="title">
            <h2 className="h__todo">Todo App</h2>
          </div>
          <div className="form">
            <input id="taskName" type="add" placeholder="Add your new todo" />
            <button id="btnn1" className="btnn1">
              <img src={PlusImg} className="img" alt="" />
            </button>
          </div>
          <div id="list" className="d-grid gap-2 col-6 button">
            {/* <button className="list-items">how to make a game</button> */}
            {/* <button className="list-items">keyword researching</button> */}
            {/* <button className="list-items">ui ux desing for app</button> */}
          </div>
          <div className="footerr">
            <p className="p">
              You have <span id="numberOfItems">0</span> pending tasks
            </p>
            <button id="btnn2" className="btnn2">
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
