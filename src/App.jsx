import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PeopleTab from "./pages/People";
import TopNav from "./components/TopNav";
import LoginPage from "./pages/LoginPage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import RegesterPage from "./pages/RegisterPage";
import PricingPage from "./pages/PricingPage";
import SalaryPage from "./pages/SalaryPage";
import AttendancePage from "./pages/AttendancePage";
import LandingPage from "./pages/LandingPage";

// =============================
// PROTECTED ROUTE COMPONENT
// =============================
function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
}

// =============================
// HIDE TOPNAV ON LOGIN PAGE
// =============================
function ConditionalTopNav() {
  const location = useLocation();
  const hideNav = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/pricing";

  return hideNav ? null : <TopNav />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ConditionalTopNav />

        <div className="w-full flex flex-col">
          <div className="flex-1 w-full">
            <Routes>
              {/* Login Page */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegesterPage />} />
              {/* Dashboard (Protected) */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              {/* People (Protected) */}
              <Route
                path="/people"
                element={
                  <ProtectedRoute>
                    <PeopleTab />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/salary"
                element={
                  <ProtectedRoute>
                    <SalaryPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/attendace"
                element={
                  <ProtectedRoute>
                    <AttendancePage />
                  </ProtectedRoute>
                }
              />

              {/* Redirect unknown routes */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
