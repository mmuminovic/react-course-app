import React from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";

class App extends React.Component {
  state = {
    scores: [],
    gameover: false,
    player: "",
  };

  goalScored(team, event) {
    const eventData = {
      player: this.state.player,
      team: team,
      event: event,
    };
    const newScores = this.state.scores;
    newScores.push(eventData);
    this.setState({ scores: newScores, player: "" });
  }

  getGoalNumber(team) {
    const teamScores = this.state.scores.filter((item, index) => {
      return item.team === team && item.event === "goal";
    });
    return teamScores.length;
  }

  render() {
    const homeScores = this.getGoalNumber("home");
    const guestScores = this.getGoalNumber("guest");
    return (
      <div className="app">
        <div className="scores-container">
          <ScoreCard
            name="Home"
            score={homeScores}
            goal={() => {
              this.goalScored("home", "goal");
            }}
          />
          <ScoreCard
            name="Guest"
            score={guestScores}
            goal={() => {
              this.goalScored("guest", "goal");
            }}
          />
        </div>
        <input
          value={this.state.player}
          onChange={(event) => {
            const value = event.target.value;
            this.setState({ player: value });
          }}
          placeholder="Unesite ime fudbalera"
        />
      </div>
    );
  }
}

export default App;
