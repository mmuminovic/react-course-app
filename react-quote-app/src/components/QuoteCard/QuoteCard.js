import React, { useState } from "react";
import "./QuoteCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quoteSlice } from "../../store/quoteSlice";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const QuoteCard = (props) => {
  const quote = props.quote;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const goToDetails = () => {
    navigate("/quote/" + quote._id);
  };

  const addToFavorites = () => {
    dispatch(quoteSlice.actions.setFavorite(quote));
  };

  const reportQuote = () => {
    const reportMessage = prompt("Enter report message");
    const reportObject = {
      quote: quote,
      reportMessage: reportMessage,
      user: {
        fullName: authState.fullName,
        id: authState.id,
      },
    };
    dispatch(quoteSlice.actions.setReport(reportObject));
  };

  return (
    <Card variant="outlined" sx={{ my: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {quote.quoteAuthor}
        </Typography>
        <Typography variant="h5" component="div">
          {quote.quoteText}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {quote.quoteSource}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="error" />
        </IconButton>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default QuoteCard;
