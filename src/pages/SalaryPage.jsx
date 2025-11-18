// SalaryPage.jsx
import React from "react";
import {
    Search,
    Settings,
    Plus,
    ChevronLeft,
    ChevronRight,
    Calendar as CalIcon,
    FileText,
    PieChart,
    User,
    Phone,
    Mail,
    Globe,
    MapPin
} from "lucide-react";

/**
 * Single-file full Salary Dashboard (All-in-one)
 * - TailwindCSS required
 * - lucide-react optional (install: npm i lucide-react)
 *
 * Paste into your project and use <SalaryPage />.
 */

const employees = [
    { id: 1, name: "Harry Bender", role: "Head of Design", avatar: "https://randomuser.me/api/portraits/men/32.jpg", pct: 65 },
    { id: 2, name: "Katy Fuller", role: "Fullstack Engineer", avatar: "https://randomuser.me/api/portraits/women/45.jpg", pct: 30 },
    { id: 3, name: "Jonathan Kelly", role: "Mobile Lead", avatar: "https://randomuser.me/api/portraits/men/12.jpg", pct: 78 },
    { id: 4, name: "Sarah Page", role: "Network Engineer", avatar: "https://randomuser.me/api/portraits/women/72.jpg", pct: 42 },
    { id: 5, name: "Erica Wyatt", role: "Head of Design", avatar: "https://randomuser.me/api/portraits/women/65.jpg", pct: 90 },
    { id: 1, name: "Harry Bender", role: "Head of Design", avatar: "https://randomuser.me/api/portraits/men/32.jpg", pct: 65 },
    { id: 2, name: "Katy Fuller", role: "Fullstack Engineer", avatar: "https://randomuser.me/api/portraits/women/45.jpg", pct: 30 },
];

const events = [
    { id: 1, title: "Vacation", days: [2, 3], start: 1, color: "bg-yellow-200", label: "Vacation" },
    { id: 2, title: "Birthday Mike", start: 11, color: "bg-yellow-300", label: "Birthday" },
    { id: 3, title: "Work day", start: 13, end: 16, color: "bg-gray-100/60", label: "Work day" },
    { id: 4, title: "Sickness", start: 22, end: 24, color: "bg-gray-200/50", label: "Sickness" },
];

