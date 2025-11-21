// SalaryPage.jsx
import React, { useState } from "react";
import {
    Search,
    Settings,
    Plus,
    ChevronLeft,
    ChevronRight,
    Calendar as CalIcon,
    FileText,
    PieChart,
    Phone,
    Mail,
} from "lucide-react";

/**
 * SalaryPage.jsx
 * - TailwindCSS required
 * - lucide-react optional (npm i lucide-react)
 *
 * All data is local/sample. Replace employeeData with your real data as needed.
 */

const employeeData = [
    {
        id: 1,
        name: "Harry Bender",
        role: "Head of Design",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        pct: 65,
        phone: "+91 98765 43210",
        email: "harry.bender@example.com",
        banner: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
        stats: { business: 40, sickness: 10 },
        hours: "264.00 hrs / $2,647",
        events: [
            { id: "h-vac", title: "Vacation", start: 2, end: 3, color: "bg-yellow-200", label: "Vacation" },
            { id: "h-bday", title: "Birthday", start: 11, color: "bg-yellow-300", label: "Birthday" },
            { id: "h-work", title: "Work day", start: 13, end: 16, color: "bg-gray-100/60", label: "Work day" },
        ],
    },
    {
        id: 2,
        name: "Katy Fuller",
        role: "Fullstack Engineer",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        pct: 30,
        phone: "+91 99112 12345",
        email: "katy.fuller@example.com",
        banner: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1400&auto=format&fit=crop",
        stats: { business: 20, sickness: 5 },
        hours: "180.00 hrs / $1,980",
        events: [
            { id: "k-trip", title: "Client Trip", start: 5, end: 8, color: "bg-blue-100", label: "Trip" },
            { id: "k-bday", title: "Birthday", start: 12, color: "bg-pink-200", label: "Birthday" },
            { id: "k-work", title: "Product Sprint", start: 18, end: 21, color: "bg-gray-100/60", label: "Sprint" },
        ],
    },
    {
        id: 3,
        name: "Jonathan Kelly",
        role: "Mobile Lead",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
        pct: 78,
        phone: "+91 99876 55443",
        email: "jonathan.kelly@example.com",
        banner: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1400&auto=format&fit=crop",
        stats: { business: 50, sickness: 5 },
        hours: "300.00 hrs / $3,540",
        events: [
            { id: "j-sick", title: "Sick leave", start: 20, end: 22, color: "bg-gray-200/60", label: "Sick" },
            { id: "j-rev", title: "Release", start: 9, color: "bg-green-100", label: "Release" },
            { id: "j-work", title: "Onsite", start: 26, end: 28, color: "bg-blue-100", label: "Onsite" },
        ],
    },
    {
        id: 4,
        name: "Sarah Page",
        role: "Network Engineer",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
        pct: 42,
        phone: "+91 91234 77777",
        email: "sarah.page@example.com",
        banner: "https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?q=80&w=1400&auto=format&fit=crop",
        stats: { business: 10, sickness: 2 },
        hours: "210.00 hrs / $2,100",
        events: [
            { id: "s-vac", title: "Vacation", start: 10, end: 15, color: "bg-yellow-200", label: "Vacation" },
            { id: "s-maint", title: "Maintenance", start: 4, color: "bg-gray-200/60", label: "Maintenance" },
        ],
    },
    {
        id: 5,
        name: "Erica Wyatt",
        role: "Head of Design",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        pct: 90,
        phone: "+91 90000 12345",
        email: "erica.wyatt@example.com",
        banner: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=1400&auto=format&fit=crop",
        stats: { business: 58, sickness: 24 },
        hours: "320.00 hrs / $4,120",
        events: [
            { id: "e-work", title: "Conference", start: 1, end: 3, color: "bg-indigo-100", label: "Conf" },
            { id: "e-sick", title: "Sickness", start: 22, end: 24, color: "bg-gray-200/60", label: "Sick" },
        ],
    },
];

