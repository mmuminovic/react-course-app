import React, { useState } from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard";
import EventItem from "./components/EventItem";

const NewApp = () => {
  const [state, setState] = useState({
    scores: [],
    gameover: false,
    player: "",
  });

  const goalScored = (team, event) => {
    const eventData = {
      player: state.player,
      team: team,
      event: event,
    };
    const newScores = state.scores;
    newScores.push(eventData);
    setState({ ...state, scores: newScores, player: "" });
  };

  const getGoalNumber = (team) => {
    const teamScores = state.scores.filter((item, index) => {
      return item.team === team && item.event === "goal";
    });
    return teamScores.length;
  };

  const homeScores = getGoalNumber("home");
  const guestScores = getGoalNumber("guest");

  return (
    <div className="app">
      <div className="scores-container">
        <ScoreCard
          name="Home"
          score={homeScores}
          goal={() => {
            goalScored("home", "goal");
          }}
          yellowCard={() => {
            goalScored("home", "yellowCard");
          }}
          redCard={() => {
            goalScored("home", "redCard");
          }}
        />
        <ScoreCard
          name="Guest"
          score={guestScores}
          goal={() => {
            goalScored("guest", "goal");
          }}
          yellowCard={() => {
            goalScored("guest", "yellowCard");
          }}
          redCard={() => {
            goalScored("guest", "redCard");
          }}
        />
      </div>
      <input
        value={state.player}
        onChange={(event) => {
          const value = event.target.value;
          setState({ ...state, player: value });
        }}
        placeholder="Unesite ime fudbalera"
      />

      <div className="event-list">
        {state.scores.map((item, index) => {
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
};

export default NewApp;
