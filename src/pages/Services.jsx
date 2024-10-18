import React from "react";
import { FiCheckCircle, FiSettings, FiActivity, FiFileText, FiShield, FiCpu, FiDroplet, FiZap, FiCoffee, FiDatabase, FiTrendingUp, FiUsers } from "react-icons/fi";
import AboutUs from "../components/ImageTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// Service Card component
const ServiceCard = ({ title, description, icon, borderColor, bgcolor }) => {
  const navigate = useNavigate()
  return (
    <div className="relative group overflow-hidden rounded-md shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer">
      <div className={`absolute bottom-0 left-0 h-1 w-full ${bgcolor} group-hover:h-full transition-all duration-500 ease-in-out`}></div>
      <div className={`relative z-10 p-6 bg-white group-hover:bg-transparent border-t-4 ${borderColor} transition-all duration-500 h-full flex flex-col justify-between`}>
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="group-hover:text-white transition-colors duration-500">
              {icon}
            </div>
            <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-500">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 group-hover:text-white transition-colors duration-500">
            {description}
          </p>
        </div>
        <button onClick={() => navigate("/iso9001")} className="text-white mt-4 transition-colors duration-500 bg-blue-500 p-2 rounded hover:bg-blue-600">
          Read more
        </button>
      </div>
    </div>
  );
};

// Services Page Component
const Services = () => {
  const managementServices = [
    {
      title: "Quality Management System (ISO 9001)",
      description: "Implement a world-class QMS to enhance customer satisfaction, streamline processes, and consistently deliver high-quality products and services. Our expert guidance ensures full ISO 9001 compliance and continuous improvement.",
      icon: <FiCheckCircle size={40} className="text-blue-500" />,
      borderColor: "border-teal-500",
      bgcolor: "bg-teal-300"
    },
    {
      title: "Occupational Health and Safety (ISO 45001)",
      description: "Create a safer workplace with our ISO 45001 consultancy. We help you identify and mitigate risks, improve employee well-being, and build a culture of safety. Reduce incidents and enhance productivity with our tailored solutions.",
      icon: <FiShield size={40} className="text-teal-500" />,
      borderColor: "border-blue-500",
      bgcolor: "bg-blue-300"
    },
    {
      title: "Environmental Management (ISO 14001)",
      description: "Develop a robust environmental management system with our ISO 14001 expertise. We guide you in reducing environmental impact, ensuring regulatory compliance, and implementing sustainable practices for long-term success.",
      icon: <FiActivity size={40} className="text-blue-500" />,
      borderColor: "border-teal-500",
      bgcolor: "bg-teal-300"
    },
    {
      title: "Energy Management (ISO 50001)",
      description: "Optimize your organization's energy use with our ISO 50001 consultancy. We help you implement effective energy management systems, reduce costs, and improve sustainability through data-driven strategies and best practices.",
      icon: <FiZap size={40} className="text-teal-500" />,
      borderColor: "border-blue-500",
      bgcolor: "bg-blue-300"
    },
    {
      title: "Food Safety Management (ISO 22000)",
      description: "Ensure food safety across your entire supply chain with our ISO 22000 expertise. We help you implement robust food safety management systems, identify and control hazards, and meet international standards for food safety.",
      icon: <FiCoffee size={40} className="text-blue-500" />,
      borderColor: "border-teal-500",
      bgcolor: "bg-teal-300"
    },
    {
      title: "Information Security (ISO 27001)",
      description: "Protect your valuable information assets with our ISO 27001 consultancy. We guide you in implementing comprehensive information security management systems, identifying risks, and ensuring the confidentiality, integrity, and availability of your data.",
      icon: <FiDatabase size={40} className="text-teal-500" />,
      borderColor: "border-blue-500",
      bgcolor: "bg-blue-300"
    },
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <AboutUs title="Services" route="Alnoor > Services" />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            We offer a comprehensive range of services, including management consultancy, advisory, audit, and training.
          </p>
        </div>

        {/* Management Consultancy */}
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Management Consultancy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {managementServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Advisory */}
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Advisory</h2>
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <ServiceCard
              title="Business Advisory"
              description="Gain strategic insights and guidance to drive your business forward. Our experienced consultants provide tailored advice on market expansion, operational efficiency, and organizational development to help you achieve sustainable growth and competitive advantage."
              icon={<FiTrendingUp size={40} className="text-blue-500" />}
              borderColor="border-teal-500"
              bgcolor="bg-teal-300"
            />
            <ServiceCard
              title="Financial Advisory"
              description="Navigate complex financial landscapes with our expert financial advisory services. We offer comprehensive guidance on financial planning, risk management, investment strategies, and regulatory compliance to optimize your financial performance and secure your business's future."
              icon={<FiFileText size={40} className="text-teal-500" />}
              borderColor="border-blue-500"
              bgcolor="bg-blue-300"
            />
          </div>
        </div>

        {/* Audit */}
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Audit</h2>
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <ServiceCard
              title="Internal Audit"
              description="Strengthen your organization's governance and control processes with our comprehensive internal audit services. We conduct thorough assessments of your operations, identify areas for improvement, and provide actionable recommendations to enhance efficiency, compliance, and risk management."
              icon={<FiCheckCircle size={40} className="text-blue-500" />}
              borderColor="border-teal-500"
              bgcolor="bg-teal-300"
            />
            <ServiceCard
              title="Supplier Audit"
              description="Optimize your supply chain performance with our rigorous supplier audit services. We evaluate your suppliers' capabilities, quality control processes, and compliance with industry standards to help you mitigate risks, improve product quality, and build stronger supplier relationships."
              icon={<FiSettings size={40} className="text-teal-500" />}
              borderColor="border-blue-500"
              bgcolor="bg-blue-300"
            />
          </div>
        </div>

        {/* Training */}
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Training</h2>
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <ServiceCard
              title="Skilled Training"
              description="Empower your workforce with our comprehensive skilled training programs. We offer industry-specific technical training, hands-on workshops, and certification courses to enhance your team's expertise, productivity, and adaptability in an ever-evolving business landscape."
              icon={<FiCpu size={40} className="text-blue-500" />}
              borderColor="border-teal-500"
              bgcolor="bg-teal-300"
            />
            <ServiceCard
              title="Soft Skills Training"
              description="Develop your team's interpersonal and leadership capabilities with our soft skills training. Our programs cover essential areas such as communication, teamwork, problem-solving, and emotional intelligence to create a more collaborative, efficient, and positive work environment."
              icon={<FiUsers size={40} className="text-teal-500" />}
              borderColor="border-blue-500"
              bgcolor="bg-blue-300"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;