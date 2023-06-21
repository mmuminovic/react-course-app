import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import { authSlice } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);
  const authState = useSelector((state) => state.auth);
  const quoteState = useSelector((state) => state.quote);
  const dispach = useDispatch();
  const navigate = useNavigate();

  console.log("all reports", quoteState.reports);

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="all-quotes">
      <div className="header">
        <p>Favorite quotes: {quoteState.favorites.length}</p>
        <button>Go to favorites</button>
      </div>
      {authState.id ? (
        <button
          onClick={() => {
            dispach(authSlice.actions.logout());
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      )}
      {quotes.map((quote, index) => {
        return <QuoteCard key={index} quote={quote} />;
      })}
    </div>
  );
}

export default AllQuotes;
