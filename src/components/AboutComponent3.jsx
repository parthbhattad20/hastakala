import React from 'react';

const QMSApproach = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 bg-gray-50">
      {/* Text Section */}
      <div className="md:w-1/2">
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
            src="https://via.placeholder.com/300x300" // Replace with the actual image URL
            alt="ISO Certification"
            className="w-full h-full object-cover rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[10px] rounded-br-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default QMSApproach;
