import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

export default function PeopleTab() {
    const people = [
        {
            name: "Katy Fuller",
            job: "Fullstack Engineer",
            dept: "Engineering",
            site: "Miami",
            country: "$1,500",
            start: "Oct 18, 2023",
            cycle: "Hired",
            status: "Absent",
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            highlight: true,
        },
        ...[
            ["Harry Bender", "Head of Design", "Product", "Rome", "$1,350", "Mar 13, 2023", "Hired", "Invited"],
            ["Jonathan Kelly", "Mobile Lead", "Product", "Kyiv", "$2,600", "Nov 4, 2023", "Employed", "Invited"],
            ["Billie Wright", "Sales Manager", "Operations", "Ottawa", "$900", "Sep 4, 2021", "Employed", "Invited"],
            ["Sarah Page", "Network Engineer", "Tech", "Sao Paulo", "$1,000", "Feb 21, 2023", "Hired", "Invited"],
            ["Erica Wyatt", "Head of Design", "Product", "London", "$3,100", "Aug 2, 2024", "Employed", "Invited"],
        ].map((x) => ({
            name: x[0],
            job: x[1],
            dept: x[2],
            site: x[3],
            country: x[4],
            start: x[5],
            cycle: x[6],
            status: x[7],
            img: "https://randomuser.me/api/portraits/men/3.jpg",
            highlight: false,
        })),
    ];

    return (
        <div className="w-full p-3 font-inter bg-linear-to-br from-yellow-50 to-yellow-200">

            <div className="w-full bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg p-5 border border-white/40">

                {/* TOP BAR */}
                <div className="mt-1 flex flex-wrap items-center gap-4">

                    {/* Pills */}
                    <div className="flex items-center gap-2">
                        <div className="px-4 py-1.5 text-xs font-medium rounded-full bg-black text-white">25%</div>
                        <div className="px-4 py-1.5 text-xs font-medium rounded-full bg-yellow-300">51%</div>
                    </div>

                    {/* Project Time */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600">Project time</span>
                        <div className="px-3 py-[5px] rounded-full border text-xs bg-white shadow-sm">10%</div>
                        <div className="px-3 py-[5px] rounded-full border text-xs bg-white shadow-sm">1.5k</div>
                    </div>

                    {/* Right Buttons */}
                    <div className="ml-auto flex flex-wrap items-center gap-2">
                        {["Directory", "OrgChart", "Insights"].map((btn) => (
                            <button
                                key={btn}
                                className="px-3 py-1.5 bg-white rounded-full border shadow text-xs font-medium hover:bg-gray-100"
                            >
                                {btn}
                            </button>
                        ))}

                        <button className="px-3 py-1.5 bg-white rounded-full border shadow text-xs font-medium flex items-center gap-1.5 hover:bg-gray-100">
                            <HiOutlinePlus className="text-sm" /> Add
                        </button>

                        <button className="px-3 py-1.5 bg-white rounded-full border shadow text-xs font-medium hover:bg-gray-100">
                            Export
                        </button>
                    </div>
                </div>

                {/* TABLE AREA */}
                <div className="mt-6 h-full bg-white rounded-3xl p-4 shadow">

                    {/* Desktop Header */}
                    <div className="hidden md:grid grid-cols-10 px-3 py-2 text-xs font-semibold text-gray-600 border-b border-gray-200">
                        <div className="col-span-2">Name</div>
                        <div>Job title</div>
                        <div>Department</div>
                        <div>Site</div>
                        <div>Country</div>
                        <div>Start date</div>
                        <div>Lifecycle</div>
                        <div>Status</div>
                    </div>

                    {/* Content */}
                    <div className="max-h-[400px] pr-1 mt-2">

                        {people.map((p, i) => (
                            <div
                                key={i}
                                className={`grid md:grid-cols-10 grid-cols-1 gap-y-2 items-center px-3 py-3 rounded-2xl transition mb-2 
                                ${p.highlight ? "bg-yellow-200" : "hover:bg-gray-100"}`}
                            >
                                {/* Name */}
                                <div className="col-span-2 flex items-center gap-3">
                                    <img src={p.img} className="w-9 h-9 rounded-full" />
                                    <div className="text-sm font-medium">{p.name}</div>
                                </div>

                                {/* Mobile stacked */}
                                <div className="md:hidden text-xs text-gray-500 -mt-1">{p.job}</div>

                                {/* Desktop-only fields */}
                                <div className="hidden md:block text-sm">{p.job}</div>
                                <div className="hidden md:block text-sm">{p.dept}</div>
                                <div className="hidden md:block text-sm">{p.site}</div>
                                <div className="hidden md:block text-sm">{p.country}</div>
                                <div className="hidden md:block text-sm">{p.start}</div>
                                <div className="hidden md:block text-sm">{p.cycle}</div>

                                {/* Status */}
                                <div className="md:flex justify-start">
                                    <span
                                        className={`px-3 py-[3px] text-[11px] rounded-full 
                                        ${p.status === "Absent"
                                            ? "bg-gray-900 text-white"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {p.status}
                                    </span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
