import { useEffect, useState } from "react";

const App = () => {

  const [posts, setPosts] = useState([]);

  // runs on component render and on every state change for posts
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  // runs only once when the component renders
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log('Error fetching posts...', error);
      })
  }, []);

  return (
    <>
      <h1>Posts</h1>
    </>
  )
}

export default App;