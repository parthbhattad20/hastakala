import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function BusinessAdvisoryServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    Business Advisory Services
                </h1>
                <p className="pt-4 text-lg">
                    Our Business Advisory Services provide expert guidance on strategic planning, operational improvement, financial management, and risk assessment. 
                    We help businesses achieve sustainable growth and improve performance.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our comprehensive Business Advisory Services are designed to assist organizations in defining their strategic direction, improving operational efficiency, and managing financial risks. 
                        We work closely with your management team to develop customized solutions that drive business success.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Analyzing current business performance and identifying areas for improvement.</li>
                        <li>Developing strategic plans and action steps to achieve business objectives.</li>
                        <li>Providing financial advisory services to optimize cash flow and profitability.</li>
                        <li>Assessing operational processes and recommending efficiency improvements.</li>
                        <li>Conducting risk assessments and implementing risk management strategies.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Strategic Planning, Operational Efficiency, Financial Management, Risk Management, and Business Process Optimization.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Strategic Business Plans and Action Steps.</li>
                        <li>Financial Performance and Risk Assessment Reports.</li>
                        <li>Operational Improvement Recommendations.</li>
                        <li>Internal Audit Reports and Process Reviews.</li>
                        <li>Management Review Meeting Minutes and Corrective Action Plans.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Business advisory reviews and consultations should be conducted regularly, with periodic assessments to ensure business objectives are met and strategies remain effective.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Business Advisory Service
                </button>
            </div>
            <Footer />
        </>
    );
}
