import { createContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [authUserInfo, setAuthUserInfo] = useLocalStorage('s11d2', {}); //useState({});

    let isLoggedIn = authUserInfo && authUserInfo.token;

    const history = useHistory();

    const login = (formData) => {
        axios
            .post('https://nextgen-project.onrender.com/api/s11d2/login', formData)
            .then((res) => {
                setAuthUserInfo(res.data);
                history.push('/');
            })
            .catch((error) => console.log(error));
    };

    const logout = () => {
        setAuthUserInfo({});
        history.push('/login');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, authUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
