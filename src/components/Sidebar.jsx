import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    FileText,
    ClipboardList,
    ShoppingBag,
    FolderKanban,
    Box,
    Settings,
    ChevronDown,
} from "lucide-react";

const standardMenu = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/" },
    { name: "Employees", icon: <Users size={18} />, path: "/employees" },
    { name: "Payroll", icon: <ClipboardList size={18} />, path: "/payroll" },
    { name: "Reports", icon: <FileText size={18} />, path: "/reports" },
    { name: "Documents", icon: <FolderKanban size={18} />, path: "/documents" },
    { name: "Benefits", icon: <ShoppingBag size={18} />, path: "/benefits" },
]


const menu = [
    {
        label: "Master",
        items: [
            { name: "Company Setup", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
            { name: "Tax setup", icon: <Users size={18} />, path: "/employees" },
            { name: "ESI & PF", icon: <ClipboardList size={18} />, path: "/payroll" },
            { name: "Currency Setup", icon: <FileText size={18} />, path: "/reports" },
            { name: "Theme Setup", icon: <FolderKanban size={18} />, path: "/documents" },
            { name: "Roles Setup", icon: <ShoppingBag size={18} />, path: "/benefits" },
            { name: "ConfigureSetup", icon: <ShoppingBag size={18} />, path: "/benefits" },
            { name: "WorkDays Monthly", icon: <ShoppingBag size={18} />, path: "/benefits" },
        ],
    },
    {
        label: "Other",
        items: [
            { name: "Inventory", icon: <Box size={18} />, path: "/inventory" },
            { name: "Tasks", icon: <ClipboardList size={18} />, path: "/tasks" },
            { name: "Invoices", icon: <FileText size={18} />, path: "/invoices" },
        ],
    },
];

export default function Sidebar() {
    const { pathname } = useLocation();
    const [active, setActive] = useState("Dashboard");
    const [open, setOpen] = useState({ MAIN: true, OTHER: true });

    return (
        <aside className="h-screen w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col">
            {/* Logo */}
            <div className="flex items-center font-bold tracking-wide border-b border-gray-300">
                <svg className="w-15 h-15 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"></path></svg>
                <span className="text-xl font-bold text-gray-800 ">E-Payroll</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">

            <ul className="space-y-1">
            {standardMenu.map((item) => (
                <li key={item.name}>
                    <Link
                        to={item.path}
                        className={`
                            flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm transition
                            ${pathname === item.path
                                ? "bg-blue-100 text-blue-600 font-medium"
                                : "text-gray-900 hover:bg-gray-100"}
                        `}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>

                {menu.map((section) => (
                    <div key={section.label} className="mb-6">
                        {/* Section Header */}
                        <button
                            onClick={() =>
                                setOpen((prev) => ({ ...prev, [section.label]: !prev[section.label] }))
                            }
                            className="flex items-center justify-between w-full text-gray-800 text-xs font-semibold mb-2"
                        >
                            {section.label}
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${open[section.label] ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Menu Items */}
                        {open[section.label] && (
                            <ul className="space-y-1">
                                {section.items.map((item) => (
                                    <li
                                        key={item.name}
                                        onClick={() => setActive(item.name)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm transition
                      ${active === item.name
                                                ? "bg-blue-100 text-blue-600 font-medium"
                                                : "text-gray-900 hover:bg-gray-100"
                                            }
                    `}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>

            {/* Footer User Box */}
            <div className="p-4 bg-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div>
                        <p className="text-sm font-medium">Jane Doe</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
