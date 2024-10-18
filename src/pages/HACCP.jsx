import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function HACCPServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    HACCP Services
                </h1>
                <p className="pt-4 text-lg">
                    HACCP (Hazard Analysis Critical Control Point) is an internationally recognized system for reducing the risk of safety hazards in food. 
                    Our HACCP services help ensure food safety through proactive risk management.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our HACCP services guide you through the process of identifying potential food safety hazards, 
                        establishing critical control points, and ensuring compliance with food safety regulations.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Conducting a hazard analysis to identify potential risks.</li>
                        <li>Determining critical control points (CCPs) in the food production process.</li>
                        <li>Establishing critical limits for each CCP.</li>
                        <li>Implementing monitoring procedures for CCPs.</li>
                        <li>Establishing corrective actions for any deviations.</li>
                        <li>Conducting verification and validation procedures to ensure the HACCP plan is effective.</li>
                        <li>Maintaining records to document compliance with HACCP principles.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Food Safety, Risk Management, Regulatory Compliance, Monitoring and Verification, and Record Keeping.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Comprehensive HACCP Plan Documentation.</li>
                        <li>Hazard Analysis Reports.</li>
                        <li>Monitoring and Verification Procedures.</li>
                        <li>Corrective Action Records.</li>
                        <li>Internal Audit Reports.</li>
                        <li>Management Review Meeting Minutes.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Regular audits and reviews of the HACCP plan should be conducted at least annually, with continuous monitoring of CCPs to ensure ongoing compliance and food safety.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request HACCP Service
                </button>
            </div>
            <Footer />
        </>
    );
}
