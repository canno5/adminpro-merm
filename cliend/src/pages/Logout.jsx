import { useEffect } from "react"
import {NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout = () => {
const navigate = useNavigate();
    const {UserLogout} = useAuth();
    useEffect(() => {
        UserLogout();
        navigate('/');
    }, [UserLogout]);

    return <NavLink to='/login' />


}