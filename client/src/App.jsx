import B from "./components/B";

const App = () => {
  const time = new Date().toLocaleTimeString();

  return <B
    time={time}
  />
}

export default App;