import React from "react";
import {
  Users,
  CalendarDays,
  IndianRupee,
  Bell,
  FileText,
  UserCheck,
  TrendingUp,
} from "lucide-react";

export default function PayrollAdminDashboard() {
  return (
    <div className="min-h-screen w-full p-6 bg-[#f5f6fa] font-inter">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Good Morning</h1>
          <p className="text-sm text-gray-500 mt-1">
            Take Action : The appraisal cycle is around the corner. Let’s get started.
          </p>
        </div>

        <button className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition-all">
          Send Reminders
        </button>
      </div>

      {/* TOP 4 CARDS */}
      <div className="grid grid-cols-4 gap-4 mb-6">

        {/* Total Employees */}
        <div className="rounded-3xl p-5 bg-white shadow-sm">
          <p className="text-gray-500 text-sm">Total Employees</p>
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-3xl font-bold">289</h2>
            <Users className="w-10 h-10 text-[#4A8CF7]" />
          </div>
        </div>

        {/* On Leave */}
        <div className="rounded-3xl p-5 bg-white shadow-sm">
          <p className="text-gray-500 text-sm">On Leave</p>
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-3xl font-bold">08</h2>
            <CalendarDays className="w-10 h-10 text-[#5EC78D]" />
          </div>
        </div>

        {/* Payroll Runs */}
        <div className="rounded-3xl p-5 bg-white shadow-sm">
          <p className="text-gray-500 text-sm">Payroll Runs</p>
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-3xl font-bold">03</h2>
            <IndianRupee className="w-10 h-10 text-[#F6A45B]" />
          </div>
        </div>

        {/* Requests */}
        <div className="rounded-3xl p-5 bg-white shadow-sm">
          <p className="text-gray-500 text-sm">Requests</p>
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-3xl font-bold">28</h2>
            <Bell className="w-10 h-10 text-[#8A58EF]" />
          </div>
        </div>
      </div>

      {/* MID GRID */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        {/* Payroll Categories */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Payroll Categories</h3>

          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <span className="inline-block w-12 h-12 bg-blue-200 rounded-full"></span>
              <p className="mt-1 text-sm text-gray-600">Remote</p>
            </div>
            <div>
              <span className="inline-block w-12 h-12 bg-green-200 rounded-full"></span>
              <p className="mt-1 text-sm text-gray-600">Finance</p>
            </div>
            <div>
              <span className="inline-block w-12 h-12 bg-yellow-200 rounded-full"></span>
              <p className="mt-1 text-sm text-gray-600">India</p>
            </div>
            <div>
              <span className="inline-block w-12 h-12 bg-red-200 rounded-full"></span>
              <p className="mt-1 text-sm text-gray-600">USA</p>
            </div>
          </div>
        </div>

        {/* News & Events */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">News & Events</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center">
              <span>Board Meeting</span>
              <span className="text-gray-500">28 Aug</span>
            </li>
            <li className="flex justify-between items-center">
              <span>New Joinee</span>
              <span className="text-gray-500">29 Aug</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Holiday - India</span>
              <span className="text-gray-500">31 Aug</span>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
              Payments
            </button>
            <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
              Security
            </button>
            <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
              Reports
            </button>
            <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200">
              Payslips
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-2 gap-4">

        {/* Pending Approvals */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Pending Payroll Approvals</h3>

          <div className="space-y-3">
            {[
              "Rohit Sharma",
              "Kavya Menon",
              "Harish Kumar",
              "Megha Rao",
            ].map((name, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-xl"
              >
                <p className="text-gray-700">{name}</p>
                <button className="text-sm text-blue-500 hover:underline">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Payroll Updates */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Payroll Updates</h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-100 rounded-xl">
              <span>Salary Disbursed</span>
              <span className="text-green-600 font-semibold">✔ Completed</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-100 rounded-xl">
              <span>Pending Reimbursements</span>
              <span className="text-orange-500 font-semibold">12 Pending</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-100 rounded-xl">
              <span>Statutory Reports</span>
              <span className="text-blue-500 font-semibold">Download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
