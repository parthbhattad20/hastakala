
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function SoftSkillsTrainingServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    Soft Skills Training Services
                </h1>
                <p className="pt-4 text-lg">
                    Our Soft Skills Training Services focus on enhancing interpersonal skills, effective communication, 
                    teamwork, and leadership capabilities. We equip individuals with the essential skills needed to thrive in the workplace.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our Soft Skills Training Services are designed to help individuals improve their interpersonal skills and professional behavior, 
                        leading to better collaboration, productivity, and workplace harmony.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Conducting needs assessments to identify specific soft skills gaps.</li>
                        <li>Developing tailored training programs that address identified needs.</li>
                        <li>Utilizing interactive training methods, including workshops, role-playing, and group discussions.</li>
                        <li>Measuring training effectiveness through feedback and assessments.</li>
                        <li>Providing ongoing support and resources for skill application in the workplace.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Communication Skills, Team Collaboration, Emotional Intelligence, Conflict Resolution, and Leadership Development.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Customized Soft Skills Training Program Documentation.</li>
                        <li>Training Materials and Resources for Participants.</li>
                        <li>Feedback and Evaluation Reports on Training Effectiveness.</li>
                        <li>Certificates of Completion for Participants.</li>
                        <li>Action Plans for Applying Soft Skills in the Workplace.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Soft skills training can be conducted regularly, with workshops or sessions held quarterly or as needed based on organizational requirements.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Soft Skills Training Service
                </button>
            </div>
            <Footer />
        </>
    );
}
