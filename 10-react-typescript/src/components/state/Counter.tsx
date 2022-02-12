import React, { useReducer } from "react";

type CounterAction = {
  type: string;
  payload: number;
};

type CounterState = {
  count: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count is: {state.count}</div>

      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
          Increment by 10
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
          Decrement by 10
        </button>
      </div>
    </>
  );
};
