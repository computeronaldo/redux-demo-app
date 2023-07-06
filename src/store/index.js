import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterSlice.reducer);

const store = configureStore({
  // be it createStore or configureStore method both expect a single reducer
  // with createStore we can't do anything to pass multiple reducers but with
  // configureStore method we can pass multiple reducers inside reducer key
  // as objects which will be merged later on as our store needed to aware of
  // various reducer because that's what mutates our data store and changes the UI
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});

export default store;
