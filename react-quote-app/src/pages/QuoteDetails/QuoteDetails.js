import React, { useEffect, useState } from "react";
import "./QuoteDetails.css";
import { useParams } from "react-router-dom";

function QuoteDetails() {
  const params = useParams();
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-quote/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const likeHandler = () => {
    fetch("https://js-course-server.onrender.com/quotes/like/" + params.id, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="quote-details">
      <div className="quote-details-card">
        <h3>
          <i>{quote.quoteText}</i>
        </h3>
        <p>
          <b>
            <i>{quote.quoteAuthor}</i>
          </b>
        </p>
        <p>{quote.quoteSource}</p>
        <p className="likes">Likes: {quote.likes}</p>
        <button onClick={likeHandler}>Like</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default QuoteDetails;
