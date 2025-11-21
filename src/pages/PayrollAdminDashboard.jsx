// PayrollAdminDashboard.jsx - Enhanced Beautiful Blue/Indigo Theme
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  IndianRupee,
  Bell,
  FileText,
  BarChart2,
  PieChart,
  Clock,
  Download,
  CheckCircle,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RPieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

/* ---------------------- Dummy data ---------------------- */
const salaryTrend = [
  { month: "Jan", salary: 120000 },
  { month: "Feb", salary: 135000 },
  { month: "Mar", salary: 128000 },
  { month: "Apr", salary: 145000 },
  { month: "May", salary: 160000 },
  { month: "Jun", salary: 155000 },
  { month: "Jul", salary: 170000 },
  { month: "Aug", salary: 180000 },
  { month: "Sep", salary: 175000 },
  { month: "Oct", salary: 190000 },
  { month: "Nov", salary: 200000 },
  { month: "Dec", salary: 210000 },
];

const deptDistribution = [
  { name: "HR", value: 23 },
  { name: "Finance", value: 37 },
  { name: "IT", value: 20 },
  { name: "Operations", value: 20 },
];

const reimbursements = [
  { label: "Jan", amt: 4 },
  { label: "Feb", amt: 6 },
  { label: "Mar", amt: 5 },
  { label: "Apr", amt: 8 },
  { label: "May", amt: 10 },
  { label: "Jun", amt: 7 },
];

/* ---------------------- Enhanced Blue/Indigo (B2) Palette ----------------------
Primary Light:   #C7D2FE   (indigo-200)
Primary:         #6366F1   (indigo-500)
Primary Dark:    #4F46E5   (indigo-600)
Accent:          #EEF2FF   (indigo-50)
Background:      #F8FAFC   (slate-50)
Text Dark:       #1E293B   (slate-800)
Text Light:      #64748B   (slate-500)
-------------------------------------------------------------- */

