import {createContext, useState} from "react";
import { getMe } from "./services/auth.api";


/* Explanation: This context will be used to manage the authentication state across the application */
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);  //initially, there is no user logged in, so we set it to null     
  const [loading, setLoading] = useState(true); // To track the loading state of the authentication process

  

  return (
    <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
}

