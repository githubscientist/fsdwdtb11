import React from 'react'
import B from './components/B';
import A from './components/A';
import { NameProvider } from './contexts/NameContext';

const App = () => {
  return (
    <NameProvider>
      <div>
        <A />
        <B />
      </div>
    </NameProvider>
  )
}

export default App;