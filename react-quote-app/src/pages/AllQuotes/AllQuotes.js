import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import { authSlice } from "../../store/authSlice";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);
  const authState = useSelector((state) => state.auth);
  const dispach = useDispatch();

  console.log(authState);

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
      <button
        onClick={() => {
          dispach(authSlice.actions.logout());
        }}
      >
        Logout
      </button>
      {quotes.map((quote, index) => {
        return <QuoteCard key={index} quote={quote} />;
      })}
    </div>
  );
}

export default AllQuotes;
