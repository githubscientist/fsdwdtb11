import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>

      <button
        onClick={handleDecrease}
      >-</button> {count} <button
        onClick={handleIncrease}
      >+</button>

      {/* <button
        onClick={handleReset}
      >Reset</button> */}
    </div>
  )
}

export default App;