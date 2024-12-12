import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  }

  const handleMinus = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button><p style={{ display: "inline" }}> {count} </p><button onClick={handlePlus}>+</button>
    </div>
  )
}

export default App;