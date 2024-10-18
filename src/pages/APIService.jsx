import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function ApiServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    API Services
                </h1>
                <p className="pt-4 text-lg">
                    We offer robust and scalable API services that enable seamless integration of your software systems, 
                    enhancing interoperability and simplifying the development process.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our API services allow your applications to communicate with each other, sharing data and functionality in a secure and efficient manner. 
                        We provide API design, development, integration, and management services tailored to your business needs.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Designing custom APIs for your specific business requirements.</li>
                        <li>Developing secure and scalable APIs for internal or external use.</li>
                        <li>Implementing seamless API integrations with third-party services.</li>
                        <li>Providing API management and monitoring tools to ensure performance and security.</li>
                        <li>Offering comprehensive API documentation and developer support.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        API Development, API Integration, API Security, API Management, and Developer Support.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Custom API Design and Documentation.</li>
                        <li>API Integration Reports and Performance Metrics.</li>
                        <li>API Security Frameworks and Compliance Reports.</li>
                        <li>API Testing and Debugging Documentation.</li>
                        <li>Developer Portal Access and Support Documentation.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Regular API reviews and updates are recommended to ensure security, functionality, and compliance with evolving industry standards.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request API Service
                </button>
            </div>
            <Footer />
        </>
    );
}
