import { useEffect, useState } from "react";

const App = () => {

  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);

  // runs when the component renders and only once
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div>
        <h1>Likes: {likes}</h1>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
      </div>
    </>
  )
}

export default App;