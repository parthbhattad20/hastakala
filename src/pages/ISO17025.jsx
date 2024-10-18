import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function TestingAndCalibrationLaboratoriesISO17025() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    About Testing and Calibration Laboratories ISO 17025
                </h1>
                <p className="pt-4 text-lg">
                    ISO 17025 is the international standard for testing and calibration laboratories. 
                    It specifies the general requirements for the competence of laboratories to carry out tests and calibrations.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        ISO 17025 helps laboratories demonstrate their ability to produce valid and reliable results, ensuring confidence in their testing and calibration processes.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Defining the scope of testing and calibration services.</li>
                        <li>Establishing procedures for testing and calibration processes.</li>
                        <li>Implementing quality management practices.</li>
                        <li>Ensuring personnel competence and training.</li>
                        <li>Conducting regular internal audits and management reviews.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Testing and Calibration, Quality Management, Equipment Calibration, Method Validation, and Compliance with Regulatory Standards.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>ISO 17025 Testing and Calibration Laboratories Documentation.</li>
                        <li>Test Reports and Calibration Certificates.</li>
                        <li>Internal Audit Reports.</li>
                        <li>Management Review Meeting Minutes.</li>
                        <li>Corrective Action Plans.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Internal audits should be conducted at least once a year, along with continuous monitoring and periodic reviews to ensure compliance and effectiveness.
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
