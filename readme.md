# Day - 27: React Hooks

## Topics

- [x] useReducer
- [x] useRef
- [x] useCallback
- [x] useMemo

### useReducer

- useReducer is a hook that allows you to manage state in a component.
- It is similar to useState, but used to manage complex state.
- It takes a reducer function and an initial state as arguments.
- The reducer function is used to update the state.

### useRef

- useRef is a hook that allows you to create a reference to an element in the DOM.
- useRef is a hook that allows you to create a mutable reference to a value.
- It is used to access a value that is not part of the component's state.

### useCallback

- useCallback is a hook that allows you to memoize a function.
- It is used to prevent a function from being recreated on every render.

```jsx
import { useCallback, useState } from "react";
import React from "react";

const Counter = ({ onIncrement }) => {
  console.log("rendering...");

  return <button onClick={onIncrement}>Increment</button>;
};

const MemoizedCounter = React.memo(Counter);

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedCounter onIncrement={increment} />
    </div>
  );
};

export default App;
```

#### Observations:

- useCallback is used to memoize a function.
- It is used to prevent a function from being recreated on every render.
- Here, increment function is memoized and is not recreated on every render.
- Additionally, we have used React.memo to memoize the Counter component, which helps in performance optimization. The Counter component (as a child component) does not re-render on every render of the App (parent) component.
