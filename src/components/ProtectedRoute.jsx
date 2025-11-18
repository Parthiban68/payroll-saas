import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();

  // If NOT logged in → send to Login
  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
}
