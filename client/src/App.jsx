import { useState } from "react";
import './App.css';

const App = () => {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('logging in...');
    console.log(credentials.email, credentials.password);
  }

  const headerStyle = {
    // textAlign: 'center'
  }

  return (
    <>
      <h1 style={headerStyle} className="text-3xl font-bold underline">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email..."
          value={credentials.email}
          onChange={(e) => setCredentials({
            ...credentials,
            email: e.target.value
          })}
        />
        <input
          type="password"
          placeholder="Password..."
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })}
        />

        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App;