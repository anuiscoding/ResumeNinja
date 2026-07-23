import {useContext, useEffect} from "react";
import {AuthContext} from "../auth.context.jsx";
import {loginUser, logoutUser, registerUser, getMe} from "../services/auth.api.js";

//This custom hook proviced the available context and authentication functions
export const useAuth = () => {
    const context = useContext(AuthContext);
    const {user, setUser, loading, setLoading} = context;

    const handleLogin = async  ({email, password}) => {
        setLoading(true);
        try{
            const data = await loginUser({email, password});
            setUser(data.user);
        }
        catch(err){        }
        finally{
            setLoading(false);
        }
        
    };

    const handleRegister = async ({username, email, password}) =>{
        setLoading(true);
        try{
            const data = await registerUser({username, email, password})
            setUser(data.user)
        }catch(err){}
        finally{
            setLoading(false)
        }
        
    }

    const handleLogout = async () =>{
        setLoading(true);
        try{
            const data = await logout();
            setUser(null);
        }
        catch(err){}
        finally{
            setLoading(false);
        }
    }
    useEffect(() => {
    const getAndSetUser = async () => {
        try {
            const data = await getMe();
            setUser(data.user);
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    getAndSetUser();
    }, []);

    return { user, loading, handleLogin, handleRegister, handleLogout};
}

