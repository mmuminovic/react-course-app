import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faviorites: [],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    setFavorite(state, actions) {
      const quote = actions.payload;
      state.faviorites.push(quote);
      return state;
    },
    clearFavorites(state, actions) {
      return initialState;
    },
  },
});