const PIE_COLORS = ["#6366F1", "#4F46E5", "#818CF8", "#A5B4FC"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function PayrollAdminDashboard() {
  return (
    <div className="min-h-screen w-full p-6 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 font-inter overflow-hidden">
      {/* Enhanced CSS with animations & gradients */}
      <style jsx>{`
        :root {
          --primary-light: #C7D2FE;
          --primary: #6366F1;
          --primary-dark: #4F46E5;
          --accent: #EEF2FF;
          --text-dark: #1E293B;
          --text-muted: #64748B;
          --card-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04);
          --glow: 0 0 20px rgba(99, 102, 241, 0.3);
        }
        .b-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          box-shadow: var(--card-shadow);
          border: 1px solid rgba(99, 102, 241, 0.1);
          transition: all 0.3s ease;
        }
        .b-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--card-shadow), var(--glow);
        }
        .b-pill {
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.15);
          transition: transform 0.2s ease;
        }
        .b-pill:hover {
          transform: scale(1.05);
        }
        .b-button {
          background: linear-gradient(135deg, var(--primary-light), var(--primary));
          color: white;
          border: none;
          transition: all 0.3s ease;
        }
        .b-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }
        .metric-icon {
          background: linear-gradient(135deg, var(--accent), var(--primary-light));
          color: var(--primary-dark);
        }
        @media (max-width: 1024px) {
          .grid-cols-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .grid-cols-3 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .col-span-2 { grid-column: span 1 / span 1; }
        }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* HERO HEADER */}
        <motion.header
          variants={itemVariants}
          className="flex items-center justify-between mb-8 relative overflow-hidden rounded-3xl p-6 b-card"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(79, 70, 229, 0.05))",
          }}
        >
          <div className="flex items-center gap-4">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="data:image/png;base64,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"
              alt="brand-logo"
              className="w-16 h-16 rounded-3xl object-cover shadow-xl"
            />
            <div>
              <h1 className="text-4xl font-medium text-black ">
                Good Morning
              </h1>
              <p className="text-base mt-2 font-light" style={{ color: "var(--text-muted)" }}>
                Take action — the appraisal cycle is around the corner. Prepare payroll & approvals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-6 py-3 b-card rounded-2xl flex items-center gap-2 text-sm font-medium border border-indigo-200"
            >
              <FileText className="w-4 h-4 text-indigo-600" />
              Export Reports
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="px-6 py-3 rounded-2xl text-sm font-semibold b-button shadow-lg flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Send Reminders
            </motion.button>
          </div>
        </motion.header>

        {/* TOP METRICS - Animated Grid */}
        <motion.section
          variants={itemVariants}
          className="grid grid-cols-4 gap-6 mb-8"
        >
          {[
            { title: "Total Employees", value: "289", hint: "This month", icon: <Users className="w-8 h-8" /> },
            { title: "On Leave", value: "08", hint: "Today", icon: <CalendarDays className="w-8 h-8" /> },
            { title: "Payroll Runs", value: "03", hint: "Pending", icon: <IndianRupee className="w-8 h-8" /> },
            { title: "Requests", value: "28", hint: "Open", icon: <Bell className="w-8 h-8" /> },
          ].map((metric, idx) => (
            <MetricCard key={idx} {...metric} delay={idx * 0.1} />
          ))}
        </motion.section>

        {/* MID GRID - Enhanced Cards */}
        <motion.section variants={itemVariants} className="grid grid-cols-3 gap-6 mb-8">
          <div className="p-6 b-card">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>Payroll Categories</h3>
              <span className="text-sm font-medium bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                Payroll Cluster View
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: "Remote", bg: "linear-gradient(135deg,#EEF2FF,#C7D2FE)" },
                { label: "Finance", bg: "linear-gradient(135deg,#F0F9FF,#818CF8)" },
                { label: "India", bg: "linear-gradient(135deg,#EEF2FF,#6366F1)" },
                { label: "USA", bg: "linear-gradient(135deg,#EEF2FF,#4F46E5)" },
              ].map((cat, i) => (
                <CategoryPill key={i} {...cat} delay={i * 0.05} />
              ))}
            </div>
          </div>

          <div className="p-6 b-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>News & Events</h3>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-sm font-medium text-indigo-600 cursor-pointer hover:underline"
              >
                See all
              </motion.span>
            </div>
            <ul className="space-y-4">
              {[
                { title: "Board Meeting", date: "28 Aug", icon: <Clock className="w-5 h-5 text-indigo-600" /> },
                { title: "New Joinee", date: "29 Aug", icon: <UserCheck className="w-5 h-5 text-indigo-500" /> },
                { title: "Holiday - India", date: "31 Aug", icon: <CheckCircle className="w-5 h-5 text-indigo-600" /> },
              ].map((event, i) => (
                <EventRow key={i} {...event} delay={i * 0.1} />
              ))}
            </ul>
          </div>

          <div className="p-6 b-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>Quick Actions</h3>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>Shortcuts</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Payments", icon: <BarChart2 className="w-5 h-5" /> },
                { label: "Security", icon: <PieChart className="w-5 h-5" /> },
                { label: "Reports", icon: <Download className="w-5 h-5" /> },
                { label: "Payslips", icon: <FileText className="w-5 h-5" /> },
              ].map((action, i) => (
                <ActionButton key={i} {...action} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* CHARTS ROW - Enhanced with Legend & Animations */}
        <motion.section variants={itemVariants} className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 p-6 b-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>Monthly Salary Trend</h3>
              <div className="text-sm flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                <TrendingUp className="w-4 h-4" /> Last 12 months
              </div>
            </div>
            <div style={{ height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salaryTrend} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "var(--text-muted)" }} />
                  <YAxis tickFormatter={(v) => `${v / 1000}k`} tickLine={false} axisLine={false} tick={{ fill: "var(--text-muted)" }} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(99, 102, 241, 0.1)" />
                  <Tooltip 
                    contentStyle={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "12px" }}
                    formatter={(val) => new Intl.NumberFormat("en-IN").format(val)} 
                  />
                  <Area type="monotone" dataKey="salary" stroke="#4F46E5" fill="url(#blueGrad)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="p-6 b-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>Salary Cost by Dept</h3>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>Share</div>
            </div>
            <div style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RPieChart>
                  <Pie
                    data={deptDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={50}
                    paddingAngle={5}
                    animationDuration={1000}
                  >
                    {deptDistribution.map((_, idx) => (
                      <Cell key={`cell-${idx}`} fill={PIE_COLORS[idx % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "12px" }}
                  />
                  <Legend wrapperStyle={{ fontSize: "12px", color: "var(--text-dark)" }} />
                </RPieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {deptDistribution.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-2 bg-indigo-50 rounded-xl"
                >
                  <span className="inline-block w-4 h-4 rounded" style={{ background: PIE_COLORS[i] }} />
                  <span style={{ color: "var(--text-dark)" }}>{d.name}</span>
                  <span className="ml-auto font-semibold text-indigo-600">{d.value}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* MINI BAR + PENDING LIST - Enhanced List */}
        <motion.section variants={itemVariants} className="grid grid-cols-3 gap-6">
          <div className="p-6 b-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>Reimbursements (monthly)</h3>
              <div className="text-sm flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                <TrendingUp className="w-4 h-4" /> Last 6 months
              </div>
            </div>
            <div style={{ height: 180 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={reimbursements} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "var(--text-muted)" }} />
                  <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={{ fill: "var(--text-muted)" }} />
                  <Tooltip 
                    contentStyle={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "12px" }}
                  />
                  <Bar dataKey="amt" barSize={24} radius={[10, 10, 0, 0]} fill="url(#barGrad)" />
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity={1} />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-2 p-6 b-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold" style={{ color: "var(--text-dark)" }}>Pending Payroll Approvals</h3>
              <div className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">4 items</div>
            </div>
            <div className="space-y-4">
              {["Rohit Sharma", "Kavya Menon", "Harish Kumar", "Megha Rao"].map((name, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-between gap-4 bg-linear-to-r from-indigo-50 to-blue-50 p-5 rounded-2xl border border-indigo-200"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg"
                    >
                      <Users className="w-6 h-6 text-indigo-600" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-lg" style={{ color: "var(--text-dark)" }}>{name}</div>
                      <div className="text-sm" style={{ color: "var(--text-muted)" }}>Software Engineer • Finance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                    >
                      Details
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm bg-linear-to-r from-indigo-500 to-indigo-600 text-white rounded-xl shadow-md transition"
                    >
                      Approve
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FOOTER STATS - Polished Footer */}
        <motion.footer variants={itemVariants} className="grid grid-cols-4 gap-6">
          {[
            { title: "Salary Disbursed", subtitle: "Completed", value: "₹ 5,23,000", icon: <CheckCircle className="w-6 h-6 text-green-600" /> },
            { title: "Pending Reimbursements", subtitle: "Open items", value: "12", icon: <IndianRupee className="w-6 h-6 text-orange-500" /> },
            { title: "Statutory Reports", subtitle: "Last run", value: "Nov 12", icon: <FileText className="w-6 h-6 text-indigo-600" /> },
            { title: "Upcoming Runs", subtitle: "Next payroll", value: "2 days", icon: <Clock className="w-6 h-6 text-gray-600" /> },
          ].map((stat, idx) => (
            <FooterStat key={idx} {...stat} delay={idx * 0.05} />
          ))}
        </motion.footer>
      </motion.div>
    </div>
  );
}

/* Enhanced Helper Components with Animations */
function MetricCard({ title, value, hint, icon, delay = 0 }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className="p-6 b-card flex flex-col justify-between h-32"
    >
      <div className="flex justify-between items-start">
        <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{title}</p>
        <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">● Live</div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-3xl font-bold"
            style={{ color: "var(--text-dark)" }}
          >
            {value}
          </motion.h2>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{hint}</p>
        </div>
        <div className="p-2 rounded-2xl b-pill metric-icon">{icon}</div>
      </div>
    </motion.div>
  );
}

function CategoryPill({ label, bg, delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
        style={{ background: bg }}
      >
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          {/* Subtle icon or shape */}
        </div>
      </div>
      <p className="mt-3 text-sm font-medium" style={{ color: "var(--text-dark)" }}>{label}</p>
    </motion.div>
  );
}

function ActionButton({ label, icon, delay = 0 }) {
  return (
    <motion.button
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
      className="p-4 bg-linear-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl flex items-center gap-3 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-8 h-8 bg-indigo-200/50 rounded-xl flex items-center justify-center">{icon}</div>
      <div className="text-sm font-semibold" style={{ color: "var(--text-dark)" }}>{label}</div>
    </motion.button>
  );
}

function EventRow({ title, date, icon, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white transition"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-indigo-200 flex items-center justify-center">{icon}</div>
        <span className="text-sm font-medium" style={{ color: "var(--text-dark)" }}>{title}</span>
      </div>
      <span className="text-sm font-medium px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">{date}</span>
    </motion.li>
  );
}

function FooterStat({ title, subtitle, value, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-5 b-card flex items-center gap-4 h-20"
    >
      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-100 to-blue-100 flex items-center justify-center shadow-inner">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm" style={{ color: "var(--text-muted)" }}>{title}</div>
        <div className="font-bold text-lg" style={{ color: "var(--text-dark)" }}>
          {value} <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>• {subtitle}</span>
        </div>
      </div>
    </motion.div>
  );
}