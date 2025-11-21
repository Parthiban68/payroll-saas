// PayrollAdminDashboard.jsx
import React from "react";
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

/* ---------------------- Yellow (Y1) Palette ----------------------
Primary Light:  #FDE68A  (yellow-300)
Primary:        #FCD34D  (yellow-400)
Primary Dark:   #FBBF24  (yellow-500)
Accent:         #FFEDD5  (amber-100)
Text Dark:      #374151  (gray-700)
Text Light:     #6B7280  (gray-500)
-------------------------------------------------------------- */

const COLORS = ["#FCD34D", "#FBBF24", "#FDE68A", "#FBBF24"];

export default function PayrollAdminDashboard() {
  return (
    <div className="min-h-screen w-full p-6 bg-[#FFF9ED] font-inter" style={{ color: "var(--text-dark)" }}>
      {/* inline CSS variables & small custom rules */}
      <style>{`
        :root{
          --primary-light:#FDE68A;
          --primary:#FCD34D;
          --primary-dark:#FBBF24;
          --accent:#FFEDD5;
          --text-dark:#374151;
          --text-muted:#6B7280;
          --card-shadow: 0 8px 24px rgba(253, 224, 71, 0.08);
        }
        .y-card { background: #ffffff; border-radius: 14px; box-shadow: var(--card-shadow); }
        .y-pill { box-shadow: 0 6px 18px rgba(251, 191, 36, 0.06); }
        .y-button { background: linear-gradient(90deg, var(--primary-light), var(--primary)); color: #1f2937; }
        /* small responsive tweaks */
        @media (max-width: 1024px) {
          .grid-cols-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .grid-cols-3 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
          .col-span-2 { grid-column: span 1 / span 1; }
        }
      `}</style>

      {/* HEADER */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* Using the exact uploaded path as the image source (per request) */}
          <img
            src="data:image/png;base64,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"
            alt="brand-logo"
            className="w-14 h-14 rounded-2xl object-cover shadow"
            style={{ borderRadius: 12 }}
          />
          <div>
            <h1 className="text-3xl font-semibold" style={{ color: "var(--text-dark)" }}>
              Good Morning
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Take action — the appraisal cycle is around the corner. Prepare payroll & approvals.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 y-card rounded-lg flex items-center gap-2 text-sm">
            <FileText className="w-4 h-4 text-gray-600" />
            Export Reports
          </button>

          <button
            className="px-4 py-2 rounded-lg text-sm font-medium y-button shadow"
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 5v14" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Send Reminders
          </button>
        </div>
      </header>

      {/* TOP METRICS */}
      <section className="grid grid-cols-4 gap-4 mb-6">
        <MetricCard title="Total Employees" value="289" hint="This month" icon={<Users className="w-6 h-6 text-[#FBBF24]" />} />
        <MetricCard title="On Leave" value="08" hint="Today" icon={<CalendarDays className="w-6 h-6 text-[#FCD34D]" />} />
        <MetricCard title="Payroll Runs" value="03" hint="Pending" icon={<IndianRupee className="w-6 h-6 text-[#FBBF24]" />} />
        <MetricCard title="Requests" value="28" hint="Open" icon={<Bell className="w-6 h-6 text-[#FCD34D]" />} />
      </section>

      {/* MID GRID */}
      <section className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-5 y-card rounded-2xl border border-[#F5EFD3]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-dark)" }}>
              Payroll Categories
            </h3>

            <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
              Payroll Cluster View
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4 text-center">
            <CategoryPill label="Remote" bg="linear-gradient(135deg,#FEF3C7,#FDE68A)" />
            <CategoryPill label="Finance" bg="linear-gradient(135deg,#FFF7ED,#FCD34D)" />
            <CategoryPill label="India" bg="linear-gradient(135deg,#FFF7ED,#FDE68A)" />
            <CategoryPill label="USA" bg="linear-gradient(135deg,#FFF7ED,#FBBF24)" />
          </div>
        </div>


        <div className="p-5 y-card rounded-2xl border border-[#F5EFD3]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-dark)" }}>News & Events</h3>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>See all</span>
          </div>

          <ul className="space-y-3 text-sm">
            <EventRow title="Board Meeting" date="28 Aug" icon={<Clock className="w-4 h-4 text-[#FBBF24]" />} />
            <EventRow title="New Joinee" date="29 Aug" icon={<UserCheck className="w-4 h-4 text-[#FCD34D]" />} />
            <EventRow title="Holiday - India" date="31 Aug" icon={<CheckCircle className="w-4 h-4 text-[#FBBF24]" />} />
          </ul>
        </div>

        <div className="p-5 y-card rounded-2xl border border-[#F5EFD3]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-dark)" }}>Quick Actions</h3>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>Shortcuts</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <ActionButton label="Payments" icon={<BarChart2 className="w-4 h-4" />} />
            <ActionButton label="Security" icon={<PieChart className="w-4 h-4" />} />
            <ActionButton label="Reports" icon={<Download className="w-4 h-4" />} />
            <ActionButton label="Payslips" icon={<FileText className="w-4 h-4" />} />
          </div>
        </div>
      </section>

      {/* CHARTS ROW */}
      <section className="grid grid-cols-3 gap-4 mb-6">
        {/* Area Chart - Salary Trend (col-span-2) */}
        <div className="col-span-2 p-5 y-card rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-dark)" }}>Monthly Salary Trend</h3>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>Last 12 months</div>
          </div>

          <div style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salaryTrend} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="salaryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FCD34D" stopOpacity={0.32} />
                    <stop offset="95%" stopColor="#FCD34D" stopOpacity={0.06} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickFormatter={(v) => `${v / 1000}k`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip formatter={(val) => new Intl.NumberFormat("en-IN").format(val)} />
                <Area type="monotone" dataKey="salary" stroke="#FBBF24" fill="url(#salaryGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart - Department Distribution */}
        <div className="p-5 y-card rounded-2xl border border-[#F5EFD3]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-dark)" }}>Salary Cost by Dept</h3>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>Share</div>
          </div>

          <div style={{ height: 220 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RPieChart>
                <Pie
                  data={deptDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  innerRadius={40}
                  paddingAngle={3}
                  labelLine={false}
                >
                  {deptDistribution.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RPieChart>
            </ResponsiveContainer>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {deptDistribution.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded" style={{ background: COLORS[i] }} />
                  <span className="text-gray-700">{d.name}</span>
                  <span className="ml-auto text-gray-500">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MINI BAR + PENDING LIST */}
      <section className="grid grid-cols-3 gap-4">
        <div className="p-5 y-card rounded-2xl border border-[#F5EFD3]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-dark)" }}>Reimbursements (monthly)</h3>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>Last 6 months</div>
          </div>

          <div style={{ height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reimbursements} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <XAxis dataKey="label" tickLine={false} axisLine={false} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="amt" barSize={18} radius={[6, 6, 0, 0]} fill="#FBBF24" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-2 p-5 y-card rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold" style={{ color: "var(--text-dark)" }}>Pending Payroll Approvals</h3>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>4 items</div>
          </div>

          <div className="space-y-3">
            {["Rohit Sharma", "Kavya Menon", "Harish Kumar", "Megha Rao"].map((name, idx) => (
              <div key={idx} className="flex items-center justify-between gap-4 bg-[#FFFDF7] p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center" style={{ boxShadow: "0 6px 16px rgba(251, 191, 36, 0.06)" }}>
                    <Users className="w-5 h-5 text-[#FBBF24]" />
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: "var(--text-dark)" }}>{name}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>Software Engineer • Finance</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 text-sm bg-white border rounded-lg">Details</button>
                  <button className="px-3 py-1 text-sm bg-[#FBBF24] text-white rounded-lg">Approve</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER STATS */}
      <footer className="mt-6 grid grid-cols-4 gap-4">
        <FooterStat title="Salary Disbursed" subtitle="Completed" value="₹ 5,23,000" icon={<CheckCircle className="w-5 h-5 text-green-600" />} />
        <FooterStat title="Pending Reimbursements" subtitle="Open items" value="12" icon={<IndianRupee className="w-5 h-5 text-orange-500" />} />
        <FooterStat title="Statutory Reports" subtitle="Last run" value="Nov 12" icon={<FileText className="w-5 h-5 text-[#FCD34D]" />} />
        <FooterStat title="Upcoming Runs" subtitle="Next payroll" value="2 days" icon={<Clock className="w-5 h-5 text-gray-600" />} />
      </footer>
    </div>
  );
}

/* ---------------------- Small helper components ---------------------- */

function MetricCard({ title, value, hint, icon }) {
  return (
    <div className="p-5 y-card rounded-2xl flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>{title}</p>
        <div className="text-xs text-green-500">● Live</div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: "var(--text-dark)" }}>{value}</h2>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{hint}</p>
        </div>
        <div className="p-3 rounded-lg y-pill">{icon}</div>
      </div>
    </div>
  );
}

