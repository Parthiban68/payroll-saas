// PermissionPage.jsx
import React, { useState, useMemo } from "react";
import {
  Info,
  User,
  Clock,
  CheckCircle,
  XCircle,
  MoreVertical,
  Search,
} from "lucide-react";

export default function PermissionPage() {
  // SAMPLE REQUEST DATA
  const allRequests = [
    {
      id: 1,
      user: "Alex Johnson",
      action: "Short Break",
      duration: "2 hrs",
      date: "Today, 11:00 AM",
      type: "Break",
      status: "Pending",
      reason: "Needed time to work on urgent task.",
    },
    {
      id: 2,
      user: "Sarah Miller",
      action: "Work From Home",
      duration: "Full Day",
      date: "Mar 15, 10:00 AM",
      type: "WFH",
      status: "Approved",
      reason: "Medical appointment.",
    },
    {
      id: 3,
      user: "David Kim",
      action: "Late Check-in",
      duration: "1 hr",
      date: "Mar 12, 9:30 AM",
      type: "Late",
      status: "Rejected",
      reason: "Personal emergency.",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [search, setSearch] = useState("");

  // FILTER LOGIC
  const filtered = useMemo(() => {
    return allRequests.filter((r) => {
      if (statusFilter !== "All" && r.status !== statusFilter) return false;
      if (typeFilter !== "All" && r.type !== typeFilter) return false;

      if (search.trim().length > 0) {
        const q = search.toLowerCase();
        return (
          r.user.toLowerCase().includes(q) ||
          r.action.toLowerCase().includes(q) ||
          r.reason.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [statusFilter, typeFilter, search]);

  const STATUS_STYLES = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="w-full p-2 md:p-0">
      {/* =================== TOP BANNER =================== */}
      <div className="flex items-start sm:items-center justify-between bg-white/80 backdrop-blur-lg border border-gray-100 shadow-md rounded-2xl p-5 mb-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full shadow-sm">
            <Info className="w-6 h-6 text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Need short-break, WFH or late check-in?
            </h2>
            <p className="text-sm text-gray-500">
              Request permission below — your manager will review instantly.
            </p>
          </div>
        </div>

        <button className="px-5 py-2 bg-black text-white rounded-full shadow hover:opacity-90 text-sm">
          Request Permission
        </button>
      </div>

      {/* =================== GRID: LEFT SUMMARY | RIGHT LIST =================== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-1 space-y-5">
          {/* CARD 1 */}
          <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl p-5 shadow">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Permission Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Requests</span>
                <span className="font-medium text-gray-800">18</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Approved</span>
                <span className="font-medium text-green-600">10</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Pending</span>
                <span className="font-medium text-yellow-600">5</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Rejected</span>
                <span className="font-medium text-red-600">3</span>
              </div>
            </div>
          </div>

        </aside>

        {/* RIGHT SECTION: LIST */}
        <main className="lg:col-span-3">
          {/* FILTERS + SEARCH */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
            {/* SEARCH */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search by name, action or reason..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:border-gray-300 text-sm"
              />
              <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* FILTERS */}
            <div className="flex items-center gap-3">
              <select
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm shadow-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>

              <select
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm shadow-sm"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Break">Break</option>
                <option value="WFH">Work From Home</option>
                <option value="Late">Late Check-in</option>
              </select>
            </div>
          </div>

          {/* TABLE CARD */}
          <div className="overflow-hidden bg-white/70 backdrop-blur rounded-xl shadow border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-semibold text-gray-700">
                    User
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Action
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Duration
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Reason
                  </th>
                  <th className="p-4"></th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50">
                    {/* USER */}
                    <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                      <User className="w-5 h-5 text-gray-400" />
                      {r.user}
                    </td>

                    <td className="p-4 text-gray-600">{r.action}</td>
                    <td className="p-4 text-gray-600">{r.duration}</td>
                    <td className="p-4 text-gray-600">{r.date}</td>

                    {/* STATUS TAG */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[r.status]}`}
                      >
                        {r.status}
                      </span>
                    </td>

                    <td className="p-4 text-gray-600 max-w-sm truncate">
                      {r.reason}
                    </td>

                    <td className="p-4 text-right">
                      <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="p-8 text-center text-gray-500 italic"
                    >
                      No matching permission requests
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
