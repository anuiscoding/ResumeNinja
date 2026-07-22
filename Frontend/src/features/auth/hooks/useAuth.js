import {useContext} from "react";
import {AuthContext} from "../auth.context.jsx";
import {loginUser, logoutUser, registerUser, getMe} from "../services/auth.api.js";

//This custom hook proviced the available context and authentication functions
export const useAuth = () => {
    const context = useContext(AuthContext);
    const {user, setUser, loading, setLoading} = context;

    const handleLogin = async  ({email, password}) => {
        setLoading(true);
        const data = await loginUser({email, password});
        setUser(data.user);
        setLoading(false);
    };

    const handleRegister = async ({username, email, password}) =>{
        setLoading(true);
        const data = await registerUser({username, email, password})
        setUser(data.user)
        setLoading(false)
    }

    const handleLogout = async () =>{
        setLoading(true);
        const data = await logout();
        setUser(null);
        setLoading(false);
    }

    return { user, loading, handleLogin, handleRegister, handleLogout};
}

