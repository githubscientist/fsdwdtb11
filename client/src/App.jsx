import { useEffect } from "react";
import axios from "axios";

const App = () => {

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div>App</div>
  )
}

export default App;