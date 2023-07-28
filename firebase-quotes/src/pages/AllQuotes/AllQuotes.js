import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllQuotes.css";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import { useNavigate } from "react-router-dom";
import Layout from "../../containers/Layout/Layout";
import { Grid } from "@mui/material";
import { getQuotes, auth } from "../../firebase";
import AllQuotesContainer from "../../containers/Layout/AllQuotesContainer";

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
      <AllQuotesContainer quotes={quotes} />
    </Layout>
  );
};

export default AllQuotes;
