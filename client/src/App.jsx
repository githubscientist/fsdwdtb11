import { useState } from "react";

const App = () => {

  const [reactions, setReactions] = useState({
    likes: 0,
    dislikes: 0
  });

  function handleLike() {
    setReactions({
      ...reactions,
      likes: reactions.likes + 1
    });
  }

  function handleDislike() {
    setReactions({
      ...reactions,
      dislikes: reactions.dislikes + 1
    })
  }

  return (
    <>
      <button onClick={handleLike}><span className="material-symbols-outlined">
        thumb_up
      </span></button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleDislike}><span className="material-symbols-outlined">
        thumb_down
      </span></button>
      <div>
        <p>Likes: {reactions.likes}</p>
        <p>Dislikes: {reactions.dislikes}</p>
      </div>
    </>
  )
}

export default App;