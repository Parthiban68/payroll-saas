// RemoteAttendancePage.jsx
import React from "react";
import {
  Wifi,
  MapPin,
  CalendarDays,
  Clock,
  BarChart3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function RemoteAttendance() {
  const history = [
    {
      date: "05 Jan 2025",
      status: "Present",
      time: "09:10 AM - 06:00 PM",
      location: "Chennai",
    },
    {
      date: "04 Jan 2025",
      status: "Missed",
      time: "No Punch",
      location: "Coimbatore",
    },
    {
      date: "03 Jan 2025",
      status: "Present",
      time: "09:20 AM - 05:58 PM",
      location: "Chennai",
    },
  ];

  return (
    <div className="p-6 space-y-6">

      {/* ===================================================== */}
      {/* TOP LIVE STATUS */}
      {/* ===================================================== */}
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-100 flex items-center justify-between">
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            Remote Attendance — Live Status
          </h3>

          <div className="flex items-center gap-3 mt-2">
            <div className="p-3 bg-green-100 rounded-full">
              <Wifi className="w-5 h-5 text-green-600" />
            </div>
            <p className="font-medium text-gray-800">
              Connected • Working Remotely
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
            <MapPin className="w-4 h-4" />
            Chennai, Tamil Nadu
          </div>
        </div>

        {/* Right side map preview */}
        <div className="hidden md:block w-40 h-28 rounded-xl overflow-hidden shadow border">
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Chennai&zoom=12&size=400x300&key=AIzaFakeKey123"
            alt="Map Preview"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* ===================================================== */}
      {/* MONTHLY ANALYTICS */}
      {/* ===================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white rounded-2xl shadow p-4 border">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-indigo-600" />
            <h4 className="font-semibold text-gray-800">Work Days</h4>
          </div>
          <p className="text-3xl font-semibold mt-2 text-gray-900">18</p>
          <p className="text-xs text-gray-500">This month</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 border">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-gray-800">Present Days</h4>
          </div>
          <p className="text-3xl font-semibold mt-2 text-gray-900">15</p>
          <p className="text-xs text-gray-500">Remote Attendance Marked</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 border">
          <div className="flex items-center gap-3">
            <XCircle className="w-6 h-6 text-red-600" />
            <h4 className="font-semibold text-gray-800">Missed Days</h4>
          </div>
          <p className="text-3xl font-semibold mt-2 text-gray-900">3</p>
          <p className="text-xs text-gray-500">Check-ins missing</p>
        </div>

      </div>

      {/* ===================================================== */}
      {/* TIMELINE VIEW */}
      {/* ===================================================== */}
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Remote Attendance Timeline
        </h3>

        <div className="relative border-l border-gray-300 ml-4">
          {history.map((item, i) => (
            <div key={i} className="mb-8 ml-6">

              {/* timeline dot */}
              <span className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-blue-500 shadow"></span>

              <div className="p-4 bg-gray-50 rounded-xl border shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center justify-between">

                  <p className="text-sm font-semibold text-gray-900">
                    {item.date}
                  </p>

                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium 
                    ${
                      item.status === "Present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mt-2 text-sm">
                  <Clock className="w-4 h-4" />
                  {item.time}
                </div>

                <div className="flex items-center gap-2 text-gray-600 mt-1 text-sm">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
