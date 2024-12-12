import { useReducer, useState } from "react"

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  if (action.type === 'PLUS') {
    return {
      count: state.count + 1
    }
  } else if (action.type === 'MINUS') {
    return {
      count: state.count - 1
    }
  }
  return state;
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePlus = () => {
    dispatch({ type: "PLUS" });
  }

  const handleMinus = () => {
    dispatch({ type: "MINUS" });
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button><p style={{ display: "inline" }}> {state.count} </p><button onClick={handlePlus}>+</button>
    </div>
  )
}

export default App;