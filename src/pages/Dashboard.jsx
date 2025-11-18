// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Area,
//   AreaChart,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
// } from "recharts";

// const Dashboard = () => {

//   // ------------------ DUMMY DATA ------------------
//   const salaryTrend = [
//     { month: "Jan", salary: 42000 },
//     { month: "Feb", salary: 45000 },
//     { month: "Mar", salary: 48000 },
//     { month: "Apr", salary: 47000 },
//     { month: "May", salary: 51000 },
//     { month: "Jun", salary: 55000 },
//   ];

//   const employeeType = [
//     { name: "Full Time", value: 13 },
//     { name: "Part Time", value: 1 },
//     { name: "Contract", value: 1 },
//     { name: "Others", value: 1 },
//   ];

//   const genderData = [
//     { name: "Male", value: 14 },
//     { name: "Female", value: 2 },
//     { name: "Others", value: 0 },
//   ];

//   const attendance = [
//     { title: "Present", value: 14 },
//     { title: "Absent", value: 2 },
//     { title: "Late", value: 1 },
//     { title: "WFH", value: 3 },
//   ];

//   const monthlySalaryCards = [
//     { label: "Current Month", amount: "₹55,000" },
//     { label: "Last Month", amount: "₹51,000" },
//     { label: "3 Month Avg", amount: "₹49,000" },
//     { label: "Year Total", amount: "₹5,20,000" },
//   ];

//   const COLORS = ["#6366F1", "#06B6D4", "#F97316", "#22C55E"];


//   return (
//     <div className="grid grid-cols-4 gap-4 p-4 w-full h-screen overflow-hidden bg-gray-50">
      
//       {/* ---------------- KPI CARDS ---------------- */}
//       <KpiCard title="Employees" value="16" gradient="from-blue-500 to-indigo-500" />
//       <KpiCard title="Monthly Salary" value="₹55,000" gradient="from-cyan-500 to-teal-500" />
//       <KpiCard title="Present Today" value="14" gradient="from-orange-500 to-pink-500" />
//       <KpiCard title="New Joinees" value="3" gradient="from-green-500 to-lime-500" />

//       {/* ---------------- SALARY TREND ---------------- */}
//       <div className="col-span-4 bg-white rounded-xl shadow p-4 h-[240px]">
//         <h2 className="font-semibold text-gray-700 mb-2">Salary Trend</h2>
//         <ResponsiveContainer width="100%" height="100%">
//           <AreaChart data={salaryTrend}>
//             <defs>
//               <linearGradient id="salaryGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="10%" stopColor="#6366F1" stopOpacity={0.8} />
//                 <stop offset="90%" stopColor="#6366F1" stopOpacity={0.1} />
//               </linearGradient>
//             </defs>
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Area
//               type="monotone"
//               dataKey="salary"
//               stroke="#4F46E5"
//               fill="url(#salaryGradient)"
//               strokeWidth={3}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>

//       {/* ---------------- EMPLOYEE TYPE PIE ---------------- */}
//       <div className="col-span-2 bg-white rounded-xl shadow p-4 h-[300px]">
//         <h2 className="font-semibold text-gray-700 mb-2">Employee Type</h2>
//         <ResponsiveContainer width="100%" height="90%">
//           <PieChart>
//             <Pie
//               data={employeeType}
//               cx="50%"
//               cy="50%"
//               outerRadius={90}
//               dataKey="value"
//             >
//               {employeeType.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* ---------------- GENDER DONUT ---------------- */}
//       <div className="col-span-2 bg-white rounded-xl shadow p-4 h-[300px]">
//         <h2 className="font-semibold text-gray-700 mb-2">Gender Ratio</h2>
//         <ResponsiveContainer width="100%" height="90%">
//           <PieChart>
//             <Pie
//               data={genderData}
//               cx="50%"
//               cy="50%"
//               innerRadius={50}
//               outerRadius={90}
//               paddingAngle={5}
//               dataKey="value"
//             >
//               {genderData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* ---------------- ATTENDANCE BAR ---------------- */}
//       <div className="col-span-2 bg-white rounded-xl shadow p-4 h-[270px]">
//         <h2 className="font-semibold text-gray-700 mb-2">Attendance</h2>
//         <ResponsiveContainer width="100%" height="90%">
//           <BarChart data={attendance}>
//             <XAxis dataKey="title" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#F97316" radius={[8, 8, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* ---------------- SALARY MINI CARDS ---------------- */}
//       <div className="col-span-2 grid grid-cols-2 gap-4">
//         {monthlySalaryCards.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-xl p-4 shadow bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
//           >
//             <div className="text-sm opacity-80">{item.label}</div>
//             <div className="text-xl font-bold">{item.amount}</div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };


// // ------------------- KPI COMPONENT -------------------
// const KpiCard = ({ title, value, gradient }) => (
//   <div className={`rounded-xl p-4 text-white shadow bg-gradient-to-r ${gradient}`}>
//     <div className="text-sm opacity-90">{title}</div>
//     <div className="text-xl font-bold">{value}</div>
//   </div>
// );

// export default Dashboard;


import WelcomeSection from "../components/WelcomeSection";
import DashboardGrid from "../components/DashboardGrid";

export default function Dashboard() {
  return (
<div className="w-full flex flex-col">
    <div className="flex-1 w-full">
        <WelcomeSection/>
        <DashboardGrid/>
    </div>
</div>

  );
}
