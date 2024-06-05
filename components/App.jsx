import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/counterSlice";

export default () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          прибавить
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(increment())}
        >
          отнять
        </button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(42))}>Прибавить 42</button>
      </div>
    </div>
  );
};
