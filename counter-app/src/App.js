import React from "react";
import "./App.css";

class App extends React.Component {
  state = { counter: 0 };

  render() {
    /// 
    /// 
    ///
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="count-number">{this.state.counter}</h1>
          <div className="buttons-wrapper">
            <div
              className="count-button"
              onClick={() => {
                this.setState({ counter: this.state.counter + 1 });
              }}
            ></div>
            <div
              className="reset-button"
              onClick={() => {
                this.setState({ counter: 0 });
              }}
            ></div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
