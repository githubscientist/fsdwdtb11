import React, { useContext } from 'react'
import { NameContext } from '../contexts/NameContext';

const B = () => {

    const { name, setName } = useContext(NameContext);

    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>Update</button>
        </div>
    )
}

export default B