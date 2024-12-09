import { useReducer } from "react"
import { countReducer, initialState } from "./reducers/countReducer";

const App = () => {

  const [state, dispatch] = useReducer(countReducer, initialState);

  console.log(state.history);

  const handleIncrement = () => {
    dispatch({ type: "INCR" });
  }

  const handleDecrement = () => {
    dispatch({ type: "DECR" });
  }

  const handleReset = () => {
    dispatch({ type: "RESET" });
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br /><br />
      {state.history.join(', ')}
    </div>
  )
}

export default App