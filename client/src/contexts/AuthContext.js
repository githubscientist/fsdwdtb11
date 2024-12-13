import { createContext } from "react";

// create a context with default value
const AuthContext = createContext({
    user: null
});

export default AuthContext;