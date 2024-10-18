import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function InformationSecurityManagementSystemISO27001() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    About Information Security Management System ISO 27001
                </h1>
                <p className="pt-4 text-lg">
                    ISO 27001 is an international standard that specifies requirements for an information security management system (ISMS). 
                    It provides a systematic approach to managing sensitive company information, ensuring its confidentiality, integrity, and availability.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        ISO 27001 helps organizations safeguard their information through risk management, ensuring that they can protect sensitive data from breaches and misuse.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Establishing an information security policy and objectives.</li>
                        <li>Conducting risk assessments to identify and evaluate information security risks.</li>
                        <li>Implementing security controls to mitigate identified risks.</li>
                        <li>Training staff and raising awareness about information security practices.</li>
                        <li>Conducting regular audits and management reviews of the ISMS.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Information Security Risk Management, Data Protection, Incident Management, Compliance, and Business Continuity.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>ISO 27001 Information Security Management System Documentation.</li>
                        <li>Risk Assessment and Treatment Reports.</li>
                        <li>Internal Audit Reports.</li>
                        <li>Management Review Meeting Minutes.</li>
                        <li>Corrective Action Plans.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Internal audits should be conducted at least once a year, along with continuous monitoring to ensure compliance and effectiveness of the ISMS.
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
