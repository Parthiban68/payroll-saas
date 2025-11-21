import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Settings, Bell, User, Menu, X } from "lucide-react";
import NotificationPanel from "./NotificationPanel";
import { useAuth } from "../context/AuthContext";
import ProfileMenu from "./ProfileMenu";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    setUser(role);
  }, []);
  
  const menu = user === "admin" ? [
    { name: "Dashboard", path: "/payrolladmindashboard" },
    { name: "People", path: "/people" },
    { name: "Salary", path: "/salary" },
  ] : [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Attendace", path: "/attendace" },
    { name: "Payslip", path: "/payslip" },
  ];

  // Disable scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* =======================
          TOP NAVBAR
      ======================= */}
      <nav className="w-full px-4 flex items-center justify-between shadow-sm bg-white/70 backdrop-blur-xl sticky top-0 z-40">

        {/* Logo */}
        <NavLink
          to={user === "admin" ? "/payrolladmindashboard" : "/dashboard"}
          className="text-xl md:text-2xl font-bold px-4 py-1 rounded-full text-black"
        >
          SalaryHive
        </NavLink>


        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-5 bg-white/60 px-4 py-2 rounded-full shadow-sm">
          <ul className="flex items-center gap-3">
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `px-5 py-1 rounded-full text-sm font-medium transition-all cursor-pointer
                  ${isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-3 ml-4">

            {/* Settings */}
            <button className="w-10 h-10 rounded-full bg-yellow-100 shadow flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </button>

            {/* Notification (DESKTOP) */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="w-10 h-10 rounded-full bg-yellow-100 shadow flex items-center justify-center relative"
              >
                <Bell className="w-5 h-5" />
                {/* Red Dot */}
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* PANEL RIGHT OF BELL */}
              {notificationOpen && (
                <NotificationPanel
                  open={notificationOpen}
                  setOpen={setNotificationOpen}
                  position="desktop"
                />
              )}

            </div>

            {/* User */}
            <button className="w">
              <ProfileMenu user={user} />
            </button>
          </div>
        </div>

        {/* MOBILE burger */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden bg-white p-2 rounded-full shadow"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>


      {/* =======================
          MOBILE OVERLAY + DRAWER
      ======================= */}

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-2xl z-40 transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-y-0 right-0 w-56 backdrop-blur-xl shadow-xl z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/40">
          <div className="text-xl font-semibold">Menu</div>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Menu Items */}
        <ul className="flex flex-col mt-4 gap-2 px-4">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full px-4 py-3 rounded-xl font-medium text-sm transition
                ${isActive ? "bg-black text-white" : "bg-white text-black hover:bg-yellow-200"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>

        {/* Drawer Bottom Icons */}
        <div className="flex items-center gap-3 px-4 mt-6 pb-5">

          <button className="w-12 h-12 rounded-xl bg-yellow-100 shadow flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </button>

          {/* Mobile Notification Button */}
          <div className="relative">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="w-12 h-12 rounded-xl bg-yellow-100 shadow flex items-center justify-center relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Panel for MOBILE inside drawer */}
            {open && notificationOpen && (
              <NotificationPanel
                open={notificationOpen}
                setOpen={setNotificationOpen}
                position="mobile"
              />
            )}

          </div>

          <button className="w-12 h-12 rounded-xl bg-gray-100 shadow flex items-center justify-center">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}
