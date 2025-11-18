import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin@123") {
      setIsAuth(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
