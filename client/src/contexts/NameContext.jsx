import { createContext, useState } from 'react'

export const NameContext = createContext(null);

export const NameProvider = ({ children }) => {
    const [name, setName] = useState('Guest');

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    )
}