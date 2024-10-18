import React from "react";

const Timeline = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Our Journey</h2>
                <p className="text-lg text-gray-600 mt-2">
                    A glance at the milestones we've achieved over the years.
                </p>
            </div>

            <div className="relative wrap overflow-hidden">
                {/* Vertical Line */}
                <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2"></div>

                {/* Timeline Item 1 */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-12 h-12 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>
                    <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2010</h3>
                        <p className="text-gray-700 leading-tight">
                            Established in Kuwait as a WLL Co.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-12 h-12 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                    </div>
                    <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2012</h3>
                        <p className="text-gray-700 leading-tight">
                            Signed Business associate agreements with Coral eSecure, Perception Management Consulting, Global Quality Services.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-12 h-12 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">2020</h3>
                        <p className="text-gray-700 leading-tight">
                            Executed more than 200 projects in Kuwait, Oman & KSA. Clients include KNPC, KOC, KIPIC, KPC, KUFPEC, KISR, MEW, Gulf Bank, Burgan Bank, Alghanim Industries, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
