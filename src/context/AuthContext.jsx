import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../service/apiClient";

const AuthContext = createContext();

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/signup",
  "/forgot-password",
  "/register",
];

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const authCheckedRef = useRef(false);

  const checkAuth = async () => {
    if (authCheckedRef.current) return;

    authCheckedRef.current = true;
    setLoading(true);

    try {
      const response = await apiClient.get("/v1/user/authme");
      const user = response?.data?.result;
      sessionStorage.setItem("role", user?.role);
      const payrollUser = {
        isAuth: true,
        name: user.name,
        email: user.email,
        role: user.role,
      };
      setUser(payrollUser);
      setIsAuth(true);
    } catch (error) {
      setUser(null), setIsAuth(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (PUBLIC_ROUTES.includes(location.pathname)) {
      setLoading(false);
      return;
    }
    checkAuth();
  }, [location.pathname]);

  const login = async (email, password) => {
    const reponse = await apiClient.post("/v1/user/login", {
      email,
      password,
    });
    const user = reponse.data.result;
    sessionStorage.setItem("role", user?.role);
    const payrollUser = {
      isAuth: true,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    setUser(payrollUser);
    setIsAuth(true);
    return {
      isAuth: true,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    return false;
  };

  const logout = () => setIsAuth(false);

  return (
    <AuthContext.Provider
      value={{ isAuth, login, logout, user, loading, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
