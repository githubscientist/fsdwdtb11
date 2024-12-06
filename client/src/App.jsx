import { useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  console.log(count);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={handleIncrease}
      >Increase</button>
    </div>
  )
}

export default App;