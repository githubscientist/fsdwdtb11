import { useDispatch, useSelector } from "react-redux"
import { minus, plus, selectCount } from "./redux/features/count/countSlice"

const App = () => {

  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(plus());
  }

  const handleMinus = () => {
    dispatch(minus());
  }

  return (
    <div>
      <button onClick={handleMinus}>-</button><p style={{ display: "inline" }}> {count} </p><button onClick={handlePlus}>+</button>
    </div>
  )
}

export default App;