export default function SalaryPage() {
    return (
        <div className="w-full bg-linear-to-br from-gray-300 via-gray-200 to-yellow-300 p-6 -mt-5">
            {/* Top spacing (can be replaced with your top nav) */}
            <div className="max-w-[1300px] mx-auto">
                {/* Header row */}
                <div className="flex items-center justify-end mb-2">
                    {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Salary</h2> */}

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md shadow px-3 py-2 rounded-full">
                            <div className="rounded-full bg-white p-2 shadow-sm">
                                <CalIcon className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="rounded-full bg-white p-2 shadow-sm">
                                <PieChart className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="rounded-full bg-white p-2 shadow-sm">
                                <Settings className="w-4 h-4 text-gray-600" />
                            </div>
                        </div>

                        <div className="relative bg-white rounded-full px-3 py-2 shadow flex items-center gap-3">
                            <Search className="w-4 h-4 text-gray-500" />
                            <input
                                className="w-60 md:w-96 bg-transparent outline-none text-sm text-gray-700"
                                placeholder="Search"
                            />
                            <button className="ml-2 rounded-full bg-yellow-100 p-2 hover:bg-yellow-200">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main three-column layout */}
                <div className="grid grid-cols-12 gap-6">
                    {/* LEFT: Employee list */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="bg-white/60 backdrop-blur rounded-3xl p-4 shadow-md border border-white/50">
                            <ul className="space-y-4">
                                {employees.map((emp) => (
                                    <li key={emp.id} className="flex items-center gap-3">
                                        <img src={emp.avatar} alt="" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-gray-800">{emp.name}</div>
                                            <div className="text-xs text-gray-500">{emp.role}</div>

                                            {/* progress bar */}
                                            <div className="mt-2 h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                                                <div className={`h-2 rounded-full ${emp.pct > 60 ? "bg-yellow-400" : "bg-black"}`} style={{ width: `${emp.pct}%` }} />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* pagination / controls */}
                            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <button className="p-1 rounded-full hover:bg-gray-100"><ChevronLeft className="w-4 h-4" /></button>
                                    <button className="p-1 rounded-full hover:bg-gray-100"><ChevronRight className="w-4 h-4" /></button>
                                </div>
                                <div>Page 1 / 8</div>
                            </div>
                        </div>
                    </aside>

                    {/* CENTER: Hours summary + calendar */}
                    <main className="col-span-12 lg:col-span-6">
                        <div className="bg-white/60 backdrop-blur rounded-3xl p-6 shadow-md border border-white/50">
                            {/* summary */}
                            <div className="flex items-start gap-6 mb-4">
                                <div className="flex-1">
                                    <div className="text-lg font-medium text-gray-700">264.00 hrs / $2,647</div>
                                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-500">Work day</span>
                                            <div className="w-48 h-6 bg-yellow-100 rounded-full overflow-hidden">
                                                <div className="h-6 bg-yellow-400" style={{ width: "60%" }} />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-500">Truancy</span>
                                            <div className="w-32 h-6 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-6 bg-black" style={{ width: "25%" }} />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-500">Vacation</span>
                                            <div className="w-32 h-6 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-6 bg-gray-300" style={{ width: "35%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="flex flex-col items-end gap-3">
                                    <div className="bg-white px-3 py-2 rounded-full shadow text-sm">December ▾</div>
                                    <div className="text-sm text-gray-500">Summary</div>
                                </div> */}
                            </div>

                            {/* small calendar legend */}
                            <div className="grid grid-cols-7 gap-2 text-xs text-gray-500 mb-3">
                                <div className="text-center">Mon</div>
                                <div className="text-center">Tue</div>
                                <div className="text-center">Wed</div>
                                <div className="text-center">Thu</div>
                                <div className="text-center">Fri</div>
                                <div className="text-center text-red-500">Sat</div>
                                <div className="text-center">Sun</div>
                            </div>

                            {/* Calendar grid */}
                            <div className="grid grid-cols-7 gap-2">
                                {Array.from({ length: 35 }).map((_, idx) => {
                                    const day = idx + 1;
                                    // find events that start on this day (simple mapping)
                                    const ev = events.find((e) => e.start === day);
                                    const inRange = events.find((e) => e.start < day && e.end >= day);
                                    return (
                                        <div key={idx} className="relative min-h-[68px] bg-white/40 rounded-xl p-2 flex flex-col justify-between">
                                            <div className="flex items-start justify-between">
                                                <div className="text-xs font-medium text-gray-700">{day <= 31 ? day : ""}</div>
                                                {/* small dot or marker */}
                                                {ev && <div className="text-xs text-gray-600 px-2 py-1 rounded-md">{ev.label}</div>}
                                            </div>

                                            {/* event bar */}
                                            {events.map((e) => {
                                                if (e.start === day) {
                                                    // start label
                                                    return (
                                                        <div key={e.id} className={`mt-2 rounded-md px-2 py-1 text-xs ${e.color} text-gray-700`}>
                                                            {e.title}
                                                        </div>
                                                    );
                                                }
                                                if (e.start < day && e.end >= day) {
                                                    return (
                                                        <div key={e.id} className="mt-2 h-3 rounded-md bg-gray-100/60"></div>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </main>

                    {/* RIGHT: Profile details */}
                    {/* RIGHT: Profile details */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="w-full rounded-[36px] shadow-xl border border-yellow-100 
                          bg-linear-to-b from-white via-[#fff9e8] to-[#fff3ce] overflow-hidden">

                            {/* TOP BANNER */}
                            <div className="relative">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5dqesxmhjGFfsNKF3G5K-OOV87ALDemiEg&s"
                                    className="w-full h-18 object-cover"
                                />

                                {/* Profile Image */}
                                <div className="absolute left-1/2 -bottom-10 -translate-x-1/2">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/68.jpg"
                                        className="w-20 h-20 rounded-full border-[5px] border-white shadow-lg object-cover"
                                    />
                                </div>
                            </div>

                            {/* NAME + ROLE */}
                            <div className="mt-9 text-center">
                                <h2 className="text-xl font-semibold text-gray-900">Amélie Laurent</h2>
                                <p className="text-sm text-gray-500">UX Designer</p>
                            </div>

                            {/* BASIC INFORMATION */}
                            <div className="mt-4 px-4">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Basic Information</h3>

                                <div className="space-y-4 text-sm">
                                    <InfoLine icon={<Phone size={18} />} label="Phone number" value="+33 1 70 36 39 50" />
                                    <InfoLine icon={<Mail size={18} />} label="E-Mail" value="amelielaurent88@gmail.com" />
                                </div>
                            </div>

                            {/* DOCUMENTS */}
                            <div className="mt-5 px-7">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Documents</h3>

                                <div className="flex gap-4">
                                    <DocBox
                                        bg="bg-[#e6f0ff]"
                                        iconColor="text-blue-700"
                                        title="Contract"
                                        size="23 mb"
                                    />
                                    <DocBox
                                        bg="bg-[#ffe7d9]"
                                        iconColor="text-orange-600"
                                        title="Resume"
                                        size="76 mb"
                                    />
                                </div>
                            </div>

                            {/* STATISTICS */}
                            <div className="mt-5 px-7 mb-10">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Statistics</h3>

                                <StatItem name="Business trips" value="58 days" percent={70} bar="bg-yellow-400" />
                                <StatItem name="Sickness" value="24 days" percent={30} bar="bg-black" />
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}

function InfoLine({ icon, label, value }) {
    return (
        <div className="flex items-center text-gray-700">
            <div className="flex items-center gap-3 text-gray-600 w-36">
                <span className="w-4 h-4">{icon}</span>
                {label}
            </div>

            {/* dotted line */}
            <div className="flex-1 border-b border-dotted border-gray-300 mx-2" />

            <div className="text-gray-800 whitespace-nowrap">{value}</div>
        </div>
    );
}

function DocBox({ bg, iconColor, title, size }) {
    return (
        <div className={`${bg} rounded-2xl px-4 py-3 w-28 shadow-sm`}>
            <FileText className={`w-6 h-6 mb-2 ${iconColor}`} />
            <div className="text-sm font-medium text-gray-800">{title}</div>
            <div className="text-xs text-gray-500">{size}</div>
        </div>
    );
}

function StatItem({ name, value, percent, bar }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between text-gray-700 text-sm">
                <span>{name}</span>
                <span className="font-medium">{value}</span>
            </div>

            <div className="h-2 w-full bg-gray-200 mt-2 rounded-full overflow-hidden">
                <div
                    className={`h-2 ${bar}`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}
