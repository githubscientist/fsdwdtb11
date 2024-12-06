import { useEffect, useState } from "react";

const App = () => {

  const [posts, setPosts] = useState([]);
  const list = [];

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

  for (let i = 0; i < posts.length; i++) {
    list.push(<li>{posts[i].title}</li>)
  }

  console.log(list);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {list}
      </ul>
    </>
  )
}

export default App;