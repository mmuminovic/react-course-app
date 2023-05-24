import React from "react";

class EventItem extends React.Component {
  render() {
    let textAlign = "left";
    if (this.props.item.team === "guest") {
      textAlign = "right";
    }

    let backgroundColor = "white";
    let eventName = "Goal!";
    if (this.props.item.event === "redCard") {
      backgroundColor = "red";
      eventName = "Red Card";
    } else if (this.props.item.event === "yellowCard") {
      backgroundColor = "yellow";
      eventName = "Yellow Card";
    }
    return (
      <div
        className="event-list-item"
        style={{
          textAlign: textAlign,
          backgroundColor: backgroundColor,
        }}
      >
        <h4>{eventName}</h4>
        <p>{this.props.item.player}</p>
      </div>
    );
  }
}

const NewEventItem = (props) => {
  let textAlign = "left";
  if (props.item.team === "guest") {
    textAlign = "right";
  }

  let backgroundColor = "white";
  let eventName = "Goal!";
  if (props.item.event === "redCard") {
    backgroundColor = "red";
    eventName = "Red Card";
  } else if (props.item.event === "yellowCard") {
    backgroundColor = "yellow";
    eventName = "Yellow Card";
  }
  return (
    <div
      className="event-list-item"
      style={{
        textAlign: textAlign,
        backgroundColor: backgroundColor,
      }}
    >
      <h4>{eventName}</h4>
      <p>{props.item.player}</p>
    </div>
  );
};

export default NewEventItem;
