import { useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

    const getUserInfo = () => {
        const userInfo = sessionStorage.getItem('user-info');
        const parsed = JSON.parse(userInfo);
        return parsed;
    }

    const [user, setUser] = useState(getUserInfo());

    useEffect(() => {
        const temp = JSON.stringify(user);
        sessionStorage.setItem('user-info', temp)
    }, [user])


  const login = (user) => {
    setUser(user);
  }

  const logout = () => setUser(null);

  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);