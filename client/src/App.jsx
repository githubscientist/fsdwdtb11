import { useRef } from "react";

const App = () => {

  const nameRef = useRef(null);

  function focusInput() {
    nameRef.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        ref={nameRef}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default App;