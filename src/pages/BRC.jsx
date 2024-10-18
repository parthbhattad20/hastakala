
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function BRCServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    BRC Services
                </h1>
                <p className="pt-4 text-lg">
                    BRC (British Retail Consortium) Global Standard for Food Safety is an internationally recognized certification standard. 
                    It ensures that food manufacturers meet legal obligations and provide protection for the consumer.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our BRC certification services assist manufacturers in achieving compliance with the BRC Global Standard for Food Safety. 
                        This standard helps ensure that products meet consumer safety requirements and legal obligations within the food supply chain.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Performing gap analysis to assess readiness for BRC certification.</li>
                        <li>Identifying and implementing necessary corrective actions.</li>
                        <li>Conducting BRC pre-certification audits.</li>
                        <li>Assisting with documentation, control procedures, and compliance requirements.</li>
                        <li>Ensuring continuous monitoring and improvement to maintain BRC certification.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Food Safety, Product Integrity, Regulatory Compliance, Risk Management, and Quality Assurance.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Detailed BRC Certification Preparation Documentation.</li>
                        <li>Pre-certification Audit Reports.</li>
                        <li>Corrective Action Plans.</li>
                        <li>Compliance Monitoring and Improvement Reports.</li>
                        <li>Internal Audit Reports and Records.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        BRC audits and reviews should be conducted at least annually to ensure continuous compliance and maintain certification status.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request BRC Service
                </button>
            </div>
            <Footer />
        </>
    );
}
