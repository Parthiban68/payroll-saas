import { Users, UserPlus, Laptop } from "lucide-react";

export default function WelcomeSection() {
    return (
        <div className="w-full px-4 md:px-8 rounded-xl">

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                Welcome in, <span className="font-bold">Nixtio</span>
            </h1>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                {/* LEFT SECTION */}
                <div className="flex flex-col gap-4">

                    {/* Labels — mobile scroll */}
                    <div className="flex gap-6 text-gray-600 text-sm overflow-x-auto whitespace-nowrap pb-1">
                        <span>Interviews</span>
                        <span>Hired</span>
                        <span>Project time</span>
                        <span>Output</span>
                    </div>

                    {/* PROGRESS ROW */}
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-4 -mt-2">

                        {/* Black Pill */}
                        <div className="px-5 py-1 bg-black text-white rounded-full text-sm">
                            15%
                        </div>

                        {/* Yellow Pill */}
                        <div className="px-5 py-1 bg-yellow-300 rounded-full text-sm">
                            15%
                        </div>

                        {/* Striped Progress */}
                        <div className="
                            w-full md:w-72 h-8 rounded-full border border-gray-400 
                            bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_5px,#dcdcdc_5px,#dcdcdc_10px)]
                            flex items-center px-4 text-sm text-gray-700
                        ">
                            60%
                        </div>

                        {/* Output small pill */}
                        <div className="px-5 py-1 border border-gray-400 rounded-full text-sm">
                            10%
                        </div>
                    </div>
                </div>

                {/* RIGHT STATS SECTION */}
                <div className="
                    grid grid-cols-3 gap-4 md:flex md:items-center md:justify-center md:gap-10
                    mt-4 md:mt-0
                ">

                    {/* Employees */}
                    <div className="text-center">
                        <div className="flex items-end gap-2 justify-center">
                            <Users className="w-5 h-5 text-gray-600" />
                            <p className="text-4xl md:text-5xl font-light mt-1 leading-none">78</p>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm mt-1">Employee</p>
                    </div>

                    {/* Hirings */}
                    <div className="text-center">
                        <div className="flex items-end gap-2 justify-center">
                            <UserPlus className="w-5 h-5 text-gray-600" />
                            <p className="text-4xl md:text-5xl font-light mt-1 leading-none">56</p>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm mt-1">Hirings</p>
                    </div>

                    {/* Projects */}
                    <div className="text-center">
                        <div className="flex items-end gap-2 justify-center">
                            <Laptop className="w-5 h-5 text-gray-600" />
                            <p className="text-4xl md:text-5xl font-light mt-1 leading-none">203</p>
                        </div>
                        <p className="text-gray-600 text-xs md:text-sm mt-1">Projects</p>
                    </div>

                </div>

            </div>

        </div>
    );
}
