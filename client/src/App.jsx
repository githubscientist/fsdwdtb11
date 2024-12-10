import { useCallback, useState } from "react";
import React from "react";

const Counter = ({ onIncrement }) => {

  console.log('rendering...');

  return (
    <button
      onClick={onIncrement}
    >Increment</button>
  )
}

const MemoizedCounter = React.memo(Counter);

const App = () => {

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedCounter
        onIncrement={increment}
      />
    </div>
  )
}

export default App;