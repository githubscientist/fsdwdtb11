import { useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleDislike() {
    setDislikes(dislikes + 1);
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
        <p>Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
      </div>
    </>
  )
}

export default App;