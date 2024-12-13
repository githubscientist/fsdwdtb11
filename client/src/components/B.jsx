import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const B = () => {

    const { user, setUser } = useContext(AuthContext);

    return (
        <div>
            <button disabled={user} onClick={() => setUser({
                user: 'sathish'
            })}>Login</button>
            &nbsp;&nbsp;
            {
                user && <button onClick={() => setUser(null)}>Logout</button>
            }
        </div>
    )
}

export default B;