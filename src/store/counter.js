import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // this might look like we are mutating existing state which might seem wrong
      // but here it's perfectly fine because redux toolkit behind the scenes uses
      // a package which in-turn creates a brand new object with updated counter value

      // also writing this is also correct
      //   return {
      //     ...state,
      //     counter: state.counter + 1,
      //   };
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
