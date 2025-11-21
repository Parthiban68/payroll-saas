// src/components/PeopleTab.jsx
import React, { useMemo, useState, useRef, useEffect } from "react";
import { HiOutlinePlus, HiEye, HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PeopleTab.jsx
 * - Side drawer (adaptive widths): sm:100% md:480 lg:560 xl:640 2xl:720
 * - Responsive table (desktop) + stacked mobile rows
 * - Multi-step add form (grid-based) inside drawer
 * - View drawer shows sections
 * - Search (client-side, non-destructive) + pagination
 *
 * Requirements:
 * - TailwindCSS
 * - react-icons
 * - framer-motion (optional: drawer will still work without special CSS)
 */

// ---------- sample initial data ----------
const initialPeople = [
    {
        id: 1,
        name: "Katy Fuller",
        job: "Fullstack Engineer",
        dept: "Engineering",
        site: "Miami",
        salary: "$1,500",
        start: "Oct 18, 2023",
        cycle: "Hired",
        status: "Absent",
        img: "https://randomuser.me/api/portraits/women/45.jpg",
        email: "katy@company.com",
        phone: "+1-234-567-890",
        address: "123 Miami Ave",
        dob: "1990-05-15",
        bankName: "Bank of America",
        accountNumber: "1234567890",
        ifsc: "BOFAUS3NXXX",
        emergencyName: "Jane Fuller",
        emergencyRelation: "Sister",
        emergencyPhone: "+1-234-567-891",
    },
    // more rows
    ...[
        ["Harry Bender", "Head of Design", "Product", "Rome", "$1,350", "Mar 13, 2023", "Hired"],
        ["Jonathan Kelly", "Mobile Lead", "Product", "Kyiv", "$2,600", "Nov 4, 2023", "Employed"],
        ["Billie Wright", "Sales Manager", "Operations", "Ottawa", "$900", "Sep 4, 2021", "Employed"],
        ["Sarah Page", "Network Engineer", "Tech", "Sao Paulo", "$1,000", "Feb 21, 2023", "Hired"],
        ["Erica Wyatt", "Head of Design", "Product", "London", "$3,100", "Aug 2, 2024", "Employed"],
    ].map((x, i) => ({
        id: i + 2,
        name: x[0],
        job: x[1],
        dept: x[2],
        site: x[3],
        salary: x[4],
        start: x[5],
        cycle: x[6],
        status: "Invited",
        img: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${i + 3}.jpg`,
        email: `employee${i + 2}@company.com`,
        phone: `+1-234-567-${i + 890}`,
        address: `${x[3]} Address`,
        dob: "1990-01-01",
        bankName: "Sample Bank",
        accountNumber: "9876543210",
        ifsc: "SAMPLEINXXX",
        emergencyName: "Emergency Contact",
        emergencyRelation: "Spouse",
        emergencyPhone: `+1-234-567-${i + 891}`,
    })),
];

// ---------- drawer width classes (Option 1: adaptive) ----------
const drawerWidths = "w-full md:w-[480px] lg:w-[560px] xl:w-[640px] 2xl:w-[720px]";

export default function PeopleTab() {
    // master people list (never mutate from search)
    const [people, setPeople] = useState(initialPeople);

    // UI states
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // drawer states
    const [addOpen, setAddOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    // form multi-step state
    const steps = ["Professional", "Personal", "Bank", "Emergency"];
    const [step, setStep] = useState(1);

    // Prevent background scroll when drawer is open
    useEffect(() => {
        if (addOpen || viewOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [addOpen, viewOpen]);


    const [form, setForm] = useState({
        // Professional
        name: "",
        job: "",
        dept: "",
        site: "",
        salary: "",
        start: "",
        cycle: "",
        // Personal
        email: "",
        phone: "",
        address: "",
        dob: "",
        img: "",
        // Bank
        bankName: "",
        accountNumber: "",
        ifsc: "",
        // Emergency
        emergencyName: "",
        emergencyRelation: "",
        emergencyPhone: "",
    });

    // helpers: reset form
    const resetForm = () =>
        setForm({
            name: "",
            job: "",
            dept: "",
            site: "",
            salary: "",
            start: "",
            cycle: "",
            email: "",
            phone: "",
            address: "",
            dob: "",
            img: "",
            bankName: "",
            accountNumber: "",
            ifsc: "",
            emergencyName: "",
            emergencyRelation: "",
            emergencyPhone: "",
        });

    // derived filtered people (search)
    const filtered = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return people;
        return people.filter((p) =>
            `${p.name} ${p.job} ${p.dept} ${p.site}`.toLowerCase().includes(q)
        );
    }, [people, searchQuery]);

    // pagination derived
    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / rowsPerPage));
    useEffect(() => {
        if (page > totalPages) setPage(totalPages);
    }, [totalPages, page]);

    const pageItems = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        return filtered.slice(start, start + rowsPerPage);
    }, [filtered, page, rowsPerPage]);

    // input change
    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    // add employee submit
    const addEmployee = (e) => {
        e.preventDefault();
        const newEmp = {
            id: Date.now(),
            ...form,
            status: "Hired",
            img: form.img || "https://randomuser.me/api/portraits/men/3.jpg",
        };
        setPeople((p) => [...p, newEmp]);
        resetForm();
        setStep(1);
        setAddOpen(false);
        // navigate to last page
        const newTotal = totalItems + 1;
        const newTotalPages = Math.max(1, Math.ceil(newTotal / rowsPerPage));
        setPage(newTotalPages);
    };

    // open view drawer
    const openView = (emp) => {
        setSelected(emp);
        setViewOpen(true);
    };

    // accessibility: close drawers on ESC
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                setAddOpen(false);
                setViewOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // small UI helpers
    const next = () => setStep((s) => Math.min(4, s + 1));
    const prev = () => setStep((s) => Math.max(1, s - 1));
    const goToPage = (n) => setPage(Math.min(Math.max(1, n), totalPages));

    return (
        <div className="w-full min-h-screen p-4 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
            <div className="max-w-[1300px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">People</h2>
                        <p className="text-indigo-600 mt-1">Manage employees — responsive and enterprise-ready</p>
                    </div>

                    <div className="flex w-full md:w-auto items-center gap-3">
                        <div className="relative flex-1 md:flex-none md:w-80">
                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" />
                            <input
                                className="w-full pl-10 pr-4 py-2 rounded-2xl border border-indigo-200 bg-white text-sm focus:ring-2 focus:ring-indigo-300"
                                placeholder="Search by name, role, department or site..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setPage(1);
                                }}
                            />
                        </div>

                        <button
                            onClick={() => {
                                resetForm();
                                setStep(1);
                                setAddOpen(true);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow"
                        >
                            <HiOutlinePlus /> Add employee
                        </button>
                    </div>
                </div>

                {/* Table Card */}
                <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-indigo-100">
                            <thead className="bg-indigo-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase hidden md:table-cell">Job title</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase hidden md:table-cell">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase hidden md:table-cell">Site</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-indigo-700 uppercase hidden md:table-cell">Salary</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase hidden md:table-cell">Start date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-indigo-700 uppercase hidden md:table-cell">Lifecycle</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-indigo-700 uppercase">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-indigo-50">
                                {pageItems.length === 0 ? (
                                    <tr>
                                        <td colSpan={8} className="px-6 py-12 text-center text-indigo-500">
                                            <div className="flex flex-col items-center gap-3">
                                                <FiSearch className="w-12 h-12 opacity-40" />
                                                <p>No employees found</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    pageItems.map((p) => (
                                        <tr key={p.id} className="hover:bg-indigo-50 transition-colors">
                                            <td className="px-6 py-4 align-middle">
                                                <div className="flex items-center gap-3">
                                                    <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full object-cover shadow" />
                                                    <div>
                                                        <div className="text-sm font-semibold text-gray-800">{p.name}</div>
                                                        <div className="text-xs text-indigo-600 md:hidden">{p.job} • {p.dept}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 hidden md:table-cell text-sm text-gray-700">{p.job}</td>
                                            <td className="px-6 py-4 hidden md:table-cell text-sm text-gray-700">{p.dept}</td>
                                            <td className="px-6 py-4 hidden md:table-cell text-sm text-gray-700">{p.site}</td>
                                            <td className="px-6 py-4 hidden md:table-cell text-right text-sm font-medium text-indigo-600">{p.salary}</td>
                                            <td className="px-6 py-4 hidden md:table-cell text-sm text-gray-700">{p.start}</td>
                                            <td className="px-6 py-4 hidden md:table-cell text-sm text-gray-700">{p.cycle}</td>

                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => openView(p)}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-sm"
                                                >
                                                    <HiEye /> View
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 bg-indigo-50 border-t border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-4 text-sm text-indigo-700">
                            <div className="flex items-center gap-2">
                                <span>Rows per page</span>
                                <select
                                    value={rowsPerPage}
                                    onChange={(e) => {
                                        setRowsPerPage(Number(e.target.value));
                                        setPage(1);
                                    }}
                                    className="px-2 py-1 rounded border border-indigo-200 bg-white"
                                >
                                    {[5, 10, 20].map((n) => (
                                        <option key={n} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                Showing <span className="font-medium">{Math.min((page - 1) * rowsPerPage + 1, totalItems)}</span> -
                                <span className="font-medium"> {Math.min(page * rowsPerPage, totalItems)}</span> of <span className="font-medium">{totalItems}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => goToPage(page - 1)}
                                disabled={page === 1}
                                className="px-3 py-1 rounded-xl border border-indigo-200 bg-white disabled:opacity-50"
                            >
                                Prev
                            </button>

                            {/* page numbers dynamic (show up to 7, with ellipsis) */}
                            <div className="flex items-center gap-1">
                                {generatePageNumbers(page, totalPages).map((num, idx) =>
                                    num === "dots" ? (
                                        <span key={`dots-${idx}`} className="px-2 text-indigo-400">…</span>
                                    ) : (
                                        <button
                                            key={num}
                                            onClick={() => goToPage(num)}
                                            className={`px-3 py-1 rounded-xl text-sm ${num === page ? "bg-indigo-600 text-white" : "bg-white border border-indigo-200 text-indigo-700"}`}
                                        >
                                            {num}
                                        </button>
                                    )
                                )}
                            </div>

                            <button
                                onClick={() => goToPage(page + 1)}
                                disabled={page === totalPages}
                                className="px-3 py-1 rounded-xl border border-indigo-200 bg-white disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== ADD DRAWER (Right side) ========== */}
            <AnimatePresence>
                {addOpen && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.22 }}
                        className={`fixed inset-y-0 right-0 z-50 ${drawerWidths} bg-white shadow-2xl border-l border-indigo-100 flex flex-col`}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* header */}
                        <div className="px-6 py-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Add Employee</h3>
                                <p className="text-sm text-gray-500">Fill the details — step {step} / {steps.length}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        setAddOpen(false);
                                        resetForm();
                                        setStep(1);
                                    }}
                                    className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
                                    aria-label="close"
                                >
                                    <HiX className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* stepper */}
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between gap-3">
                                {steps.map((s, i) => {
                                    const idx = i + 1;
                                    return (
                                        <div key={s} className="flex-1 flex flex-col items-center">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${idx < step ? "bg-indigo-600 text-white" : idx === step ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                                                {idx < step ? "✓" : idx}
                                            </div>
                                            <div className="text-xs text-center mt-2">{s}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* body (scroll inside) */}
                        <div className="px-6 py-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 220px)" }}>
                            <form onSubmit={addEmployee} className="space-y-6">
                                {/* Responsive grid: 1 / 2 / 3 cols */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Step 1 */}
                                    {step === 1 && (
                                        <>
                                            <FormInput label="Full Name" name="name" value={form.name} onChange={onChange} required />
                                            <FormInput label="Job Title" name="job" value={form.job} onChange={onChange} required />
                                            <FormInput label="Department" name="dept" value={form.dept} onChange={onChange} required />
                                            <FormInput label="Site" name="site" value={form.site} onChange={onChange} />
                                            <FormInput label="Salary" name="salary" value={form.salary} onChange={onChange} />
                                            <FormInput label="Start Date" name="start" type="date" value={form.start} onChange={onChange} />
                                            <div className="sm:col-span-2 lg:col-span-3">
                                                <label className="block text-sm text-gray-600 mb-1">Lifecycle</label>
                                                <select name="cycle" value={form.cycle} onChange={onChange} className="w-full p-3 border rounded-lg">
                                                    <option value="">Select lifecycle</option>
                                                    <option>Hired</option>
                                                    <option>Employed</option>
                                                    <option>Invited</option>
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {/* Step 2 */}
                                    {step === 2 && (
                                        <>
                                            <FormInput label="Email" name="email" type="email" value={form.email} onChange={onChange} />
                                            <FormInput label="Phone" name="phone" value={form.phone} onChange={onChange} />
                                            <FormInput label="Address" name="address" value={form.address} onChange={onChange} />
                                            <FormInput label="Date of Birth" name="dob" type="date" value={form.dob} onChange={onChange} />
                                            <FormInput label="Profile Image URL" name="img" value={form.img} onChange={onChange} />
                                        </>
                                    )}

                                    {/* Step 3 */}
                                    {step === 3 && (
                                        <>
                                            <FormInput label="Bank Name" name="bankName" value={form.bankName} onChange={onChange} />
                                            <FormInput label="Account Number" name="accountNumber" value={form.accountNumber} onChange={onChange} />
                                            <FormInput label="IFSC" name="ifsc" value={form.ifsc} onChange={onChange} />
                                        </>
                                    )}

                                    {/* Step 4 */}
                                    {step === 4 && (
                                        <>
                                            <FormInput label="Emergency Contact" name="emergencyName" value={form.emergencyName} onChange={onChange} />
                                            <FormInput label="Relation" name="emergencyRelation" value={form.emergencyRelation} onChange={onChange} />
                                            <FormInput label="Emergency Phone" name="emergencyPhone" value={form.emergencyPhone} onChange={onChange} />
                                        </>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* footer */}
                        <div className="px-6 py-4 flex items-center justify-between gap-3">
                            <div className="text-sm text-gray-600">Step {step} of {steps.length}</div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => {
                                        if (step === 1) {
                                            setAddOpen(false);
                                            resetForm();
                                        } else prev();
                                    }}
                                    className="px-4 py-2 rounded-lg border border-indigo-200 bg-white text-indigo-700"
                                >
                                    Back
                                </button>

                                {step < steps.length ? (
                                    <button onClick={next} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Next</button>
                                ) : (
                                    <button onClick={addEmployee} className="px-4 py-2 rounded-lg bg-green-600 text-white">Create</button>
                                )}
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* ========== VIEW DRAWER ========== */}
            <AnimatePresence>
                {viewOpen && selected && (
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.22 }}
                        className={`fixed inset-y-0 right-0 z-50 ${drawerWidths} bg-white shadow-2xl border-l border-indigo-100 flex flex-col`}
                        role="dialog"
                        aria-modal="true"
                    >
                        {/* HEADER */}
                        <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                                    {selected.name}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium mt-0.5">
                                    {selected.job} • {selected.dept}
                                </p>
                            </div>

                            <button
                                onClick={() => setViewOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition"
                            >
                                <HiX className="w-6 h-6" />
                            </button>
                        </div>

                        {/* BODY */}
                        <div
                            className="px-6 py-6 overflow-y-auto space-y-8"
                            style={{ maxHeight: "calc(100vh - 130px)" }}
                        >

                            {/* PROFILE CARD */}
                            <div className="flex items-start gap-6 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <img
                                    src={selected.img}
                                    alt={selected.name}
                                    className="w-28 h-28 rounded-full object-cover shadow-md"
                                />

                                <div className="flex-1">
                                    <div className="text-xl font-semibold text-gray-900">{selected.name}</div>

                                    <p className="text-indigo-600 font-medium mt-1">{selected.job}</p>

                                    <div className="mt-3 flex gap-2">
                                        <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                                            {selected.cycle}
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                                            Employee
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* PROFESSIONAL SECTION */}
                            <PremiumSection title="Professional Info">
                                <Detail label="Department" value={selected.dept} />
                                <Detail label="Site" value={selected.site} />
                                <Detail label="Salary" value={selected.salary} />
                                <Detail label="Joining Date" value={selected.start} />
                                <Detail label="Lifecycle" value={selected.cycle} />
                            </PremiumSection>

                            {/* PERSONAL SECTION */}
                            <PremiumSection title="Personal Details">
                                <Detail label="Email" value={selected.email} />
                                <Detail label="Phone" value={selected.phone} />
                                <Detail label="Address" value={selected.address} />
                                <Detail label="Date of Birth" value={selected.dob} />
                            </PremiumSection>

                            {/* BANK + EMERGENCY */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <PremiumSection title="Bank Details">
                                    <Detail label="Bank Name" value={selected.bankName} />
                                    <Detail label="Account Number" value={selected.accountNumber} />
                                    <Detail label="IFSC Code" value={selected.ifsc} />
                                </PremiumSection>

                                <PremiumSection title="Emergency Contact">
                                    <Detail label="Full Name" value={selected.emergencyName} />
                                    <Detail label="Relation" value={selected.emergencyRelation} />
                                    <Detail label="Phone" value={selected.emergencyPhone} />
                                </PremiumSection>
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                            <button
                                onClick={() => setViewOpen(false)}
                                className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 transition"
                            >
                                Close
                            </button>
                        </div>

                    </motion.aside>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ---------- Small reusable UI pieces ---------- */

function FormInput({ label, name, type = "text", value, onChange, required = false }) {
    return (
        <label className="block">
            <div className="text-sm text-gray-600 mb-1 font-medium">{label}{required ? " *" : ""}</div>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-300"
            />
        </label>
    );
}

function Section({ title, children }) {
    return (
        <div className="mb-6">
            <h4 className="text-md font-semibold text-indigo-800 mb-3">{title}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-3 py-3 bg-white rounded-lg border border-indigo-50">
                {children}
            </div>
        </div>
    );
}

function Detail({ label, value }) {
    return (
        <div>
            <div className="text-xs text-gray-500">{label}</div>
            <div className="text-sm font-medium text-gray-800">{value || "-"}</div>
        </div>
    );
}

/* ---------- Utility: generate visible page numbers with ellipsis ---------- */
function generatePageNumbers(current, total) {
    // show dynamic pages, with ellipsis
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages = [];
    if (current <= 4) {
        pages.push(1, 2, 3, 4, 5, "dots", total);
        return pages;
    }
    if (current >= total - 3) {
        pages.push(1, "dots", total - 4, total - 3, total - 2, total - 1, total);
        return pages;
    }
    pages.push(1, "dots", current - 1, current, current + 1, "dots", total);
    return pages;
}


const PremiumSection = ({ title, children }) => (
    <div className="p-6 border border-gray-100 bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-sm">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            {title}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {children}
        </div>
    </div>
);
