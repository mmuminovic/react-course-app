import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  saved: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increaseCounter(state, action) {
      state.counter = state.counter + 1;
      return state;
    },
    resetCounter(state, action) {
      return initialState;
    },
    saveCounting(state, action) {
      const userData = action.payload; // {fullName: '...', id: '....'}
      const item = {
        counter: state.counter,
        user: userData,
        date: new Date().toISOString(),
      };
      state.counter = 0;
      state.saved.push(item);
      return state;
    },
  },
});
