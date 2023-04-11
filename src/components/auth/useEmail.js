import { useState } from 'react';

export default function useEmail() {
    const getEmail = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.Email
    };

    const [email, setEmail] = useState(getEmail());

    return {
        setEmail,
        email
    }
}