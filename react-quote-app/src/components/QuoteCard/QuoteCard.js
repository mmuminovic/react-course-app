import React from "react";
import "./QuoteCard.css";
import { useNavigate } from "react-router-dom";

const QuoteCard = (props) => {
  const quote = props.quote;
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate("/quote/" + quote._id);
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
    </div>
  );
};

export default QuoteCard;
