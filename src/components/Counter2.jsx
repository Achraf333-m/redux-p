import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

function Counter2() {
  const dispatch = useDispatch();

  return (
    <>
      <div>This is the second counter in a different component</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default Counter2;
