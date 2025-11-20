// LeavePage.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import { ChevronDown, MoreVertical, Download, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Stethoscope,
  Umbrella,
  CalendarDays,
  Baby,
  FileText,
  Search as SearchIcon
} from "lucide-react";

/**
 * LeavePage with:
 * - Animated progress circles + horizontal bars
 * - Filters (status/type)
 * - Search
 * - Pagination
 * - Export CSV (Excel-friendly) + Print-as-PDF
 * - Status color tags
 *
 * No external libs required.
 */

const initialCards = [
  { id: "sick", title: "Sick Leaves", used: 5, total: 10, icon: <Stethoscope className="w-6 h-6 text-indigo-600" /> },
  { id: "vac", title: "Vacation", used: 3, total: 10, icon: <Umbrella className="w-6 h-6 text-indigo-600" /> },
  { id: "cas", title: "Casual Leaves", used: 6, total: 10, icon: <CalendarDays className="w-6 h-6 text-indigo-600" /> },
  { id: "mat", title: "Maternity/Paternity", used: 2, total: 10, icon: <Baby className="w-6 h-6 text-indigo-600" /> },
];

const initialRows = [
  { type: "Sick", date: "Apr 25", reason: "Flu recovery", submitted: "Apr 25", status: "Pending", assigned: "N/A" },
  { type: "Casual", date: "Apr 15 - Apr 18", reason: "Home shifting", submitted: "Apr 07", status: "Approved", assigned: "Sarah M." },
  { type: "Vacation", date: "Mar 30", reason: "Going out station", submitted: "Mar 29", status: "Pending", assigned: "N/A" },
  { type: "Sick", date: "Mar 02", reason: "Fever recovery", submitted: "Mar 02", status: "Rejected", assigned: "Danish Ali" },
  { type: "Casual", date: "Feb 15 - Feb 20", reason: "Friends meetup", submitted: "Feb 13", status: "Pending", assigned: "N/A" },
  { type: "Paternity", date: "Feb 11", reason: "Family Issues", submitted: "Feb 10", status: "Approved", assigned: "Ali Zubairi" },
  { type: "Casual", date: "Feb 02", reason: "Family outing", submitted: "Feb 01", status: "Rejected", assigned: "Ali Zubairi" },
  { type: "Sick", date: "Jan 29", reason: "Asthma", submitted: "Jan 29", status: "Approved", assigned: "Ali Zubairi" },
  { type: "Vacation", date: "Jan 01", reason: "New year eve", submitted: "Jan 01", status: "Approved", assigned: "Ali Zubairi" },
  // duplicate more to test pagination
  { type: "Sick", date: "Dec 20", reason: "Cold", submitted: "Dec 19", status: "Approved", assigned: "Manager A" },
  { type: "Casual", date: "Nov 02", reason: "Personal Work", submitted: "Nov 01", status: "Pending", assigned: "N/A" },
  { type: "Vacation", date: "Oct 22", reason: "Trip", submitted: "Oct 20", status: "Rejected", assigned: "HR" },
];

const STATUS_COLORS = {
  Approved: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-800",
  Rejected: "bg-red-100 text-red-700",
  "On Hold": "bg-gray-100 text-gray-800",
};

