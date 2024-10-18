import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function SkilledTrainingServices() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center max-w-screen mx-auto px-10 pb-16 pt-16 bg-green-400">
                <h1 className="text-2xl text-gray-900 border-b border-green-500 font-thin uppercase pb-4 md:text-7xl xl:text-5xl tracking-wider">
                    Skilled Training Services
                </h1>
                <p className="pt-4 text-lg">
                    Our Skilled Training Services provide tailored training programs to enhance employee competencies, improve productivity, 
                    and foster career development. We equip your workforce with the necessary skills to thrive in a competitive environment.
                </p>
            </div>

            <div className="bg-white">
                <div className="text-[#1f2833] text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
                    {/* Service Outline Section */}
                    <h2 className="text-2xl font-bold text-gray-900 text-start">Service Outline</h2>
                    <p className="text-lg text-justify mt-4">
                        Our comprehensive training services are designed to meet the specific needs of your organization. 
                        We offer a variety of training programs focused on enhancing technical skills, soft skills, and overall employee effectiveness.
                    </p>

                    {/* Service Methodology Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Service Methodology</h2>
                    <p className="text-lg text-justify mt-4">
                        The methodology covers the following key elements:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left">
                        <li>Assessing the training needs of your organization and employees.</li>
                        <li>Designing customized training programs that align with business objectives.</li>
                        <li>Delivering engaging training sessions using various methodologies (in-person, online, workshops).</li>
                        <li>Evaluating training effectiveness through assessments and feedback.</li>
                        <li>Providing ongoing support and resources for continuous learning.</li>
                    </ul>

                    {/* Domains Covered Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Domains Covered</h2>
                    <p className="text-lg text-justify mt-4">
                        Technical Skills Development, Soft Skills Training, Leadership Development, Compliance Training, and Continuous Professional Development.
                    </p>

                    {/* Deliverables Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Deliverables</h2>
                    <ul className="list-disc list-inside ml-4 mt-2 text-left text-lg">
                        <li>Customized Training Program Documentation.</li>
                        <li>Training Materials and Resources.</li>
                        <li>Evaluation and Feedback Reports.</li>
                        <li>Certificates of Completion for Participants.</li>
                        <li>Action Plans for Skill Application in the Workplace.</li>
                    </ul>

                    {/* Frequency Section */}
                    <h2 className="text-2xl font-bold text-gray-900 mt-10 text-start">Frequency</h2>
                    <p className="text-justify mt-4 text-lg">
                        Training programs can be conducted regularly or as needed, depending on organizational requirements and employee development goals.
                    </p>
                </div>
            </div>

            {/* Add the Contact Us anchor link here */}
            <div className="text-center mt-5 mb-10">
                <button onClick={() => navigate('/')} className="bg-blue-500 text-white text-3xl rounded-lg p-2 hover:bg-green-500">
                    Request Skilled Training Service
                </button>
            </div>
            <Footer />
        </>
    );
}
