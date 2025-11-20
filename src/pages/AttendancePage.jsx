// AttendancePage.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalIcon,
  Plus,
  Search,
  Trash2,
  Settings,
} from "lucide-react";
import Calender from "../components/Calender";
import Leave from "../components/Leave";
import Permission from "../components/Permission";
import MissPunch from "../components/MissPunch";
import OnDuty from "../components/OnDuty";
import RemoteAttendance from "../components/RemoteAttendance";


export default function AttendancePage() {
  const [activeTab, setActiveTab] = useState("calendar");
  const tabs = [
    { id: "calendar", label: "Calendar" },
    { id: "leave", label: "Leave" },
    { id: "permission", label: "Permission" },
    { id: "miss", label: "Miss Punch" },
    { id: "od", label: "Onduty" },
  ];
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f4f5f6] via-[#fbfbfc] to-[#fffaf2] p-4 sm:p-6">
      <div className="border-b border-gray-200 flex gap-8 overflow-x-auto pb-1">

        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`
        pb-2 text-sm font-medium whitespace-nowrap
        ${activeTab === t.id ? "text-black border-b-2 border-green-500" : "text-gray-500"}
    `}
          >
            {t.label}
          </button>
        ))}

      </div>
      <div className="mt-6">
        {activeTab === "calendar" ?
          <Calender /> : activeTab === "leave" ?
            <Leave /> : activeTab === "permission" ?
              <Permission /> : activeTab === "miss" ?
                <MissPunch /> : activeTab === "od" ? <OnDuty /> : ""}
      </div>

    </div>
  );
}


