import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  LayoutDashboard,
  User,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";

export default function ProfileMenu({ user }) {
  const [open, setOpen] = useState(false);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const ref = useRef();
  const Navigate = useNavigate();

  useEffect(() => {
    if (logoutConfirm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [logoutConfirm]);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>

      {/* PROFILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 bg-white px-2 pr-3 py-1 rounded-full
        transition-all
        "
      >
        <img
          src={user?.photoURL || "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"}
          className="w-9 h-9 rounded-full object-cover"
        />
        <ChevronDown
          className={`
            w-4 h-4 text-gray-700 transition-transform duration-300
            ${open ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      {/* ULTRA PREMIUM DROPDOWN */}
      {open && (
        <div
          className="
            absolute right-0 mt-3 w-64 rounded-2xl backdrop-blur-xl
            border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)]
            bg-white z-50 overflow-hidden 
            transition-all duration-300 animate-fadeSlideIn
          "
        >

          {/* TOP PROFILE SECTION */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/30">
            <div className="relative">
              <img
                src={user?.photoURL || "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"}
                className="w-11 h-11 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">{user?.name || "Sri Krishna"}</p>
              <p className="text-xs text-gray-600">{user?.email || "srikrishna@timeless.co"}</p>
            </div>
          </div>

          {/* ULTRA PREMIUM MENU ITEMS */}
          <div className="flex flex-col text-sm py-2 bg-white">

            {user.role === "admin" ?  <>
                <MenuItem to="/payrolladmindashboard" label="Dashboard" Icon={LayoutDashboard} setOpen={setOpen} />
                {/* <MenuItem to="/myaccount" label="My Account" Icon={User} setOpen={setOpen} /> */}
              </>:
              <>
                <MenuItem to="/dashboard" label="Dashboard" Icon={LayoutDashboard} setOpen={setOpen} />
                <MenuItem to="/myaccount" label="My Account" Icon={User} setOpen={setOpen} />
              </>
            }

            {/* Logout */}
            <button
              onClick={() => setLogoutConfirm(true)}
              className="
                flex items-center gap-3 px-5 py-2 mt-1 text-left w-full text-red-600
                hover:bg-red-50/50 hover:text-red-700 transition-all rounded-lg cursor-pointer 
              "
            >
              <LogOut className="w-4 h-4 opacity-80" />
              Log out
            </button>
          </div>

        </div>
      )}
      {/* 
      {logoutConfirm && (
        <div className="
    fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]
  ">
          <div className="
      bg-white rounded-2xl shadow-2xl p-6 w-80 animate-[fadeIn_0.25s_ease]
    ">
            <h2 className="text-lg font-semibold text-gray-900">Confirm Logout</h2>
            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to log out?
            </p>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setLogoutConfirm(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setLogoutConfirm(false);
                  Navigate("/login");
                }}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )} */}
      {logoutConfirm && (
        <div
          className="
      fixed inset-0 bg-black/40 backdrop-blur-sm 
      flex items-center justify-center 
      min-h-screen
      z-50 
      animate-[fadeIn_0.25s_ease-out]
    "
        >
          <div
            className="
        bg-white rounded-2xl p-6 w-80 shadow-2xl 
        animate-[scaleUp_0.95s_ease-out] 
      "
          >
            <h2 className="text-xl font-semibold text-gray-800 flex  gap-2">
              Confirm Logout
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              Are you sure you want to logout from your account?
            </p>

            <div className="flex justify-end gap-3 mt-6">

              {/* Cancel */}
              <button
                onClick={() => setLogoutConfirm(false)}
                className="
            px-4 py-2 rounded-lg 
            bg-gray-50 hover:bg-gray-300 
            text-gray-900 transition font-medium shadow
          "
              >
                Cancel
              </button>

              {/* Confirm Logout */}
              <button
                onClick={() => {
                  setLogoutConfirm(false);
                  Navigate("/");
                }}
                className="
            px-4 py-2 rounded-lg 
            bg-red-600 text-white 
            transition font-medium shadow
            cursor-pointer
          "
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* REUSABLE ULTRA PREMIUM MENU ITEM */
function MenuItem({ to, label, Icon, border, setOpen }) {
  return (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `
        group flex items-center gap-3 px-5 py-2 relative w-full
        transition-all rounded-lg cursor-pointer 

        ${isActive
          ? "bg-yellow-100 text-yellow-700 font-semibold"
          : "hover:bg-white/60 hover:text-yellow-700"}
        ${border ? "border-b border-white/30 pb-3" : ""}
      `
      }
    >
      {/* Left Accent Bar */}
      <span
        className="
          absolute left-0 top-0 h-full w-1 rounded-r-full 
          bg-linear-to-b from-yellow-400 to-yellow-600 
          scale-y-0 group-hover:scale-y-100 origin-top 
          transition-transform duration-300
        "
      ></span>

      <Icon className="w-4 h-4 opacity-60 group-hover:opacity-90" />
      <span className="transition-transform group-hover:translate-x-1 duration-200">
        {label}
      </span>
    </NavLink>
  );
}

