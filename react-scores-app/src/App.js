import React from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";

// const [state,setState] = useState({
//   homeScore: 0,
//   guestScore: 0,
// })

class App extends React.Component {
  state = {
    homeScore: 0,
    guestScore: 0,
    gameover: false,
  };

  componentDidMount() {
    console.log("DID MOUNT");
    // this.setState({ homeScore: 0, guestScore: 0 });
  }

  componentDidUpdate() {
    console.log("DID UPDATE");
    if (this.state.gameover === false) { // igra traje
      if (this.state.homeScore === 5) {
        console.log("Home is winner");
        this.setState({ gameover: true }); // prekini igru
      }
      if (this.state.guestScore === 5) {
        console.log("Guest is winner");
        this.setState({ gameover: true });
      }
    }
  }

  render() {
    return (
      <div className="app">
        <div className="scores-container">
          <ScoreCard
            name="Home"
            score={this.state.homeScore}
            goal={() => {
              if (this.state.gameover === false) {
                this.setState({ homeScore: this.state.homeScore + 1 });
              }
            }}
          />
          <ScoreCard
            name="Guest"
            score={this.state.guestScore}
            goal={() => {
              if (this.state.gameover === false) { // igra traje
                this.setState({ guestScore: this.state.guestScore + 1 });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
