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
    <div className="max-w-4xl mx-auto p-8 bg-linear-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 print:bg-white print:border-none print:shadow-none">

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
