import React, { useContext } from 'react'
import { NameContext } from '../contexts/NameContext';

const A = () => {

  const { name } = useContext(NameContext);

  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default A;