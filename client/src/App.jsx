import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);

  // runs when the component renders and on every state change
  useEffect(() => {
    console.log(count);
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App;