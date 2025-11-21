
// import React from "react";

// // Sample data - Replace with props or state
// const payslipData = {
//   company: {
//     name: "Your Company Name",
//     logo: "https://via.placeholder.com/150x50?text=Logo", // Placeholder logo URL
//     address: "123 Business St, City, State 12345",
//   },
//   employee: {
//     name: "John Doe",
//     id: "EMP001",
//     department: "Engineering",
//     designation: "Software Engineer",
//     pan: "ABCDE1234F",
//     payPeriod: "November 2025",
//     dateOfJoining: "01-Jan-2020",
//   },
//   earnings: [
//     { label: "Basic Salary", amount: 50000 },
//     { label: "House Rent Allowance", amount: 15000 },
//     { label: "Special Allowance", amount: 10000 },
//     { label: "Performance Bonus", amount: 5000 },
//   ],
//   deductions: [
//     { label: "Provident Fund", amount: 6000 },
//     { label: "Professional Tax", amount: 200 },
//     { label: "Income Tax (TDS)", amount: 4500 },
//   ],
//   summary: {
//     grossEarnings: 80000,
//     totalDeductions: 10700,
//     netPay: 69300,
//   },
//   ytd: {
//     ytdGross: 960000,
//     ytdDeductions: 128400,
//     ytdNet: 831600,
//   },
//   notes: "This is a sample payslip. Keep this document confidential.",
// };

// const PayslipDownload = ({ data = payslipData }) => {
//   const { company, employee, earnings, deductions, summary, ytd, notes } = data;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg print:shadow-none">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-200 pb-6">
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4 md:mb-0">
//           <img src={company.logo} alt="Company Logo" className="w-24 h-12 object-contain" />
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
//             <p className="text-sm text-gray-600">{company.address}</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <h2 className="text-xl font-semibold text-gray-700">Payslip</h2>
//           <p className="text-sm text-gray-500">{employee.payPeriod}</p>
//         </div>
//       </div>

//       {/* Employee Info */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//         <div>
//           <p className="text-sm font-medium text-gray-500">Employee Name</p>
//           <p className="text-lg font-semibold">{employee.name}</p>
//         </div>
//         <div>
//           <p className="text-sm font-medium text-gray-500">Employee ID</p>
//           <p className="text-lg font-semibold">{employee.id}</p>
//         </div>
//         <div>
//           <p className="text-sm font-medium text-gray-500">Department</p>
//           <p className="text-lg font-semibold">{employee.department}</p>
//         </div>
//         <div>
//           <p className="text-sm font-medium text-gray-500">Designation</p>
//           <p className="text-lg font-semibold">{employee.designation}</p>
//         </div>
//         <div>
//           <p className="text-sm font-medium text-gray-500">Date of Joining</p>
//           <p className="text-lg font-semibold">{employee.dateOfJoining}</p>
//         </div>
//         <div>
//           <p className="text-sm font-medium text-gray-500">PAN</p>
//           <p className="text-lg font-semibold">{employee.pan}</p>
//         </div>
//       </div>

//       {/* Earnings Table */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Earnings</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 rounded-lg">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (₹)</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {earnings.map((item, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.label}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{item.amount.toLocaleString()}</td>
//                 </tr>
//               ))}
//               <tr className="bg-gray-50 font-bold">
//                 <td className="px-6 py-4 text-sm text-gray-900">Gross Earnings</td>
//                 <td className="px-6 py-4 text-sm text-gray-900 text-right">{summary.grossEarnings.toLocaleString()}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Deductions Table */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Deductions</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 rounded-lg">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (₹)</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {deductions.map((item, index) => (
//                 <tr key={index} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.label}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{item.amount.toLocaleString()}</td>
//                 </tr>
//               ))}
//               <tr className="bg-gray-50 font-bold">
//                 <td className="px-6 py-4 text-sm text-gray-900">Total Deductions</td>
//                 <td className="px-6 py-4 text-sm text-gray-900 text-right">{summary.totalDeductions.toLocaleString()}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Summary */}
//       <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//         <h3 className="text-lg font-semibold mb-2 text-blue-800">Pay Summary</h3>
//         <div className="flex justify-between text-sm">
//           <span className="font-medium">Net Pay:</span>
//           <span className="font-bold text-2xl text-blue-600">₹{summary.netPay.toLocaleString()}</span>
//         </div>
//       </div>

//       {/* YTD Section */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Year-to-Date Summary</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 rounded-lg">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                 <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount (₹)</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               <tr className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">YTD Gross Earnings</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{ytd.ytdGross.toLocaleString()}</td>
//               </tr>
//               <tr className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">YTD Total Deductions</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">{ytd.ytdDeductions.toLocaleString()}</td>
//               </tr>
//               <tr className="bg-gray-50 font-bold">
//                 <td className="px-6 py-4 text-sm text-gray-900">YTD Net Pay</td>
//                 <td className="px-6 py-4 text-sm text-gray-900 text-right">{ytd.ytdNet.toLocaleString()}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Notes */}
//       <div className="mt-8 pt-6 border-t border-gray-200">
//         <p className="text-sm text-gray-600 italic">{notes}</p>
//       </div>

//       {/* Print Button for Viewing/Printing */}
//       <div className="mt-6 flex justify-center">
//         <button
//           onClick={() => window.print()}
//           className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Print Payslip
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PayslipDownload;


import React from "react";

