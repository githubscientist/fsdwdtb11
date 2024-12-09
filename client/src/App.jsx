import { useReducer, useState } from "react";

// define the initial state
const initialState = {
  count: 0
}

// define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  )
}

export default App;