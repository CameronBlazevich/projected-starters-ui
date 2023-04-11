import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.Token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        if (userToken?.Token) {
            sessionStorage.setItem('token', JSON.stringify(userToken));
            setToken(userToken?.Token)
        } else {
            sessionStorage.removeItem("token");
            setToken(null)
        }
    };

    return {
        setToken: saveToken,
        token
    }
}