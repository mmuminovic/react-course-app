import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