function CategoryPill({ label, bg = "linear-gradient(90deg,#fff,#fff)" }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: bg }} />
      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>{label}</p>
    </div>
  );
}

function ActionButton({ label, icon }) {
  return (
    <button className="p-3 bg-[#FFFBEE] border border-[#FFF2CC] rounded-xl flex items-center gap-2 hover:shadow">
      <div className="w-6 h-6 flex items-center justify-center text-gray-700">{icon}</div>
      <div className="text-sm" style={{ color: "var(--text-dark)" }}>{label}</div>
    </button>
  );
}

function EventRow({ title, date, icon }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-[#FFF8E1] flex items-center justify-center">{icon}</div>
        <span className="text-sm" style={{ color: "var(--text-dark)" }}>{title}</span>
      </div>
      <span className="text-sm" style={{ color: "var(--text-muted)" }}>{date}</span>
    </li>
  );
}

function FooterStat({ title, subtitle, value, icon }) {
  return (
    <div className="p-4 y-card rounded-2xl flex items-center gap-4">
      <div className="w-11 h-11 rounded-lg bg-[#FFF8E6] flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-sm" style={{ color: "var(--text-muted)" }}>{title}</div>
        <div className="font-medium" style={{ color: "var(--text-dark)" }}>{value} <span className="text-xs" style={{ color: "var(--text-muted)" }}> • {subtitle}</span></div>
      </div>
    </div>
  );
}
