import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  fullName: null,
  email: null,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setData(state, actions) {
      const data = actions.payload;
      state = data;
      return state;
    },
    logout(state, actions) {
      return initialState;
    },
  },
});
