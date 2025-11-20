// OnDutyPage.jsx — Borderless Zoho List Layout
import React from "react";
import {
  Briefcase,
  User,
  MapPin,
  CalendarDays,
  Plus,
  MoreVertical,
} from "lucide-react";

export default function OnDuty() {
  const dutyData = [
    {
      id: 1,
      title: "Client Visit — TCS Chennai",
      date: "Jan 12, 2025",
      user: "Alex Johnson",
      reason: "On-site training session",
      type: "Full Day",
      status: "Approved",
    },
    {
      id: 2,
      title: "Vendor Meeting — Coimbatore",
      date: "Jan 08, 2025",
      user: "Sarah Miller",
      reason: "Procurement discussion",
      type: "Half Day",
      status: "Pending",
    },
    {
      id: 3,
      title: "Field Audit — Erode Plant",
      date: "Dec 28, 2024",
      user: "David Kim",
      reason: "Compliance inspection",
      type: "Full Day",
      status: "Rejected",
    },
  ];

  const STATUS = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-2 bg-white/80 backdrop-blur-lg shadow-sm p-5 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-gray-900">On Duty Requests</h2>
          <p className="text-gray-500 text-sm">
            Manage field visits, client meetings & external work tasks.
          </p>
        </div>

        <button className="px-5 py-2 flex items-center gap-2 bg-black text-white rounded-full text-sm hover:opacity-90 transition shadow">
          <Plus className="w-4 h-4" /> Apply OD
        </button>
      </div>

      {/* ================== TWO COLUMN ================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ===== LEFT COLUMN — Summary ===== */}
        <div className="lg:col-span-4 space-y-6">

          {/* Summary Card (Zoho Style) */}
          <div className="bg-white/70 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary Overview</h3>

            <div className="space-y-4 text-sm">
              <SummaryItem label="Total OD Requests" value="18" />
              <SummaryItem label="Approved" value="10" color="text-green-600" />
              <SummaryItem label="Pending" value="5" color="text-yellow-600" />
              <SummaryItem label="Rejected" value="3" color="text-red-600" />
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white/70 rounded-2xl p-6 shadow-sm">
            <h3 className="text-md font-semibold text-gray-900 mb-3">Useful Information</h3>

            <ul className="space-y-4 text-sm text-gray-700">
              <InfoItem
                icon={<MapPin className="w-5 h-5 text-indigo-600" />}
                text="Make sure your OD location is verified by the manager."
              />
              <InfoItem
                icon={<CalendarDays className="w-5 h-5 text-purple-600" />}
                text="OD can be applied up to 7 days in the past."
              />
              <InfoItem
                icon={<User className="w-5 h-5 text-orange-500" />}
                text="Only HR/Admin can approve field duty."
              />
            </ul>
          </div>
        </div>

        {/* ===== RIGHT COLUMN — PURE LIST STYLE ===== */}
        <div className="lg:col-span-8 bg-white/80 rounded-2xl shadow-sm p-2">

          <h3 className="text-lg font-semibold text-gray-800 px-4 py-4">
            OD Request History
          </h3>

          <div className="relative">

            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 rounded-full"></div>

            <div className="space-y-2">
              {dutyData.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-14 pr-4 py-4 rounded-xl hover:bg-gray-50 transition cursor-pointer group"
                >

                  {/* Dot Indicator on Timeline */}
                  <span className="
          absolute left-[29px] top-6 
          w-3 h-3 rounded-full border-2 border-white shadow-md
        "
                    style={{
                      backgroundColor:
                        item.status === "Approved"
                          ? "#22c55e"
                          : item.status === "Pending"
                            ? "#eab308"
                            : "#ef4444"
                    }}
                  />

                  <div className="flex justify-between items-start">

                    {/* LEFT SIDE */}
                    <div className="flex gap-4">

                      {/* Icon */}
                      <div className="p-3 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {item.title}
                        </h4>

                        <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                          <CalendarDays className="w-3 h-3" />
                          {item.date}
                        </div>

                        <p className="text-xs text-gray-500 mt-1">
                          Type:{" "}
                          <span className="font-medium text-gray-700">{item.type}</span>
                        </p>

                        <p className="text-xs italic text-gray-500 mt-2">
                          "{item.reason}"
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 text-[11px] rounded-full font-medium ${STATUS[item.status]}`}
                      >
                        {item.status}
                      </span>
                      <MoreVertical className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

function SummaryItem({ label, value, color = "text-gray-900" }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className={`font-semibold ${color}`}>{value}</span>
    </div>
  );
}

function InfoItem({ icon, text }) {
  return (
    <li className="flex gap-3">
      {icon}
      <span>{text}</span>
    </li>
  );
}
