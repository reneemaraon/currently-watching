import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const saveUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/api/v1/auth/showMe`);
      saveUser(data.user);
    } catch (error) {
      removeUser();
    }
    setIsLoading(false);
  };

  const logoutUser = async () => {
    try {
      await axios.post('/api/v1/auth/logout');
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = () => {
    localStorage.setItem('lastPage', location.pathname);
    window.open('http://127.0.0.1:3000/api/v1/auth/twitter/', '_self');
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        saveUser,
        user,
        logoutUser,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
