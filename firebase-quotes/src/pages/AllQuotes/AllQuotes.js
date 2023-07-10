import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import { authSlice } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import { Grid } from "@mui/material";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);
  const authState = useSelector((state) => state.auth);
  const quoteState = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes([...data, ...data, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <Grid container spacing={2}>
        {quotes.map((quote, index) => {
          return <QuoteCard key={index} quote={quote} />;
        })}
      </Grid>
    </Layout>
  );
}

export default AllQuotes;
