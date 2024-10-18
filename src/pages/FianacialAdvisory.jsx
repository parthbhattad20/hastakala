import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function FinancialAdvisoryServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    Financial Advisory Services
                </h1>
                <p className="pt-4 text-lg">
                    Our Financial Advisory Services provide expert guidance on financial planning, investment strategies, risk management, and regulatory compliance. 
                    We help clients achieve their financial goals and ensure sustainable growth.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our comprehensive Financial Advisory Services are designed to assist individuals and businesses in making informed financial decisions. 
                        We offer tailored solutions to optimize your financial performance and manage risks effectively.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Conducting a comprehensive financial analysis to assess current performance.</li>
                        <li>Developing personalized financial plans aligned with client goals.</li>
                        <li>Recommending investment strategies based on risk tolerance and market conditions.</li>
                        <li>Providing guidance on tax planning and regulatory compliance.</li>
                        <li>Monitoring financial performance and adjusting strategies as needed.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Financial Planning, Investment Advisory, Risk Management, Tax Advisory, and Compliance.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Personalized Financial Plans and Projections.</li>
                        <li>Investment Strategy Reports.</li>
                        <li>Tax Planning Documents.</li>
                        <li>Risk Assessment Reports.</li>
                        <li>Performance Monitoring Reports.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Financial reviews and advisory sessions should be conducted at least annually, with regular updates to ensure alignment with changing financial goals and market conditions.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Financial Advisory Service
                </button>
            </div>
            <Footer />
        </>
    );
}
