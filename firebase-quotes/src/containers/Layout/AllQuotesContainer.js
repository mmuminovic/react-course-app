import { Grid } from "@mui/material";
import React, { memo } from "react";
import QuoteCard from "../../components/QuoteCard/QuoteCard";

const AllQuotesContainer = (props) => {
  return (
    <Grid container spacing={2}>
      {props.quotes.map((quote, index) => {
        return <QuoteCard key={index} quote={quote} />;
      })}
    </Grid>
  );
};

export default memo(AllQuotesContainer);
