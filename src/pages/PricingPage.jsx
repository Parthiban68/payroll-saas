import { Check, X } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen w-full px-4 py-10">

            {/* ================= Toggle + Heading ================= */}
            <div className="max-w-4xl mx-auto flex items-center justify-center mb-10 px-4">

                {/* Toggle */}
                <div className="bg-white/70 backdrop-blur-xl shadow px-2 py-1 rounded-full flex items-center gap-1 border border-white/60">
                    <button className="px-5 py-1.5 rounded-full bg-black text-white text-sm font-medium shadow">
                        Annual
                    </button>
                    <button className="px-5 py-1.5 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
                        Monthly
                    </button>
                </div>
            </div>

            {/* ================= Pricing Cards ================= */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

                {/* ============ Basic Plan ============ */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-200 shadow-xl hover:shadow-2xl transition">

                    <span className="absolute top-5 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Basic
                    </span>

                    <h2 className="text-2xl font-semibold text-gray-900">Recruit Basic</h2>

                    <div className="mt-4">
                        <div className="text-4xl font-bold flex items-end gap-1 text-gray-900">
                            $17
                            <span className="text-sm font-medium text-gray-500">/mo</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">$228 billed yearly</p>
                    </div>

                    <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                        Perfect for small teams starting out with payroll and HR essentials.
                    </p>

                    {/* Features */}
                    <ul className="mt-6 space-y-3 text-sm">
                        {[
                            "Core HR features",
                            "Employee records",
                            "Basic analytics",
                            "Team messaging",
                            "Attendance tracking",
                            "Admin role assignment",
                        ].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-800">
                                <Check className="w-4 h-4 text-green-600" />
                                {f}
                            </li>
                        ))}

                        {[
                            "Email support",
                            "Advanced UI experience",
                        ].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-400">
                                <X className="w-4 h-4" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-8 w-full py-3 rounded-full bg-black text-white font-medium  transition">
                        Start Free Trial
                    </button>
                </div>

                {/* ============ Talent Pro (Highlighted) ============ */}
                <div className="relative bg-black text-white rounded-3xl p-8 shadow-2xl border-2 border-yellow-300 transform scale-105 hover:scale-[1.07] transition">

                    <span className="absolute -top-3 right-5 bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-semibold shadow">
                        Save 27%
                    </span>

                    <h2 className="text-2xl font-semibold">Talent Pro</h2>

                    <div className="mt-4">
                        <div className="flex items-end gap-2">
                            <span className="text-lg line-through text-gray-400">$26</span>
                            <span className="text-4xl font-bold">$19</span>
                            <span className="text-sm font-medium text-gray-300">/mo</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-1">$228 billed yearly</p>
                    </div>

                    <p className="text-gray-300 text-sm mt-6 leading-relaxed">
                        Best choice for growing companies needing automation and speed.
                    </p>

                    <ul className="mt-6 space-y-3 text-sm">
                        {[
                            "Core HR features",
                            "Employee records",
                            "Advanced analytics",
                            "Team messaging",
                            "Attendance tracking",
                            "Admin roles",
                            "Email support",
                            "Optimized UI experience",
                        ].map((f, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <Check className="w-4 h-4 text-green-400" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-8 w-full py-3 rounded-full bg-yellow-300 text-black font-semibold shadow hover:bg-yellow-400 transition">
                        Start Free Trial
                    </button>
                </div>

                {/* ============ HR Master ============ */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-yellow-200 shadow-xl hover:shadow-2xl transition">

                    <span className="absolute top-5 right-6 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                    </span>

                    <h2 className="text-2xl font-semibold text-gray-900">HR Master</h2>

                    <div className="mt-4">
                        <div className="text-4xl font-bold flex items-end gap-1 text-gray-900">
                            $34
                            <span className="text-sm font-medium text-gray-500">/mo</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">$348 billed yearly</p>
                    </div>

                    <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                        For large teams needing the highest level of control and visibility.
                    </p>

                    <ul className="mt-6 space-y-3 text-sm">
                        {[
                            "Core HR features",
                            "Employee records",
                            "Advanced reporting",
                            "Team messaging",
                            "Attendance tracking",
                            "Admin roles",
                            "Email support",
                            "Full UI customization",
                        ].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-800">
                                <Check className="w-4 h-4 text-green-600" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <button className="mt-8 w-full py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition">
                        Start Free Trial
                    </button>
                </div>

            </div>
        </div>
    );
}
