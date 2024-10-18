import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function ThirdPartyAuditServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    Third Party Audit Services
                </h1>
                <p className="pt-4 text-lg">
                    Our Third Party Audit Services provide independent evaluations of your suppliers, contractors, and other third-party partners. 
                    We ensure compliance, assess risks, and enhance operational efficiency in your supply chain.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our Third Party Audit Services help organizations verify that their partners adhere to regulatory standards and contractual obligations, 
                        while also identifying potential risks and areas for improvement in their operations.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Conducting pre-audit assessments to understand the scope and objectives.</li>
                        <li>Evaluating compliance with relevant laws, regulations, and standards.</li>
                        <li>Assessing operational processes and quality management systems.</li>
                        <li>Identifying risks and non-conformities in third-party operations.</li>
                        <li>Providing detailed audit reports with actionable recommendations.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Compliance Management, Risk Assessment, Quality Assurance, Supply Chain Management, and Operational Efficiency.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Comprehensive Third Party Audit Reports.</li>
                        <li>Compliance and Risk Assessment Documentation.</li>
                        <li>Recommendations for Operational Improvements.</li>
                        <li>Corrective Action Plans for Addressing Audit Findings.</li>
                        <li>Management Review Meeting Minutes and Reports.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Third-party audits should be conducted regularly, typically annually or biannually, to ensure ongoing compliance and effectiveness in managing supplier relationships.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Third Party Audit Service
                </button>
            </div>
            <Footer />
        </>
    );
}
