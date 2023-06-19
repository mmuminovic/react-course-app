import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { quoteSlice } from "./quoteSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  quote: quoteSlice.reducer,
  // test: testSlice.reducer,
});
