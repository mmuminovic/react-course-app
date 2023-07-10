import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  reports: [], // [ {quote: {...}, reportMessage: 'This is not good quote'} ]
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    setFavorite(state, action) {
      const quote = action.payload;
      const favIds = state.favorites.map((item) => item._id);
      if (!favIds.includes(quote._id)) {
        state.favorites.push(quote);
      }
      return state;
    },
    setReport(state, action) {
      const reportData = action.payload;
      state.reports.push(reportData);
      return state;
    },
    clearFavorites(state, action) {
      return initialState;
    },
  },
});
