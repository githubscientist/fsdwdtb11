import DisplayTemperature from "./components/DisplayTemperature";

const App = () => {

  const temperature = 20;

  return <DisplayTemperature
    temperature={temperature}
  />
}

export default App;