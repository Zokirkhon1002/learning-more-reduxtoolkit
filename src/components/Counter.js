import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Increment,
  Decrement,
  IncreaseByAmount,
  DecreaseByAmount,
} from "../redux/slices/CounterSlices";

const Counter = () => {
  // using Dispatch in order to use functions
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);

  // functions for action.payload
  const handleIncrement = () => dispatch(Increment());
  const handleDecrement = () => dispatch(Decrement());
  const handleIncreseByAmount = (num) => dispatch(IncreaseByAmount(num));
  const handleDecrementByAmount = (num) => dispatch(DecreaseByAmount(num));

  return (
    <div className="App m-3">
      <h1>Redux Toolkit Counter</h1>
      <h2>Counter: {counter.value}</h2>
      <button className="m-1" onClick={handleIncrement}>
        {" "}
        +{" "}
      </button>
      <span> </span>
      <button className="m-1" onClick={handleDecrement}>
        {" "}
        -{" "}
      </button>
      <br />
      <button className="m-1" onClick={() => handleIncreseByAmount(20)}>
        IncreaseBy 20
      </button>
      <br />
      <button className="m-1" onClick={() => handleDecrementByAmount(20)}>
        DecreaseBy 20
      </button>
    </div>
  );
};

export default Counter;
