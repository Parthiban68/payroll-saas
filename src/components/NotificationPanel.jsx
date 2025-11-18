import React, { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

export default function NotificationPanel({ open, setOpen }) {
    const panelRef = useRef();
    const [tab, setTab] = useState("all");

    // ============================
    // 🟡 E-PAYROLL THEMED NOTIFICATIONS
    // ============================
    const notifications = [
        {
            id: 1,
            user: "HR System",
            action: "Your attendance for today has been recorded",
            sub: "IN: 09:12 AM • OUT: 06:01 PM",
            avatar: "data:image/jpeg;base64,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",
            time: "Just now",
            unread: true,
            type: "attendance",
        },
        {
            id: 2,
            user: "Payroll",
            action: "Your Salary Slip is generated",
            sub: "Salary: ₹42,500 for January",
            avatar: "data:image/jpeg;base64,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",
            time: "2h ago",
            unread: true,
            type: "salary",
        },
        {
            id: 3,
            user: "Manager Approval",
            action: "Leave Request Approved",
            sub: "Casual Leave • 2 Days • Jan 14 - Jan 15",
            avatar: "data:image/jpeg;base64,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",
            time: "4h ago",
            unread: true,
            type: "approval",
        },
        {
            id: 4,
            user: "System Alert",
            action: "Missed Punch Detected",
            sub: "Please regularize your attendance",
            avatar: "data:image/jpeg;base64,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",
            time: "1d ago",
            unread: false,
            type: "alert",
        },
    ];

    const filtered =
        tab === "all" ? notifications : notifications.filter((n) => n.unread);

    // close when clicking outside
    useEffect(() => {
        function handleClick(e) {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    return (
        <div
            className={`fixed top-20 right-20 w-[360px] bg-white z-50 transition-all duration-300 ${open
                ? "opacity-100 translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-3"
                }`}
        >
            <div
                ref={panelRef}
                className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-4 border border-white/40"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,248,230,0.7), rgba(255,255,255,0.9))",
                }}
            >
                {/* ============================
            Header
        ============================= */}
                {/* <div className="flex items-center justify-end mb-3">


                    <button
                        onClick={() => setOpen(false)}
                        className="p-1 hover:bg-gray-200 rounded-full"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div> */}

                {/* Tabs */}
                {/* Tabs + Title Row */}
                <div className="flex items-center justify-between mb-4">

                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-900">
                        Notifications
                    </h2>

                    {/* Tabs */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setTab("all")}
                            className={`pb-1 text-[12px] transition ${tab === "all"
                                    ? "text-black font-semibold border-b-2 border-yellow-500"
                                    : "text-gray-500"
                                }`}
                        >
                            All
                        </button>

                        <button
                            onClick={() => setTab("unread")}
                            className={`pb-1 text-[12px] transition ${tab === "unread"
                                    ? "text-black font-semibold border-b-2 border-yellow-500"
                                    : "text-gray-500"
                                }`}
                        >
                            Unread
                        </button>
                    </div>

                </div>


                {/* ============================
            NOTIFICATION LIST
        ============================= */}
                <div className="space-y-4 max-h-[380px] overflow-auto pr-1 bg-white">
                    {filtered.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-yellow-50/70 transition shadow-sm"
                        >
                            <img
                                src={item.avatar}
                                className="w-10 h-10 rounded-full object-cover bg-white shadow"
                            />

                            <div className="flex-1">
                                <p className="text-sm text-gray-900">
                                    <span className="font-semibold">{item.user}</span>{" "}
                                    {item.action}
                                </p>

                                {item.sub && (
                                    <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
                                )}

                                <p className="text-xs text-gray-400 mt-1">{item.time}</p>

                            </div>

                            {item.unread && (
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
