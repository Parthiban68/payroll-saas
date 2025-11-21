import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin@123") {
      const adminUser = {
        isAuth: true,
        name: "Admin User",
        email,
        role: "admin"
      };
      setUser(adminUser);
      setIsAuth(true);
      return {
        isAuth: true,
        name: "Admin User",
        email,
        role: "admin"
      };
    } else if (email === "user@gmail.com" && password === "user@123") {
      const employeeUser = {
        isAuth: true,
        name: "Employee User",
        email,
        role: "employee"
      };
      setUser(employeeUser);
      setIsAuth(true);
      return {
        isAuth: true,
        name: "Employee User",
        email,
        role: "employee"
      };
    }
    return false;
  };

  const logout = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
