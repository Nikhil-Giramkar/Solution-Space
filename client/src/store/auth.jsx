import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

//Provider is responsible for providing the data to other components
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    //Created a state of token, since its used ay multiple places and we need to have a single source of truth
    const [token, setToken] = useState(localStorage.getItem("token"))

    //If token present -> true, if not -> false
    const isLoggedIn = !!token;

    const storeTokenInLocalStorage = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token", serverToken)
    }

    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    return <AuthContext.Provider value={{isLoggedIn, storeTokenInLocalStorage, logoutUser}}>
        {children}
    </AuthContext.Provider>
}

//Creating custom hook, which can be used anywhere now
//useAuth has all the properties of AuthContext in it
export const useAuth = () => {
    const authContextData = useContext(AuthContext);
    if(!authContextData)
        throw new Error("useAuth used outside of the Provider")

    return authContextData
}
