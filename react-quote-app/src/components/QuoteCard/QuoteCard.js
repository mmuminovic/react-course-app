import React, { useState } from "react";
import "./QuoteCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quoteSlice } from "../../store/quoteSlice";

const QuoteCard = (props) => {
  const quote = props.quote;
  const navigate = useNavigate();
  const dispach = useDispatch();

  const goToDetails = () => {
    navigate("/quote/" + quote._id);
  };

  const addToFavorites = () => {
    dispach(quoteSlice.actions.setFavorite(quote));
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
    </div>
  );
};

export default QuoteCard;
