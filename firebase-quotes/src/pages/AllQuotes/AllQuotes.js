import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import { useNavigate } from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import { Grid } from "@mui/material";
import { getQuotes, auth } from "../../firebase";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const authState = useSelector((state) => state.auth);
  const quoteState = useSelector((state) => state.quote);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getQuotes()
      .then((data) => {
        setQuotes(data);
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
};

export default AllQuotes;
