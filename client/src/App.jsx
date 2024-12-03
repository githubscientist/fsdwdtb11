import Header from "./components/Header";

const App = () => {

  const sendMessage = (msg) => {
    console.log(msg);
  }

  return (
    <>
      <Header
        sendMessage={sendMessage}
      />
    </>
  )
}

export default App;