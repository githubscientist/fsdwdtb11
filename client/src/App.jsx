const App = () => {

  let count = 0;

  const handleIncrease = () => {
    count++;
    console.log(count);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={handleIncrease}
      >Increase</button>
    </div>
  )
}

export default App;