import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // "light" | "dark"
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme(state, actions) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      return state;
    },
  },
});
