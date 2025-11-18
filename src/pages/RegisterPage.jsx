import React from 'react'
import { NavLink } from 'react-router-dom';

const RegesterPage = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#fef9f1] via-[#fff4d9] to-[#fde3b0] p-6 font-inter">

            <div className="max-w-5xl w-full grid lg:grid-cols-2 bg-white/20 backdrop-blur-2xl rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-white/30">

                {/* ================= LEFT SECTION ================= */}
                <div className="px-10 py-12 flex flex-col justify-center relative">

                    {/* <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-yellow-300 to-orange-200 opacity-30 blur-3xl rounded-full"></div> */}

                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-4">
                        <NavLink to={"/"} className="text-lg font-semibold tracking-wider">EPAYROLL</NavLink>
                    </div>

                    {/* Heading small */}
                    <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
                        Create your account
                    </h2>
                    <p className="text-gray-500 text-xs mt-1">
                        Sign up and enjoy 30 days free.
                    </p>

                    {/* FORM — small inputs */}
                    <form className="mt-6 space-y-4">

                        {["Fullname", "Email", "Password"].map((text, i) => (
                            <div key={i} className="relative">
                                <input
                                    type={text === "Password" ? "password" : "text"}
                                    placeholder={text}
                                    className="
                    w-full px-4 py-2.5
                    text-sm
                    rounded-xl
                    bg-white/60 border border-gray-200
                    shadow-sm
                    outline-none
                    focus:ring-2 focus:ring-yellow-400
                    placeholder-gray-500
                    transition
                  "
                                />
                                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-white/20 to-transparent pointer-events-none opacity-30"></div>
                            </div>
                        ))}

                        {/* Small gradient button */}
                        <button
                            className="
                w-full py-2.5 mt-2
                rounded-xl
                text-sm font-medium text-white
                bg-linear-to-r from-yellow-400 to-orange-400
                shadow-md hover:brightness-110 transition
              "
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="h-px bg-gray-300 flex-1"></div>
                        <span className="text-gray-500 text-xs">or continue with</span>
                        <div className="h-px bg-gray-300 flex-1"></div>
                    </div>

                    {/* Social Buttons small */}
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

                    {/* Bottom Links SMALL */}
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mt-8">
                        <NavLink to={"/login"} className="hover:underline">Already have an account? Sign in</NavLink>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                    </div>

                </div>

                {/* ================= RIGHT SECTION ================= */}
                <div className="relative">

                    <img
                        src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent"></div>

                    {/* Floating Task */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl px-3 py-1.5 rounded-xl shadow text-xs border border-white/40">
                        <p className="font-medium">Team Review</p>
                        <p className="text-[10px] text-gray-600">03:00pm – 04:00pm</p>
                    </div>

                    {/* Calendar */}
                    <div className="absolute bottom-24 left-6 bg-white/80 backdrop-blur-xl px-3 py-2 rounded-xl shadow text-[11px] border border-white/40 mb-5">
                        <p className="text-gray-600">Sun – Sat</p>
                        <div className="flex gap-2 mt-1 text-xs font-medium">
                            <span>22</span><span>23</span><span>24</span><span>25</span>
                            <span className="text-yellow-500">26</span><span>27</span><span>28</span>
                        </div>
                    </div>

                    {/* Meeting Card */}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl px-3 py-2 rounded-xl shadow text-xs border border-white/40">
                        <p className="font-medium">Daily Meeting</p>
                        <p className="text-[10px] text-gray-500">09:00am – 09:40am</p>

                        <div className="flex mt-2">
                            {[
                                "https://randomuser.me/api/portraits/women/44.jpg",
                                "https://randomuser.me/api/portraits/men/22.jpg",
                                "https://randomuser.me/api/portraits/women/65.jpg",
                            ].map((url, i) => (
                                <img
                                    key={i}
                                    src={url}
                                    className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0"
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default RegesterPage