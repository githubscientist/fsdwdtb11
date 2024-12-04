import Timer from "./components/Timer";

const App = () => {
  const time = new Date().toLocaleTimeString();

  const getMessage = (msg) => {
    console.log(msg);
  }

  return (
    <>
      <Timer
        time={time}
        getMessage={getMessage}
      />
    </>
  )
}

export default App;