import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function ConformityAssessmentISO17020() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    About Conformity Assessment ISO 17020
                </h1>
                <p className="pt-4 text-lg">
                    ISO 17020 is the international standard that specifies requirements for the operation of various types of bodies performing inspection. 
                    It ensures the impartiality, competence, and consistency of inspection bodies.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        ISO 17020 provides a framework for inspection bodies to demonstrate their ability to perform inspections effectively 
                        while ensuring the quality and reliability of inspection results.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Establishing an inspection policy and objectives.</li>
                        <li>Defining the scope of inspections performed.</li>
                        <li>Ensuring competence of inspection personnel.</li>
                        <li>Implementing quality management processes.</li>
                        <li>Conducting regular audits and reviews to maintain compliance.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Inspection Management, Quality Control, Risk Assessment, and Compliance with Regulatory Requirements.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>ISO 17020 Conformity Assessment Documentation.</li>
                        <li>Inspection Reports.</li>
                        <li>Internal Audit Reports.</li>
                        <li>Management Review Meeting Minutes.</li>
                        <li>Corrective Action Plans.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Inspections and audits should be conducted regularly, at least once a year, to ensure the effectiveness and compliance of the inspection body.
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
