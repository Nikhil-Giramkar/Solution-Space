import { createContext, useContext } from "react";


export const AuthContext = createContext();

//Provider is responsible for providing the data to other components
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const storeTokenInLocalStorage = (serverToken) => {
        return localStorage.setItem("token", serverToken)
    }

    return <AuthContext.Provider value={{storeTokenInLocalStorage}}>
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
