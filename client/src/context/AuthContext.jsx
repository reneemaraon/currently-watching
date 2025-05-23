import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiGet, apiPost } from "../api/apiCall";
const BASE_URL = import.meta.env.VITE_API_URL;

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [authToastMessage, setAuthToastMessage] = useState(false);
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
      const { data } = await apiGet(`/auth/showMe`);
      saveUser(data.user);
    } catch (error) {
      removeUser();
    }
    setIsLoading(false);
  };

  const logoutUser = async () => {
    setAuthToastMessage({ message: "You are logging out", type: "info" });
    try {
      await apiPost("/auth/logout");
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async () => {
    localStorage.setItem("lastPage", location.pathname);
    // const fullPath = window.location.origin;

    window.open(`${BASE_URL}/api/v1/auth/twitter/`, "_self");
    // console.log(response);
  };

  const actionRequireLogIn = (onClickButton) => {
    if (user) {
      return onClickButton;
    } else {
      return () => {
        setAuthToastMessage({
          message: "You must login to do this action",
          type: "error",
        });
        loginUser();
      };
    }
  };

  const isOwner = (userId) => {
    return user && user._id == userId;
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
        actionRequireLogIn,
        authToastMessage,
        isOwner,
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
