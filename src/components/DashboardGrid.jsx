import React, { useEffect, useState } from "react";

// Inline SVG Icons
function Icon({ name, className = "" }) {
  const icons = {
    clock: (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
        <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
      </svg>
    ),
    dot: (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default function DashboardGrid() {
  const [timerPercent] = useState(60);

  return (
    <div className="w-full p-4">

      {/* MAIN GRID WRAPPER */}
      <div
        className="
          grid gap-4
          bg-linear-to-r from-[#ececec] via-[#f7f3e7] to-[#fff5d5]
          p-4 rounded-2xl

          grid-cols-1      /* mobile */
          md:grid-cols-6   /* tablet */
          xl:grid-cols-9   /* desktop */
        "
      >

        {/* ------------------------------------------------ */}
        {/* 1 — PROFILE CARD                                */}
        {/* ------------------------------------------------ */}
        <div
          className="
            rounded-3xl shadow-lg overflow-hidden relative

            h-[260px]         /* mobile */
            md:h-[340px]      /* tablet */
            md:col-span-3
            xl:h-full         /* desktop */
            xl:col-span-2 
            xl:row-span-5
          "
        >
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between">
            <div>
              <h3 className="text-white text-lg font-semibold">Lora Piterson</h3>
              <p className="text-white/80 text-xs">UX/UI Designer</p>
            </div>

            <div className="px-3 py-1 rounded-full backdrop-blur-md bg-white/30 border border-white/30 text-white text-sm font-medium">
              $1,200
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 2 — PROGRESS CARD                               */}
        {/* ------------------------------------------------ */}
        <div
          className="
            rounded-2xl shadow bg-white p-4 flex flex-col

            h-[260px]       
            md:h-[320px]
            md:col-span-3

            xl:h-full
            xl:col-start-3 
            xl:col-span-2 
            xl:row-span-5
          "
        >
          <div className="flex justify-between">
            <div>
              <h4 className="text-base font-medium">Progress</h4>
              <div className="text-3xl font-light mt-1">6.1h</div>
              <div className="text-xs text-gray-500">Work time this week</div>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-white shadow rounded-full">
              <Icon name="clock" className="w-4 h-4" />
            </div>
          </div>

          {/* Bars */}
          <div className="grid grid-cols-7 gap-2 mt-4 items-end h-full">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => {
              const H = [100, 200, 160, 128, 120, 100, 128][i];
              return (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-2 rounded-full ${i === 5 ? "bg-yellow-400" : "bg-black"}`}
                    style={{ height: `${H / 2}px` }} /* responsive */
                  />
                  <span className="text-[10px] mt-1 text-gray-400">{d}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 3 — TIME TRACKER                                */}
        {/* ------------------------------------------------ */}
        <div
          className="
            rounded-3xl shadow bg-linear-to-br from-white to-[#f9f6e7] 
            p-5 relative

            h-[300px]
            md:h-[360px]
            md:col-span-3

            xl:h-full
            xl:col-start-5 
            xl:col-span-2 
            xl:row-span-5
          "
        >
          <button className="absolute top-3 right-3 w-7 h-7 bg-white shadow rounded-full flex items-center justify-center">
            →
          </button>

          <h4 className="text-lg font-medium">Time Tracker</h4>

          <div className="mt-6 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">

              <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-40">
                {[...Array(60)].map((_, i) => (
                  <line
                    key={i}
                    x1="80"
                    y1="4"
                    x2="80"
                    y2="10"
                    stroke="#000"
                    strokeWidth="1"
                    transform={`rotate(${i * 6}, 80, 80)`}
                  />
                ))}
              </svg>

              <svg className="w-full h-full -rotate-90">
                <circle cx="80" cy="80" r="50" stroke="#eee" strokeWidth="8" fill="none" />
                <circle
                  cx="80"
                  cy="80"
                  r="50"
                  stroke="url(#grad1)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 50}
                  strokeDashoffset={2 * Math.PI * 50 * 0.4}
                />
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#FFD166" />
                    <stop offset="100%" stopColor="#F4C95D" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold">02:35</span>
                <span className="text-sm text-gray-500 -mt-1">Work Time</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white shadow rounded-full">▶</button>
              <button className="w-10 h-10 bg-white shadow rounded-full">⏸</button>
            </div>
            <button className="w-10 h-10 bg-black text-white rounded-full">⏱</button>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 4 — SIDEBAR PANEL                                */}
        {/* ------------------------------------------------ */}
        <div
          className="
            rounded-3xl shadow-xl bg-linear-to-b from-white to-yellow-50 
            p-4 flex flex-col

            h-[340px]
            md:h-auto
            md:col-span-6

            xl:h-full
            xl:col-start-7 
            xl:col-span-3 
            xl:row-span-9
          "
        >
          <div className="flex justify-between text-sm">
            <span className="font-medium">Onboarding</span>
            <span className="text-lg font-light">18%</span>
          </div>

          <div className="flex gap-2 mt-3 text-xs">
            <span className="bg-yellow-300 px-6 py-1 rounded-full">Task</span>
            <span className="bg-black text-white px-3 py-1 rounded-full">25%</span>
            <span className="bg-gray-300 px-3 py-1 rounded-full">0%</span>
          </div>

          <div className="bg-black text-white rounded-2xl mt-4 p-3 flex-1 overflow-y-auto text-xs">
            <div className="flex justify-between">
              <span className="text-sm">Onboarding Task</span>
              <span>2/8</span>
            </div>

            <ul className="mt-3 space-y-3">
              {[
                { title: "Interview", time: "Sep 13, 08:30", done: true },
                { title: "Team Meeting", time: "Sep 13, 10:30", done: true },
                { title: "Project Update", time: "Sep 13, 13:00", done: false },
                { title: "Discuss Q3 Goals", time: "Sep 13, 14:45", done: false },
                { title: "HR Policy Review", time: "Sep 13, 16:30", done: false },
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon name="dot" className="w-3 h-3 text-gray-200" />
                  </div>
                  <div className="flex-1">
                    <div className={`${item.done ? "line-through text-gray-400 text-base" : "text-base"}`}>
                      {item.title}
                    </div>
                    <div className="text-[10px] text-gray-300">{item.time}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full ${item.done ? "bg-yellow-300" : "bg-white/10"}`}></div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 5 — DEVICES CARD                                */}
        {/* ------------------------------------------------ */}
        <div
          className="
            rounded-2xl shadow bg-white p-4 text-xs

            h-[220px]
            md:h-[260px]
            md:col-span-3
            
            xl:h-full 
            xl:col-span-2 
            xl:row-start-6 
            xl:row-span-4
          "
        >
          <h4 className="font-medium">Pension Contributions</h4>

          <div className="mt-3 pt-3">
            <h5 className="font-medium">Devices</h5>
            <div className="flex items-center gap-3 mt-2">
              <img src="https://www.bhphotovideo.com/images/fb/apple_z0xa_mwtl231_13_macbook_air_gold_i5_8gb_1tb_1553867.jpg" className="rounded w-12" />
              <div>
                <div className="font-medium">MacBook Air</div>
                <div className="text-[10px] text-gray-500">Version M1</div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* 6 — MINI CALENDAR                               */}
        {/* ------------------------------------------------ */}
        <div
          className="
            rounded-2xl shadow bg-white p-4

            h-[260px]
            md:h-[300px]
            md:col-span-3
            
            xl:h-full 
            xl:col-start-3 
            xl:col-span-4 
            xl:row-start-6 
            xl:row-span-4
          "
        >
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">August</span>
            <span className="font-medium text-sm">September 2024</span>
            <span className="text-gray-500">October</span>
          </div>

          <div className="grid grid-cols-6 mt-4 gap-3">
            <div className="space-y-3 text-[10px] text-gray-500">
              <div>8:00</div>
              <div>9:00</div>
              <div>10:00</div>
              <div>11:00</div>
            </div>

            <div className="col-span-5 bg-gray-50 rounded-xl p-3 relative">
              <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-l border-dotted border-gray-300"></div>
                ))}
              </div>

              <div className="relative z-10">
                <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-[10px]">
                  Weekly Sync
                </div>
                <div className="inline-block mt-4 bg-white px-3 py-1 rounded-full shadow text-[10px]">
                  Onboarding
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
