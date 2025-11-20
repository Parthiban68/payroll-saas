// MissPunchPage.jsx
import React, { useState, useMemo } from "react";
import {
  AlertTriangle,
  Search,
  Clock,
  User,
  MoreVertical,
} from "lucide-react";

export default function MissPunch() {
  const allRecords = [
    {
      id: 1,
      date: "Jan 09, 2025",
      user: "Alex Johnson",
      type: "Check-in Missing",
      status: "Pending",
      reason: "Forgot to punch in during morning shift."
    },
    {
      id: 2,
      date: "Jan 15, 2025",
      user: "Sarah Miller",
      type: "Check-out Missing",
      status: "Approved",
      reason: "System error; unable to punch out."
    },
    {
      id: 3,
      date: "Jan 21, 2025",
      user: "David Kim",
      type: "Both Punches Missing",
      status: "Rejected",
      reason: "Incorrect shift information."
    },
  ];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const STATUS_STYLES = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const filtered = useMemo(() => {
    return allRecords.filter((r) => {
      if (statusFilter !== "All" && r.status !== statusFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          r.user.toLowerCase().includes(q) ||
          r.reason.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [statusFilter, search]);

  return (
    <div className="w-full p-2 md:p-0">

      {/* ================= TOP HEADER ================= */}
      <div className="flex items-center justify-between bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Missed Punch</h2>
          <p className="text-gray-500 text-sm">Manage your missed punch corrections</p>
        </div>
        <button className="px-5 py-2 bg-black text-white rounded-full text-sm shadow hover:opacity-90 transition">
          Request Fix
        </button>
      </div>

      {/* ============== LEFT SUMMARY + RIGHT LIST GRID ============== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= LEFT CARDS ================= */}
        <aside className="lg:col-span-1 space-y-5">

          {/* SUMMARY CARD */}
          <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl p-5 shadow">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Miss Punch Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Records</span>
                <span className="font-medium text-gray-800">34</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pending</span>
                <span className="font-medium text-yellow-600">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Approved</span>
                <span className="font-medium text-green-600">15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rejected</span>
                <span className="font-medium text-red-600">7</span>
              </div>
            </div>
          </div>

        </aside>

        {/* ================= RIGHT TABLE LIST ================= */}
        <main className="lg:col-span-3">

          {/* FILTER & SEARCH */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
            {/* SEARCH */}
            <div className="relative w-full sm:w-80">
              <input
                className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm text-sm focus:border-gray-300"
                placeholder="Search by user or reason..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* STATUS FILTER */}
            <select
              className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm text-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* TABLE WRAPPER */}
          <div className="overflow-hidden bg-white/70 backdrop-blur rounded-xl shadow border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {["Date", "User", "Type", "Reason", "Status", ""].map((h) => (
                    <th
                      key={h}
                      className="p-4 text-left font-semibold text-gray-700"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filtered.map((rec) => (
                  <tr
                    key={rec.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="p-4 text-gray-700">{rec.date}</td>

                    <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                      <User className="w-5 h-5 text-gray-400" />
                      {rec.user}
                    </td>

                    <td className="p-4 text-gray-700">{rec.type}</td>

                    <td className="p-4 text-gray-600 max-w-xs truncate">
                      {rec.reason}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[rec.status]
                          }`}
                      >
                        {rec.status}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center p-8 text-gray-500 italic"
                    >
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
