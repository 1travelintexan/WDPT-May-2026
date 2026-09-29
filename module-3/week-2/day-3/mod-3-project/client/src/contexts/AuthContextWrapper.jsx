import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const nav = useNavigate();

  function logoutUser() {
    localStorage.removeItem("authToken");
    nav("/login");
  }
  useEffect(() => {
    async function authenticateUser() {
      const tokenInStorage = localStorage.getItem("authToken");
      if (tokenInStorage) {
        try {
          const { data } = await axios.get(
            "http://localhost:5005/auth/verify",
            {
              headers: {
                authorization: `Bearer ${tokenInStorage}`,
              },
            },
          );
          console.log("Token is valid in Context", data);
          setCurrentUser(data.payload);
          setIsLoading(false);
          setIsLoggedIn(true);
        } catch (error) {
          console.log("there is a problem with token validation", error);
          setCurrentUser(null);
          setIsLoading(false);
          setIsLoggedIn(false);
        }
      } else {
        console.log("there is no token in local storage");
        setCurrentUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    }
    authenticateUser();
  }, [nav]);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        isLoggedIn,
        logoutUser,
        setCurrentUser,
        setIsLoading,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
