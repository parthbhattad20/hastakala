import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChartLine, FaLightbulb, FaRedo, FaUsers } from "react-icons/fa"; // Add relevant icons

const WhyUs = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
   
          <h1 className="text-center text-5xl font-bold text-gray-800 mb-12">
            Why Choose Alnoor Advisory Services?
          </h1>
     
        
        {/* Business Performance Auditing */}

          <div className="flex flex-col md:flex-row items-center mb-16">
            <img 
              src="https://media.istockphoto.com/id/1400743462/photo/audit-business-concept-examination-and-evaluation-of-the-financial-statement-of-an.jpg?s=612x612&w=0&k=20&c=9F8vNgBs7v37ff4AabxyMBx80iGRgx-enUvzi8knyhc=" 
              alt="Business Auditing" 
              className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8 rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaChartLine className="text-green-500 mr-2" /> Business Performance Auditing
              </h2>
              <p className="text-gray-600 mb-4">
                We offer comprehensive business performance audits to ensure your organization’s business plan is both adequate and well-executed. Our audits include risk management, operations management, HR, supply chain, and IT.
              </p>
              <p className="text-gray-600">
                Our method includes analyzing stakeholder expectations and ensuring operations are compliant with your business plan, providing executive summaries to top management.
              </p>
            </div>
          </div>
      

        {/* Business Planning & Analysis */}
  
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaLightbulb className="text-green-500 mr-2" /> Business Planning & Analysis
              </h2>
              <p className="text-gray-600 mb-4">
                Establishing and monitoring short-term and long-term business plans is critical. We provide executive summary reports, dashboards, and quarterly reviews to ensure that your business strategies remain on target.
              </p>
              <p className="text-gray-600">
                Our expertise spans multiple domains, including risk management, supply chain, and marketing, ensuring holistic business growth.
              </p>
            </div>
            <img 
              src="https://images.edrawsoft.com/articles/business-plan-flowchart/business-plan.png" 
              alt="Business Planning" 
              className="w-full md:w-1/2 mb-6 md:mb-0 md:ml-8 rounded-lg shadow-lg order-1 md:order-2"
            />
          </div>


        {/* Business Process Reengineering */}
   
          <div className="flex flex-col md:flex-row items-center mb-16">
            <img 
              src="https://cdn-images.visual-paradigm.com/features/v15/business-process-reengineering-canvas/business-process-reengineering-infographic.png" 
              alt="Process Reengineering" 
              className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8 rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaRedo className="text-green-500 mr-2" /> Business Process Reengineering
              </h2>
              <p className="text-gray-600 mb-4">
                Reengineering your business processes can help streamline operations and maximize efficiency. Our methodology includes process mapping, value analysis, and updating business policies and procedures.
              </p>
              <p className="text-gray-600">
                We offer quarterly process reviews to ensure that your organization remains agile and adaptive in an ever-changing business environment.
              </p>
            </div>
          </div>
  

        {/* Business Leadership Development */}
      
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 order-2 md:order-1 ml-10">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                <FaUsers className="text-green-500 mr-2" /> Business Leadership Development
              </h2>
              <p className="text-gray-600 mb-4">
                Leadership development is a cornerstone of business success. We analyze the competencies of your managerial personnel, identify training needs, and create tailored leadership development plans.
              </p>
              <p className="text-gray-600">
                Our services ensure that your leaders are not only trained but also effective in driving business performance with measurable outcomes.
              </p>
            </div>
            <img 
              src="https://empxtrack.com/wp-content/uploads/2018/07/to-build-leadership-development-to-manage-company-business.jpg" 
              alt="Leadership Development" 
              className="w-full md:w-1/2 mb-6 md:mb-0 md:ml-8 rounded-lg shadow-lg order-1 md:order-2"
            />
          </div>
    

        {/* Call to Action Section */}
        <div className="bg-green-500 text-white py-12 rounded-lg text-center mt-16">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to elevate your business performance?
          </h2>
          <p className="text-lg mb-8">
            Get in touch with us today to explore how our tailored advisory services can help you achieve business excellence.
          </p>
          <button className="bg-white text-green-500 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition-all">
            Contact Us
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhyUs;
