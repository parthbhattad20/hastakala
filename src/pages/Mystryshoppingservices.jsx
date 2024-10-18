import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function MysteryShoppingServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    Mystery Shopping Services
                </h1>
                <p className="pt-4 text-lg">
                    Our Mystery Shopping Services provide valuable insights into customer experiences and service quality. 
                    We help organizations improve their operations through detailed evaluations of service delivery and customer interaction.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our Mystery Shopping Services are designed to evaluate and enhance customer service and overall experience 
                        by assessing staff performance and adherence to company standards through simulated shopping experiences.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Developing customized evaluation criteria based on client objectives.</li>
                        <li>Conducting mystery shopping visits to assess service quality.</li>
                        <li>Collecting detailed feedback and observations from mystery shoppers.</li>
                        <li>Providing comprehensive reports highlighting strengths and areas for improvement.</li>
                        <li>Recommending actionable strategies to enhance customer experience.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Customer Experience Evaluation, Service Quality Assessment, Staff Performance Review, and Operational Improvement.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Detailed Mystery Shopping Reports with Findings and Recommendations.</li>
                        <li>Analysis of Customer Interaction Quality and Service Delivery.</li>
                        <li>Trends and Insights on Customer Behavior and Preferences.</li>
                        <li>Action Plans for Operational Improvements.</li>
                        <li>Follow-up Assessments to Measure Progress Over Time.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Mystery shopping evaluations can be conducted regularly, based on the client's needs, to continually assess and improve service quality.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Mystery Shopping Service
                </button>
            </div>
            <Footer />
        </>
    );
}
