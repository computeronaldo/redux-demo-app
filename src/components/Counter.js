import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // useDispatch returns a function which can be used to dispatch actions which
  // make their way to reducer function which then mutates the central storage
  const dispatch = useDispatch();

  // useSelector helps us to get a piece or slice of data from central-data store
  // this piece of data we get is determined by the function we pass as an argument
  // to useSelector and useSelector also makes sure the component we are using
  // useSelector in get's subscribed to the central-store

  // also if this component unmounts react-redux makes sure to unsubscribe from store
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
