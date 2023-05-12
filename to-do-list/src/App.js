import React from "react";
import "./style.css";
import PlusImg from "./slika/plus.png";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="todo__box">
          <div class="title">
            <h2 class="h__todo">Todo App</h2>
          </div>
          <div class="form">
            <input id="taskName" type="add" placeholder="Add your new todo" />
            <button id="btnn1" class="btnn1">
              <img src={PlusImg} class="img" alt="" />
            </button>
          </div>
          <div id="list" class="d-grid gap-2 col-6 button">
            {/* <button class="list-items">how to make a game</button> */}
            {/* <button class="list-items">keyword researching</button> */}
            {/* <button class="list-items">ui ux desing for app</button> */}
          </div>
          <div class="footerr">
            <p class="p">
              You have <span id="numberOfItems">0</span> pending tasks
            </p>
            <button id="btnn2" class="btnn2">
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
