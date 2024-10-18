import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function SupplierAuditServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    Supplier Audit Services
                </h1>
                <p className="pt-4 text-lg">
                    Our Supplier Audit Services provide comprehensive assessments of your suppliers' compliance with industry standards and your organization's requirements. 
                    We ensure that your supply chain operates effectively, safely, and sustainably.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our Supplier Audit Services help organizations evaluate their suppliers' operations, ensuring compliance with contractual obligations, 
                        quality management systems, and regulatory requirements. We aim to mitigate risks associated with third-party suppliers.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Conducting a pre-audit assessment to identify key focus areas.</li>
                        <li>Evaluating suppliers' compliance with relevant regulations and standards.</li>
                        <li>Assessing quality management systems and operational processes.</li>
                        <li>Identifying potential risks and areas for improvement.</li>
                        <li>Providing detailed audit reports with actionable recommendations.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Quality Assurance, Compliance Management, Risk Assessment, Supply Chain Management, and Regulatory Compliance.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Comprehensive Supplier Audit Reports.</li>
                        <li>Compliance and Risk Assessment Documentation.</li>
                        <li>Recommendations for Quality Improvements.</li>
                        <li>Follow-up Action Plans for Addressing Audit Findings.</li>
                        <li>Management Review Meeting Minutes and Reports.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Supplier audits should be conducted regularly, typically annually or biannually, to ensure ongoing compliance and effectiveness in the supply chain.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Supplier Audit Service
                </button>
            </div>
            <Footer />
        </>
    );
}
