import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginPage() {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ok = login(email, password);

    if (ok) {
      navigate("/dashboard");
    } else {
      alert("Invalid login details");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#fef9f1] via-[#fff4d9] to-[#fde3b0] p-6 font-inter">

      <div className="max-w-5xl w-full grid lg:grid-cols-2 bg-white/20 backdrop-blur-2xl rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-white/30">

        {/* ================= LEFT LOGIN SECTION ================= */}
        <div className="px-10 py-14 flex flex-col justify-center relative">

          {/* <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-yellow-300 to-orange-200 opacity-30 blur-3xl rounded-full"></div> */}

          <div className="flex items-center gap-2 mb-4">
            <NavLink to={"/"} className="text-lg font-semibold tracking-wider">EPAYROLL</NavLink>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
            Welcome back
          </h2>
          <p className="text-gray-500 text-xs mt-1">
            Login to your account
          </p>

          {/* ========== LOGIN FORM ========== */}
          <form className="mt-7 space-y-4" onSubmit={handleSubmit}>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="
                w-full px-4 py-2.5
                text-sm
                rounded-xl
                bg-white/60 border border-gray-200
                shadow-sm
                focus:ring-2 focus:ring-yellow-400
                outline-none
                placeholder-gray-500
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="
                w-full px-4 py-2.5
                text-sm
                rounded-xl
                bg-white/60 border border-gray-200
                shadow-sm
                focus:ring-2 focus:ring-yellow-400
                outline-none
                placeholder-gray-500
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-xs text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3.5 h-3.5" />
                Remember me
              </label>

              <a href="#" className="hover:underline">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full py-2.5 mt-2
                rounded-xl
                text-sm font-medium text-white
                bg-linear-to-r from-yellow-400 to-orange-400
                shadow-md hover:brightness-110 transition
              "
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-500 text-xs">or login with</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border px-4 py-2 text-xs rounded-xl bg-white/70 shadow hover:bg-white transition">
              <img src="https://img.icons8.com/ios-filled/50/apple-logo.png" className="w-4" />
              Apple
            </button>

            <button className="flex items-center gap-2 border px-4 py-2 text-xs rounded-xl bg-white/70 shadow hover:bg-white transition">
              <img src="https://img.icons8.com/color/48/google-logo.png" className="w-4" />
              Google
            </button>
          </div>

          <div className="mt-8 text-[11px] text-gray-500 flex justify-between">
            <NavLink to={"/register"} className="hover:underline" href="#">
              Don’t have an account? Register
            </NavLink>
            <a className="hover:underline" href="#">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* ================= RIGHT HERO IMAGE ================= */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent"></div>

          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-3 py-1.5 rounded-xl shadow text-xs border border-white/40">
            <p className="font-medium">Meeting at 3PM</p>
            <p className="text-[10px] text-gray-500">With UI Team</p>
          </div>

          <div className="absolute bottom-24 left-6 bg-white/80 backdrop-blur-xl px-3 py-2 rounded-xl shadow text-[11px] border border-white/40">
            <p className="text-gray-600">Sun – Sat</p>
            <div className="flex gap-2 mt-1 text-xs font-medium">
              <span>22</span><span>23</span><span>24</span><span>25</span>
              <span className="text-yellow-500">26</span><span>27</span><span>28</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl px-3 py-2 rounded-xl shadow text-xs border border-white/40">
            <p className="font-medium">Daily Sync</p>
            <p className="text-[10px] text-gray-500">09:00am – 09:40am</p>
          </div>
        </div>
      </div>
    </div>
  );
}