export default function SalaryPage() {
    const [selected, setSelected] = useState(employeeData[0]);

    return (
        <div className="w-full min-h-screen bg-linear-to-br from-gray-300 via-gray-200 to-yellow-300 p-6 -mt-5">
            <div className="max-w-[1300px] mx-auto min-h-[88vh]">
                {/* Header row */}
                <div className="flex items-center justify-end mb-2">
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
                        <div className="bg-white/60 backdrop-blur rounded-3xl p-4 shadow-md border border-white/50 max-h-[80vh] overflow-y-auto">
                            <ul className="space-y-4">
                                {employeeData.map((emp) => (
                                    <li
                                        key={emp.id}
                                        onClick={() => setSelected(emp)}
                                        className={`flex items-center gap-3 cursor-pointer p-2 rounded-xl transition-all ${selected.id === emp.id ? "bg-yellow-100 shadow-sm" : "hover:bg-gray-100/50"
                                            }`}
                                    >
                                        <img
                                            src={emp.avatar}
                                            alt={emp.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                        />
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-gray-800">{emp.name}</div>
                                            <div className="text-xs text-gray-500">{emp.role}</div>

                                            {/* progress bar */}
                                            <div className="mt-2 h-2 bg-gray-200 rounded-full w-full overflow-hidden">
                                                <div
                                                    className={`h-2 rounded-full ${emp.pct > 60 ? "bg-yellow-400" : "bg-black"}`}
                                                    style={{ width: `${emp.pct}%` }}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* pagination / controls */}
                            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <button className="p-1 rounded-full hover:bg-gray-100">
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button className="p-1 rounded-full hover:bg-gray-100">
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div>Page 1 / 8</div>
                            </div>
                        </div>
                    </aside>

                    {/* CENTER: Hours summary + calendar */}
                    <main className="col-span-12 lg:col-span-6">
                        <div className="bg-white/60 backdrop-blur rounded-3xl p-6 shadow-md border border-white/50 min-h-[80vh] flex flex-col">
                            {/* summary */}
                            <div className="flex items-start gap-6 mb-4">
                                <div className="flex-1">
                                    <div className="text-lg font-medium text-gray-700">{selected.hours}</div>
                                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">

                                        {/* Work Day */}
                                        <div className="flex flex-col gap-1 w-full sm:w-48">
                                            <span className="text-xs text-gray-500">Work day</span>
                                            <div className="w-full h-5 bg-yellow-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-yellow-400" style={{ width: "60%" }} />
                                            </div>
                                        </div>

                                        {/* Truancy */}
                                        <div className="flex flex-col gap-1 w-full sm:w-40">
                                            <span className="text-xs text-gray-500">Truancy</span>
                                            <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-black" style={{ width: "25%" }} />
                                            </div>
                                        </div>

                                        {/* Vacation */}
                                        <div className="flex flex-col gap-1 w-full sm:w-40">
                                            <span className="text-xs text-gray-500">Vacation</span>
                                            <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-gray-400" style={{ width: "35%" }} />
                                            </div>
                                        </div>

                                    </div>

                                </div>
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
                            <div className="grid grid-cols-7 gap-2 flex-1 overflow-auto">
                                {Array.from({ length: 35 }).map((_, idx) => {
                                    const day = idx + 1;
                                    const events = selected.events || [];

                                    // events that start on this day
                                    const starts = events.filter((e) => e.start === day);
                                    // events that continue through this day
                                    const inRange = events.filter((e) => e.start < day && e.end >= day);

                                    return (
                                        <div
                                            key={idx}
                                            className="relative min-h-[68px] bg-white/40 rounded-xl p-2 flex flex-col justify-between"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="text-xs font-medium text-gray-700">{day <= 31 ? day : ""}</div>
                                                {starts.length > 0 && (
                                                    <div className="text-xs text-gray-600 px-2 py-1 rounded-md">{starts[0].label}</div>
                                                )}
                                            </div>

                                            {/* event bar */}
                                            <div className="mt-2 space-y-1">
                                                {starts.map((e) => (
                                                    <div key={e.id} className={`rounded-md px-2 py-1 text-xs ${e.color} text-gray-700`}>
                                                        {e.title}
                                                    </div>
                                                ))}

                                                {inRange.map((e) => (
                                                    <div key={e.id} className="h-3 rounded-md bg-gray-100/60" />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </main>

                    {/* RIGHT: Profile details */}
                    <aside className="col-span-12 lg:col-span-3">
                        <div className="w-full rounded-[36px] shadow-xl border border-yellow-100 bg-linear-to-b from-white via-[#fff9e8] to-[#fff3ce] overflow-hidden min-h-[80vh]">
                            {/* TOP BANNER */}
                            <div className="relative">
                                <img src={selected.banner} alt="banner" className="w-full h-18 object-cover" />

                                {/* Profile Image */}
                                <div className="absolute left-1/2 -bottom-10 -translate-x-1/2">
                                    <img
                                        src={selected.avatar}
                                        alt={selected.name}
                                        className="w-20 h-20 rounded-full border-[5px] border-white shadow-lg object-cover"
                                    />
                                </div>
                            </div>

                            {/* NAME + ROLE */}
                            <div className="mt-9 text-center">
                                <h2 className="text-xl font-semibold text-gray-900">{selected.name}</h2>
                                <p className="text-sm text-gray-500">{selected.role}</p>
                            </div>

                            {/* BASIC INFORMATION */}
                            <div className="mt-4 px-4">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Basic Information</h3>

                                <div className="space-y-4 text-sm">
                                    <InfoLine icon={<Phone size={18} />} label="Phone number" value={selected.phone} />
                                    <InfoLine icon={<Mail size={18} />} label="E-Mail" value={selected.email} />
                                </div>
                            </div>

                            {/* DOCUMENTS (STATIC) */}
                            <div className="mt-5 px-7">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Documents</h3>

                                <div className="flex gap-4">
                                    <DocBox bg="bg-[#e6f0ff]" iconColor="text-blue-700" title="Contract" size="23 mb" />
                                    <DocBox bg="bg-[#ffe7d9]" iconColor="text-orange-600" title="Resume" size="76 mb" />
                                </div>
                            </div>

                            {/* STATISTICS */}
                            <div className="mt-5 px-7 mb-10">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Statistics</h3>

                                <StatItem name="Business trips" value={`${selected.stats.business} days`} percent={selected.stats.business} bar="bg-yellow-400" />
                                <StatItem name="Sickness" value={`${selected.stats.sickness} days`} percent={selected.stats.sickness} bar="bg-black" />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

/* Small components */
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
                <div className={`h-2 ${bar}`} style={{ width: `${Math.min(percent, 100)}%` }} />
            </div>
        </div>
    );
}
