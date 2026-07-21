import {createContext, useState} from "react";


/* Explanation: This context will be used to manage the authentication state across the application */
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);  //initially, there is no user logged in, so we set it to null     
  const [loading, setLoading] = useState(false); // To track the loading state of the authentication process

  return (
    <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
      {children}
    </AuthContext.Provider>
  );
}

