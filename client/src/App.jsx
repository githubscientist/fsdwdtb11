import ChildComponent from "./components/ChildComponent";

const App = () => {
  const messageFromChild = (message) => {
    console.log(message);
  }

  return <ChildComponent
    messageFromChild={messageFromChild}
  />
}

export default App;