import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const A = () => {

  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>{!user ? 'You are not logged in' : 'You are logged in'}</h1>
    </div>
  )
}

export default A