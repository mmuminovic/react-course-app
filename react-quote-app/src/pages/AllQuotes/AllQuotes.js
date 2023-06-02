import React, { useEffect, useState } from "react";
import "./AllQuotes.css";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);

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

  console.log(quotes);

  return <div className="all-quotes">AllQuotes</div>;
}

export default AllQuotes;
