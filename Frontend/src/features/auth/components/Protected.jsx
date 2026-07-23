import {useAuth} from "../hooks/useAuth"
import React from 'react'
import { Navigate, useNavigate } from "react-router"

const Protected = ({children}) => {
    const navigate = useNavigate()

    const {loading, user } = useAuth()

    if(loading){
        return (<main><h1>Loading......</h1></main>)
    }

    if(!user){
        // navigate("/login")
        return <Navigate to="/login" replace />;
    }

    return children
}

export default Protected