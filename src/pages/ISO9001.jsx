import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import AboutUs from '../components/ImageTop'
import ISOServicesComponent from '../components/TableComponent';
import ContactInfoComponent from "../components/ContactInfoComponant";
import ServiceBannerComponent from "../components/ServicesBanner";

export default function QualityManagementSystemISO9001() {
    const navigate = useNavigate();
    
    return (
        <>
            <Navbar />
            <AboutUs title="ISO 9001 Quality Management System (QMS) - Implementation Overview" route="Alnoor > Services > ISO9001"/>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10 ">
            ISO 9001 Quality Management System (QMS) - Implementation Overview
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-white">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 ml-20 flex justify-center md:justify-start">
        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden clip-path-custom">
          <img
            src="https://alnoor-consultants.com/wp-content/uploads/2021/08/about-1.jpg" // Replace this with the actual image URL
            alt="QMS Overview"
            className="w-full h-full object-cover rounded-3xl custom-clip"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 mr-20 md:mt-0 md:pl-10 text-center md:text-left ml">
    
        <p className="text-gray-700 mb-4">
          Quality Management System (QMS) – ISO 9001 is the world's most popular
          ISO. The implementation ensures that your customers are satisfied and
          that you aim to achieve and deliver zero defect products and services.
        </p>
        <p className="text-gray-700 mb-4">
          We help organizations to implement Quality Management System (QMS) –
          ISO 9001 through a well-structured methodology that involves
          understanding your business first, and documenting customer
          expectations.
        </p>
        <p className="text-gray-700 mb-4">
          Benefits of QMS – ISO 9001 Consulting include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Reduced number of customer complaints</li>
          <li>Reduced number of operational process defects</li>
          <li>Exceeding organizational objectives and increasing opportunities</li>
          <li>Reduced QMS development and implementation time</li>
          <li>A QMS designed to suit your organization and customers' requirements</li>
        </ul>
      </div>
    </div>
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2 ml-20">
        <h2 className="text-3xl font-bold text-gray-800">
          Our Approach to Successful QMS - ISO 9001 Implementation
        </h2>
        <p className="mt-4 text-gray-600">
          Every business is unique, in terms of products, services and processes. ISO 9001 has 78 individual requirements. We follow the following phases to help you achieve ISO 9001 certification.
        </p>
        <ul className="mt-4 text-gray-600 list-disc pl-5">
          <li>PHASE 1 – Understanding Business and customer requirements</li>
          <li>PHASE 2 – Gap Assessment and Planning</li>
          <li>PHASE 3 – Control Design and Documentation</li>
          <li>PHASE 4 – Implementation and ISO 9001 Training</li>
          <li>PHASE 5 – Performance Tracking</li>
          <li>PHASE 6 – Internal Assessment and Management Review</li>
          <li>PHASE 7 – External Audit Support for ISO 9001 Certification</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold">
          CONTACT US NOW!
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <img
            src="https://alnoor-consultants.com/wp-content/uploads/2021/10/iso.jpg" // Replace with the actual image URL
            alt="ISO Certification"
            className="w-full h-full object-cover rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[10px] rounded-br-[10px]"
          />
        </div>
      </div>
    </section>
    <ContactInfoComponent/>
    <ISOServicesComponent/>
    <ServiceBannerComponent/>
    
            <Footer />
        </>
    );
}

