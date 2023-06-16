import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
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
      console.log(data, "data");
      state = data;
      return state;
    },
    logout(state, actions) {
      return initialState;
    },
  },
});
