import React, { useState } from "react";
import "./QuoteCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quoteSlice } from "../../store/quoteSlice";

const QuoteCard = (props) => {
  const quote = props.quote;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const goToDetails = () => {
    navigate("/quote/" + quote._id);
  };

  const addToFavorites = () => {
    dispatch(quoteSlice.actions.setFavorite(quote));
  };

  const reportQuote = () => {
    const reportMessage = prompt("Enter report message");
    const reportObject = {
      quote: quote,
      reportMessage: reportMessage,
      user: {
        fullName: authState.fullName,
        id: authState.id,
      },
    };
    dispatch(quoteSlice.actions.setReport(reportObject));
  };

  return (
    <div className="quote-card">
      <p>
        <i>{quote.quoteText}</i>
      </p>
      <p>
        <b>{quote.quoteAuthor}</b>
      </p>
      <button onClick={goToDetails}>Go to details</button>
      <button onClick={addToFavorites}>Add to faviorites</button>
      <button onClick={reportQuote}>Report quote</button>
    </div>
  );
};

export default QuoteCard;