const PayslipDownload = () => {
  /* =======================
      DUMMY DATA INSIDE FILE
  ========================== */
  const data = {
    company: {
      name: "SalaryHive Technologies Pvt Ltd",
      logo: "https://via.placeholder.com/200x60?text=SalaryHive+Logo",
      address: "Level 5, Tech Park, Bengaluru, Karnataka - 560001",
    },

    employee: {
      name: "Parthiban S",
      id: "SH-EMP-1025",
      department: "Engineering",
      designation: "Full Stack Developer",
      pan: "ABCDE1234F",
      payPeriod: "November 2025",
      dateOfJoining: "12-Mar-2022",
    },

    earnings: [
      { label: "Basic Salary", amount: 42000 },
      { label: "House Rent Allowance (HRA)", amount: 16000 },
      { label: "Special Allowance", amount: 10000 },
      { label: "Performance Bonus", amount: 8000 },
      { label: "Food Allowance", amount: 2000 },
    ],

    deductions: [
      { label: "Provident Fund (PF)", amount: 5040 },
      { label: "Professional Tax (PT)", amount: 200 },
      { label: "Income Tax (TDS)", amount: 4870 },
      { label: "Health Insurance", amount: 1500 },
    ],

    summary: {
      grossEarnings: 78000,
      totalDeductions: 11610,
      netPay: 66390,
    },

    ytd: {
      ytdGross: 78000 * 8,
      ytdDeductions: 11610 * 8,
      ytdNet: (78000 - 11610) * 8,
    },

    notes:
      "This is an electronically generated payslip and does not require a physical signature. Please keep this document confidential.",
  };

  const {
    company,
    employee,
    earnings,
    deductions,
    summary,
    ytd,
    notes,
  } = data;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 print:bg-white print:border-none print:shadow-none">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 mb-10">
        <div className="flex items-center gap-5">
          <img
            src={company.logo}
            alt="Company Logo"
            className="w-28 h-14 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-gray-800">{company.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{company.address}</p>
          </div>
        </div>

        <div className="mt-5 md:mt-0 text-right">
          <p className="text-lg font-semibold text-gray-700">Payslip</p>
          <p className="text-sm text-gray-500">{employee.payPeriod}</p>
        </div>
      </div>

      {/* EMPLOYEE DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 mb-10">
        <DetailItem label="Employee Name" value={employee.name} />
        <DetailItem label="Employee ID" value={employee.id} />
        <DetailItem label="Department" value={employee.department} />
        <DetailItem label="Designation" value={employee.designation} />
        <DetailItem label="Date of Joining" value={employee.dateOfJoining} />
        <DetailItem label="PAN" value={employee.pan} />
      </div>

      {/* Earnings + Deductions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

        <PayCard title="Earnings">
          <PayTable
            data={earnings}
            totalLabel="Gross Earnings"
            total={summary.grossEarnings}
          />
        </PayCard>

        <PayCard title="Deductions">
          <PayTable
            data={deductions}
            totalLabel="Total Deductions"
            total={summary.totalDeductions}
          />
        </PayCard>
      </div>

      {/* Net Pay */}
      <div className="bg-blue-50 border border-blue-200 shadow-sm p-6 rounded-2xl flex justify-between items-center mb-10">
        <span className="text-lg font-semibold text-blue-800">Net Pay</span>
        <span className="text-3xl font-extrabold text-blue-700">
          ₹{summary.netPay.toLocaleString()}
        </span>
      </div>

      {/* YTD */}
      <PayCard title="Year To Date Summary">
        <div className="overflow-hidden rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-200">
              <YtdRow label="YTD Gross Earnings" value={ytd.ytdGross} />
              <YtdRow label="YTD Total Deductions" value={ytd.ytdDeductions} />
              <YtdRow label="YTD Net Pay" value={ytd.ytdNet} bold />
            </tbody>
          </table>
        </div>
      </PayCard>

      {/* Notes */}
      <p className="text-sm text-gray-600 italic mt-6 border-t pt-6">{notes}</p>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
        >
          Print Payslip
        </button>
      </div>
    </div>
  );
};

/* SMALL COMPONENTS */
const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-lg font-semibold text-gray-800 mt-1">{value}</p>
  </div>
);

const PayCard = ({ title, children }) => (
  <div className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-2xl p-6 shadow-sm">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
    {children}
  </div>
);

const PayTable = ({ data, totalLabel, total }) => (
  <div className="overflow-hidden rounded-xl border border-gray-100">
    <table className="w-full text-sm">
      <tbody className="divide-y divide-gray-200">
        {data.map((item, i) => (
          <tr key={i} className="hover:bg-gray-50">
            <td className="px-5 py-3 font-medium text-gray-700">{item.label}</td>
            <td className="px-5 py-3 text-right text-gray-800">
              ₹{item.amount.toLocaleString()}
            </td>
          </tr>
        ))}
        <tr className="bg-gray-50 font-bold">
          <td className="px-5 py-3 text-gray-800">{totalLabel}</td>
          <td className="px-5 py-3 text-right text-gray-800">
            ₹{total.toLocaleString()}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const YtdRow = ({ label, value, bold }) => (
  <tr className={`${bold ? "bg-gray-50 font-bold" : ""}`}>
    <td className="px-5 py-3 text-gray-800">{label}</td>
    <td className="px-5 py-3 text-right text-gray-800">
      ₹{value.toLocaleString()}
    </td>
  </tr>
);

export default PayslipDownload;
