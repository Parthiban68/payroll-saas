import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  IndianRupee,
  ChevronRight,
  BarChart3,
  FileText as FileTextIcon,
  ExternalLink,
} from "lucide-react";
import PayslipDownload from "../components/PayslipDownload";

export default function PayslipPage() {
  const months = [
    {
      month: "January 2025",
      sub: "Monthly Salary Cycle",
      amount: "₹14,586",
      date: "04 Jan 2025",
      pdf: "/pdfs/january.pdf",
      stats: {
        hoursWorked: "160",
        netSalary: "₹29,000",
        paymentDate: "04 Jan 2025",
        federalTaxes: "₹2,500",
        stateTaxes: "₹1,200",
        employerCost: "₹32,000",
      },
    },
    {
      month: "February 2025",
      sub: "Monthly Salary Cycle",
      amount: "₹19,586",
      date: "14 Feb 2025",
      pdf: "/pdfs/february.pdf",
      stats: {
        hoursWorked: "158",
        netSalary: "₹31,000",
        paymentDate: "14 Feb 2025",
        federalTaxes: "₹2,900",
        stateTaxes: "₹1,400",
        employerCost: "₹34,500",
      },
    },
  ];

  const [selectedStats, setSelectedStats] = useState(months[0].stats);
  const [selectedRow, setSelectedRow] = useState(0);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  // const handleViewPayslip = () => {
  //   setPdfOpen(true);
  // };

  return (
    <div className="w-full p-6 flex gap-6">
      {/* LEFT TABLE */}
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-4">

        {/* HEADER */}
        <div className="grid grid-cols-[2fr_1fr_1.2fr_1fr] items-center px-2 pb-3 text-xs font-semibold text-gray-600">
          <p className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-black" />
            Pay Cycle
          </p>

          <p className="flex items-center gap-1">
            <IndianRupee className="w-4 h-4 text-black" />
            Amount
          </p>

          <p className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4 text-black" />
            Payment date
          </p>

          <p className="flex items-center gap-1 justify-end">
            <ExternalLink className="w-4 h-4 text-black" />
            Action
          </p>
        </div>

        {/* ROWS */}
        <div className="mt-2">
          {months.map((m, i) => (
            <motion.div
              key={i}
              onClick={() => {
                setSelectedStats(m.stats);
                setSelectedRow(i);
              }}
              initial={false}
              animate={{
                backgroundColor: selectedRow === i ? "#eef2ff" : "#ffffff",
                borderLeftWidth: selectedRow === i ? 4 : 0,
                borderColor: selectedRow === i ? "#6366f1" : "transparent",
              }}
              transition={{ duration: 0.25 }}
              whileTap={{ scale: 0.97 }}
              whileHover={{ backgroundColor: selectedRow === i ? "#eef2ff" : "#f7f7f7" }}
              className="grid grid-cols-[2fr_1fr_1.2fr_1fr] items-center px-2 py-3 cursor-pointer rounded-lg border-l-0"
            >
              {/* ICON + TEXT */}
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: selectedRow === i ? 1.1 : 1,
                    boxShadow:
                      selectedRow === i
                        ? "0 4px 12px rgba(99,102,241,0.25)"
                        : "0 1px 4px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100"
                >
                  <FileTextIcon className="w-4 h-4 text-gray-800" />
                </motion.div>

                <div className="flex flex-col leading-tight">
                  <p className="text-sm font-medium">{m.month}</p>
                  <p className="text-xs text-gray-500">{m.sub}</p>
                </div>
              </div>

              {/* AMOUNT */}
              <p className="text-sm font-medium">{m.amount}</p>

              {/* DATE */}
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <CalendarDays className="w-3 h-3 text-gray-500" />
                {m.date}
              </p>

              {/* ACTION */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPdfOpen(true);
                }}
                className="text-indigo-600 text-sm font-medium flex items-center gap-1 hover:underline justify-end w-full"
              >
                View Payslip <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-72 bg-white rounded-xl border border-gray-200 shadow-sm p-5 h-fit">
        <p className="font-semibold text-gray-900 mb-4 text-sm flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-black" />
          Year to date statistics
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStats.netSalary}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-3"
          >
            <AnimatedStat label="Hours Worked" value={selectedStats.hoursWorked} />
            <AnimatedStat label="Net Salary" value={selectedStats.netSalary} />
            <AnimatedStat label="Payment Date" value={selectedStats.paymentDate} />
            <AnimatedStat label="Federal Taxes" value={selectedStats.federalTaxes} />
            <AnimatedStat label="State Taxes" value={selectedStats.stateTaxes} />
            <AnimatedStat label="Employer Cost" value={selectedStats.employerCost} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============================
            PDF VIEWER PANEL
      ============================ */}
      <AnimatePresence>
        {pdfOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              onClick={() => setPdfOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="fixed right-0 top-0 h-full w-[670px] bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* HEADER */}
              <div className="p-4 flex justify-between items-center border-b">
                <p className="text-lg font-semibold">Payslip Preview</p>

                <button
                  onClick={() => setPdfOpen(false)}
                  className="text-gray-600 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>

              {/* PDF VIEWER */}
              {/* <motion.iframe
                key={pdfUrl}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={pdfUrl}
                className="w-full h-full"
                title="Payslip PDF Viewer"
              /> */}
              <div className="w-full h-full overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  title="Payslip PDF Viewer"
                  className="w-full min-h-full overflow-y-auto"
                >
                  <PayslipDownload />
                </motion.div>
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Animated Stat Component */
function AnimatedStat({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="pb-3 mb-2 border-b border-gray-200"
    >
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-bold text-sm text-gray-900">{value}</p>
    </motion.div>
  );
}
