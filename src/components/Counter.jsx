import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostsByIdQuery } from "../redux/postsSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // const { data, isLoading, isError } = useGetAllPostsQuery();
  const { data, isLoading, isError } = useGetPostsByIdQuery(count);

  return (
    <>
    {JSON.stringify(data)}
      <div>Counter is: {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default Counter;
