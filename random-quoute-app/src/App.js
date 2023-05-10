import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="quote-wrapper">
          <div className="quote-card">
            <h3>Author: Muhamed</h3>
            <p>Hello world</p>
            <p>Likes: 5</p>
          </div>
          <button>Get random quote</button>
        </div>
      </div>
    );
  }
}

export default App;
