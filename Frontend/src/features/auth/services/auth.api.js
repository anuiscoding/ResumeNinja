import axios from 'axios';

// Create an Axios instance with the base URL and credentials
const api = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
    withCredentials: true,//since axios doesn't send cookies by default, we need to set this to true
});

/* User Authentication APIs */
export async function registerUser({username, email, password}) {
    try{
        const response = await api.post('/register', {username, email, password}); 
        return response.data;
        }
    catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
   
}

/* User Login API */
export async function loginUser({email, password}) {    
    try {   
        const response = await api.post('/login', { email, password });
        return response.data;
    }
    catch (error) { 
        console.error('Error logging in user:', error);
        throw error;
    }   
}

/* User Logout API */
export async function logoutUser() {
    try {
        const response = await api.get('/logout',);
        return response.data;
    } catch (error) {
        console.error('Error logging out user:', error);
        throw error;
    }  
} 

/* Get Current User API */
export async function getMe() {
    try {
        const response = await api.get('/get-me');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}