import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function OccupationalHealthAndSafetyISO45001() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    About Occupational Health and Safety ISO 45001
                </h1>
                <p className="pt-4 text-lg">
                    ISO 45001 is the international standard for occupational health and safety (OH&S) management systems.
                    It aims to improve employee safety, reduce workplace risks, and create better, safer working conditions.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        ISO 45001 helps organizations provide a safe and healthy workplace by preventing work-related injury and ill health, 
                        as well as proactively improving their OH&S performance.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Identify hazards and assess risks in the workplace.</li>
                        <li>Develop and implement an OH&S policy and objectives.</li>
                        <li>Establish procedures for risk assessment and control.</li>
                        <li>Conduct training and awareness programs for employees.</li>
                        <li>Carry out regular audits and reviews of the OH&S management system.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Occupational Health, Workplace Safety, Risk Assessment, Emergency Preparedness, Training & Awareness, and Incident Investigation.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>ISO 45001 Occupational Health and Safety Management System Documentation.</li>
                        <li>Risk Assessment Reports.</li>
                        <li>Internal Audit Reports.</li>
                        <li>Training Material and Attendance Records.</li>
                        <li>Management Review Meeting Minutes.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Internal audits should be conducted at least once a year, with continuous monitoring and periodic reviews.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Service
                </button>
            </div>
            <Footer />
        </>
    );
}
