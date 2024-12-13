import { useState } from "react";
import A from "./components/A";
import B from "./components/B";
import AuthContext from "./contexts/AuthContext";

const App = () => {

  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>
        <A />
        <B />
      </div>
    </AuthContext.Provider>
  )
}

export default App;