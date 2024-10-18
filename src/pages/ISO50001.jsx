import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function EnergyManagementSystemISO50001() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    About Energy Management System ISO 50001
                </h1>
                <p className="pt-4 text-lg">
                    ISO 50001 is the international standard for energy management systems (EnMS). 
                    It provides a framework for organizations to manage and improve their energy performance, 
                    including energy efficiency, energy use, and consumption.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        ISO 50001 helps organizations continually improve their energy management and efficiency,
                        leading to reduced energy costs and greenhouse gas emissions.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Establishing an energy policy and objectives.</li>
                        <li>Identifying and evaluating energy use and consumption.</li>
                        <li>Implementing action plans for improving energy performance.</li>
                        <li>Monitoring, measuring, and analyzing energy performance.</li>
                        <li>Conducting regular audits and reviews for continuous improvement.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Energy Efficiency, Renewable Energy, Energy Policy, Performance Measurement, and Sustainable Practices.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>ISO 50001 Energy Management System Documentation.</li>
                        <li>Energy Baseline Reports.</li>
                        <li>Energy Performance Improvement Plans.</li>
                        <li>Internal Audit Reports.</li>
                        <li>Management Review Meeting Minutes.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Internal audits should be conducted at least once a year, with continuous monitoring and periodic reviews to ensure effectiveness and compliance.
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
