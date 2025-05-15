import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [serviceData, setServiceData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = token;
    const API = import.meta.env.VITE_APP_URI_API;    
    const storageTokenInLS = (serverToken) => {
        setToken(serverToken); 

        return localStorage.setItem("token", serverToken);
    }
    let isLoggedIn = token;
    const UserLogout = () => {
        setToken("");
        return localStorage.removeItem("token");
    };
    const userAuthencation = async () => {
        try {
            const respone = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: token
                },
            });
            if (respone.ok) {
                const data = await respone.json();
                setUser(data.userData);
                setIsLoading(false);

            } else {
                console.log("Error fecthing data");
                setIsLoading(false);
            }
        } catch (err) {
            console.log("The Err fetching user data " + err);
        }
    }
    const getDataService = async () => {
        try {
            const res = await fetch(`${API}/api/data/service`);
            if (res.ok) {
                const data = await res.json();
                setServiceData(data.msg);
            }

        } catch (err) {
            console.log("The Service FrontEnd " + err);
        }
    }
    useEffect(() => {
        userAuthencation();
        getDataService();
    }, []);
    return (
        <AuthContext.Provider value={{ isLoggedIn, storageTokenInLS, UserLogout, user, serviceData, authorizationToken, isLoading, API }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth use outside of the Provider");
    }
    return authContextValue;
}