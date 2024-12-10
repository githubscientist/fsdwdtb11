import { useEffect, useRef, useState } from "react";

const App = () => {
  let cnt = 0;
  const count = useRef(0);
  const [render, setRender] = useState(0);

  console.log(count);
  console.log(`count.current = ${count.current}`);
  console.log(`render = ${render}`);
  console.log(`cnt = ${cnt}`);

  function handleIncrement() {
    cnt++;
    count.current++;
    setRender(render + 1);
  }

  return (
    <div>
      <h1>Count: {count.current}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App;