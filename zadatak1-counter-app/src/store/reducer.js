import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { counterSlice } from "./counterSlice";
import { themeSlice } from "./themeSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  counter: counterSlice.reducer,
  theme: themeSlice.reducer,
});
