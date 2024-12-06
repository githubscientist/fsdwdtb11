import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={handleIncrease}
      >Increase</button>

      <button
        onClick={handleDecrease}
      >Decrease</button>

      <button
        onClick={handleReset}
      >Reset</button>
    </div>
  )
}

export default App;