export default function LeavePage() {
  const [cards] = useState(initialCards);
  const [rows, setRows] = useState(initialRows);

  // filters & UI state
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  // pagination
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredRows(rows, search, statusFilter, typeFilter).length / rowsPerPage));
  }, [rows, search, statusFilter, typeFilter, rowsPerPage]);

  useEffect(() => {
    // ensure page within bounds
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  // helpers
  function filteredRows(allRows, q, status, type) {
    return allRows.filter((r) => {
      if (status !== "All" && r.status !== status) return false;
      if (type !== "All" && r.type !== type) return false;
      if (!q) return true;
      const lower = q.toLowerCase();
      return (
        r.type.toLowerCase().includes(lower) ||
        r.reason.toLowerCase().includes(lower) ||
        r.assigned.toLowerCase().includes(lower) ||
        r.date.toLowerCase().includes(lower) ||
        r.submitted.toLowerCase().includes(lower)
      );
    });
  }

  const paginatedRows = useMemo(() => {
    const f = filteredRows(rows, search, statusFilter, typeFilter);
    const start = (page - 1) * rowsPerPage;
    return f.slice(start, start + rowsPerPage);
  }, [rows, search, statusFilter, typeFilter, page, rowsPerPage]);

  // Export CSV (Excel-friendly)
  function exportCSV() {
    const f = filteredRows(rows, search, statusFilter, typeFilter);
    const headers = ["Leave Type", "Dates Requested", "Reason", "Submitted On", "Status", "Assigned To"];
    const csv = [
      headers.join(","),
      ...f.map((r) =>
        [
          `"${r.type}"`,
          `"${r.date}"`,
          `"${r.reason.replace(/"/g, '""')}"`,
          `"${r.submitted}"`,
          `"${r.status}"`,
          `"${r.assigned}"`
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leave-exports-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Export PDF -> open new window with print-optimized HTML
  function exportPDF() {
    const f = filteredRows(rows, search, statusFilter, typeFilter);
    const html = `
      <html>
        <head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Leave export</title>
          <style>
            body{font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; padding:20px; color:#111}
            table{width:100%; border-collapse:collapse; margin-top:12px}
            th,td{padding:8px; border:1px solid #eee; text-align:left; font-size:12px}
            th{background:#fafafa}
          </style>
        </head>
        <body>
          <h2>Leave Export - ${new Date().toLocaleString()}</h2>
          <table>
            <thead><tr><th>Leave Type</th><th>Dates</th><th>Reason</th><th>Submitted</th><th>Status</th><th>Assigned</th></tr></thead>
            <tbody>
              ${f.map(r => `<tr>
                <td>${escapeHtml(r.type)}</td>
                <td>${escapeHtml(r.date)}</td>
                <td>${escapeHtml(r.reason)}</td>
                <td>${escapeHtml(r.submitted)}</td>
                <td>${escapeHtml(r.status)}</td>
                <td>${escapeHtml(r.assigned)}</td>
              </tr>`).join("")}
            </tbody>
          </table>
          <script>window.onload = () => { setTimeout(() => { window.print(); }, 250); }</script>
        </body>
      </html>
    `;
    const w = window.open("", "_blank", "noopener,noreferrer");
    if (!w) {
      alert("Please allow popups for export to PDF.");
      return;
    }
    w.document.write(html);
    w.document.close();
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
  }

  // small utility to add a new dummy row (for testing)
  function addDummy() {
    
  }

  return (
    <div className="w-full">
      {/* Top: title + actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Leaves</h1>
          <p className="text-sm text-gray-500 mt-1">Overview of leave balances and history</p>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={exportCSV} className="inline-flex items-center gap-2 px-3 py-2 bg-white shadow rounded-lg text-sm hover:shadow-md">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button onClick={exportPDF} className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-300 text-black rounded-lg text-sm hover:opacity-95">
            <FileText className="w-4 h-4" /> Export PDF
          </button>
          {/* <button onClick={addDummy} className="px-3 py-2 bg-black text-white rounded-lg text-sm">+ Add</button> */}
        </div>
      </div>

      {/* GRID: left cards + right table */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT: cards (span 1 of 4 on lg) */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Leave Balance</h2>
            <button className="px-3 py-1 rounded-full bg-black text-white text-sm">Apply Leave</button>
          </div>

          <div className="space-y-3">
            {cards.map((c) => {
              const pct = Math.round((c.used / c.total) * 100);
              return (
                <div key={c.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute -left-10 -top-8 w-36 h-36 rounded-full opacity-5 bg-linear-to-br from-yellow-300 to-yellow-100"></div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-800">{c.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{c.used} / {c.total} days</div>
                    </div>

                    <div className="p-2 rounded-full bg-indigo-50">
                      {c.icon}
                    </div>
                  </div>

                  {/* circular + horizontal progress */}
                  <div className="mt-4 flex items-center gap-3">
                    {/* circular */}
                    <div className="relative w-12 h-12">
                      <svg className="w-12 h-12 -rotate-90">
                        <circle cx="24" cy="24" r="18" stroke="#eee" strokeWidth="6" fill="none" />
                        <circle
                          cx="24"
                          cy="24"
                          r="18"
                          stroke="#6D28D9"
                          strokeWidth="6"
                          strokeLinecap="round"
                          fill="none"
                          strokeDasharray={2 * Math.PI * 18}
                          strokeDashoffset={(1 - pct / 100) * 2 * Math.PI * 18}
                          style={{ transition: "stroke-dashoffset 700ms ease" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">{pct}%</div>
                    </div>

                    {/* animated bar */}
                    <div className="flex-1">
                      <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                        <div
                          className="h-3 rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: "linear-gradient(90deg,#FFD166,#F4C95D)",
                            transition: "width 900ms ease",
                          }}
                        />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Used: {c.used} | Remaining: {c.total - c.used}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Small summary panel */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-sm font-medium">Summary</div>
                <div className="text-xs text-gray-500">Monthly & Yearly overview</div>
              </div>
              <div className="text-sm font-semibold">Net: 16</div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <div>Used this month</div>
                <div>4 days</div>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <div>Pending</div>
                <div>2 requests</div>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: main table (span 3 of 4) */}
        <main className="lg:col-span-3">
          {/* Controls: search + filters + pagination top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <input
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search leave type, reason, assigned..."
                  className="w-full sm:w-[420px] px-3 py-2 rounded-lg border border-gray-200 shadow-sm text-sm"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <SearchIcon className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="px-3 py-2 rounded-lg border border-gray-200 text-sm">
                  <option value="All">All status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>

                <select value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setPage(1); }} className="px-3 py-2 rounded-lg border border-gray-200 text-sm">
                  <option value="All">All types</option>
                  <option value="Sick">Sick</option>
                  <option value="Casual">Casual</option>
                  <option value="Vacation">Vacation</option>
                  <option value="Paternity">Paternity</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500">Rows</div>
              <select value={rowsPerPage} onChange={(e) => { setRowsPerPage(Number(e.target.value)); setPage(1); }} className="px-2 py-1 rounded-lg border border-gray-200 text-sm">
                {[5,6,8,10,20].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
              <div className="text-sm text-gray-500">Page {page} / {totalPages}</div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white/50 shadow-sm rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left bg-gray-50">
                  <th className="p-4 font-semibold text-gray-700">Leave Type</th>
                  <th className="p-4 font-semibold text-gray-700">Dates Requested</th>
                  <th className="p-4 font-semibold text-gray-700">Reason</th>
                  <th className="p-4 font-semibold text-gray-700">Submitted On</th>
                  <th className="p-4 font-semibold text-gray-700">Status</th>
                  <th className="p-4 font-semibold text-gray-700">Assigned To</th>
                  <th className="p-4"></th>
                </tr>
              </thead>

              <tbody>
                {paginatedRows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-500">No records found</td>
                  </tr>
                )}

                {paginatedRows.map((row, i) => (
                  <tr key={i} className=" hover:bg-gray-50 transition">
                    <td className="p-4 font-medium text-gray-800">{row.type}</td>
                    <td className="p-4 text-gray-600">{row.date}</td>
                    <td className="p-4 text-gray-600 max-w-[220px] truncate">{row.reason}</td>
                    <td className="p-4 text-gray-600">{row.submitted}</td>

                    <td className="p-4">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${STATUS_COLORS[row.status] || "bg-gray-100 text-gray-800"}`}>
                        {row.status}
                      </span>
                    </td>

                    <td className="p-4 text-gray-700">{row.assigned}</td>

                    <td className="p-4 text-right">
                      <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {(page - 1) * rowsPerPage + 1} - {Math.min(page * rowsPerPage, filteredRows(rows, search, statusFilter, typeFilter).length)} of {filteredRows(rows, search, statusFilter, typeFilter).length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-2 rounded-lg bg-white border border-gray-200"
                disabled={page === 1}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium">{page}</div>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-2 rounded-lg bg-white border border-gray-200"
                disabled={page === totalPages}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
