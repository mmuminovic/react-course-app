import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { quoteSlice } from "./quoteSlice";
import { themeSlice } from "./themeSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  quote: quoteSlice.reducer,
  theme: themeSlice.reducer,
  // test: testSlice.reducer,
});
