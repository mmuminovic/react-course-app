import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
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
    clearFavorites(state, action) {
      return initialState;
    },
  },
});
