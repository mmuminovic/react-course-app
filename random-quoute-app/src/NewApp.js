import React, { useState, useEffect } from "react";
import "./App.css";

const NewApp = () => {
  const [state, setState] = useState({
    author: "",
    text: "",
    likes: null,
  });

  const getRandomQuote = () => {
    fetch("https://js-course-server.onrender.com/quotes/get-random-quote")
      .then((res) => res.json())
      .then((data) => {
        setState({
          text: data.quoteText,
          author: data.quoteAuthor,
          likes: data.likes,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("componentDidMount");
    getRandomQuote();
  }, []);

  useEffect(() => {
    console.log("state is updated");
  }, [state]);

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  return (
    <div className="app">
      <div className="quote-wrapper">
        <div className="quote-card">
          <h3>Author: {state.author}</h3>
          <p className="quote-text">{state.text}</p>
          <p>Likes: {state.likes}</p>
        </div>
        <button
          onClick={() => {
            getRandomQuote();
          }}
        >
          Get random quote
        </button>
      </div>
    </div>
  );
};

export default NewApp;
