import React from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";
import EventItem from "./components/EventItem";

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
            yellowCard={() => {
              this.goalScored("home", "yellowCard");
            }}
            redCard={() => {
              this.goalScored("home", "redCard");
            }}
          />
          <ScoreCard
            name="Guest"
            score={guestScores}
            goal={() => {
              this.goalScored("guest", "goal");
            }}
            yellowCard={() => {
              this.goalScored("guest", "yellowCard");
            }}
            redCard={() => {
              this.goalScored("guest", "redCard");
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

        <div className="event-list">
          {this.state.scores.map((item, index) => {
            return <EventItem key={index} item={item} />;
          })}
          {/*           
          <div className="event-list-item" style={{ textAlign: "left" }}>
            <h4>Goal!</h4>
            <p>Ronaldo</p>
          </div>
          <div
            className="event-list-item"
            style={{ textAlign: "left", backgroundColor: "yellow" }}
          >
            <h4>Yellow Card</h4>
            <p>Casillas</p>
          </div>
          <div
            className="event-list-item"
            style={{ textAlign: "right", backgroundColor: "red" }}
          >
            <h4>Red Card</h4>
            <p>Messi</p>
          </div>
           */}
        </div>
      </div>
    );
  }
}

export default App;
