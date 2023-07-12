import React, { useEffect, useState } from "react";
import "./QuoteDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { deleteQuote, getQuoteById, likeQuote } from "../../firebase";

function QuoteDetails() {
  const params = useParams();
  const [quote, setQuote] = useState({});
  const navigate = useNavigate();

  const getQuoteData = () => {
    getQuoteById(params.id)
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuoteData();
  }, []);

  const likeHandler = () => {
    likeQuote(params.id, quote.likes + 1)
      .then(() => {
        getQuoteData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteQuoteHandler = async () => {
    try {
      await deleteQuote(params.id);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="quote-details">
      <div className="quote-details-card">
        <h3>
          <i>{quote.text}</i>
        </h3>
        <p>
          <b>
            <i>{quote.author}</i>
          </b>
        </p>
        <p>{quote.source}</p>
        <p className="likes">Likes: {quote.likes}</p>
        <button onClick={likeHandler}>Like</button>
        <button onClick={() => navigate(`/quote/${params.id}/edit`)}>
          Edit
        </button>
        <button onClick={() => deleteQuoteHandler()}>Delete</button>
      </div>
    </div>
  );
}

export default QuoteDetails;
