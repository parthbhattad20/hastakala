import React from "react";

const QMSComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 bg-white">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 ml-20 flex justify-center md:justify-start">
        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden clip-path-custom">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahxcOay94rlspPEMCgCCnGbAHe2BZenuXeQ&s" // Replace this with the actual image URL
            alt="QMS Overview"
            className="w-full h-full object-cover rotate-[45deg] custom-clip"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-8 mr-20 md:mt-0 md:pl-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          ISO 9001 Quality Management System (QMS) - Implementation Overview
        </h2>
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
  );
};

export default QMSComponent;
