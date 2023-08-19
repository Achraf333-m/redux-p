import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../redux/counterSlice";

function Action() {
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();
  return (
    <div>
      {/* <input type="number" onChange={(e) => setNumber(e.target.value)} /> */}
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
    </div>
  );
}

export default Action;
