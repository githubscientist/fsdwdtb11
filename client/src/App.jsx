import { useEffect } from "react";
import instance from "./services/instance";

const App = () => {

  useEffect(() => {
    instance.get('/todos/1')
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