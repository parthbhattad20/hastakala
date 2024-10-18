import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function EnvironmentalManagementSystemISO14001() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    About Environmental Management System ISO 14001
                </h1>
                <p className="pt-4 text-lg">
                    ISO 14001 is the international standard that specifies requirements for an effective environmental management system (EMS). 
                    It provides a framework that an organization can follow to set up an effective environmental management system.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        ISO 14001 helps organizations enhance their environmental performance by implementing an effective EMS, 
                        which contributes to sustainable development and compliance with regulatory requirements.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Identify environmental aspects and impacts associated with activities, products, and services.</li>
                        <li>Develop and implement an environmental policy and objectives.</li>
                        <li>Establish procedures for risk assessment and compliance obligations.</li>
                        <li>Provide training and raise awareness among employees regarding environmental issues.</li>
                        <li>Conduct regular audits and reviews of the EMS for continuous improvement.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Waste Management, Resource Efficiency, Pollution Prevention, Environmental Compliance, and Sustainable Practices.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>ISO 14001 Environmental Management System Documentation.</li>
                        <li>Environmental Aspect and Impact Assessment Reports.</li>
                        <li>Internal Audit Reports.</li>
                        <li>Management Review Meeting Minutes.</li>
                        <li>Corrective Action Plans.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Internal audits should be conducted at least once a year, with continuous monitoring and periodic reviews to ensure compliance and effectiveness.
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
