import React, { useState } from 'react';

const ServicesComponent = () => {
  const [activeService, setActiveService] = useState('Training');

  const services = [
    { name: 'Management Consultancy', content: 'ISO Consultancy Services (eg ISO 9001 QMS, ISO 14001 EMS, ISO 45001 OH&S, ISO 50001 EnMS, ISO 31000 RM, ISO 26000 SR, ISO 22000 FSMS / HACCP, ISO 27001 ITSM, ISO 20000 ITSM, ISO 22301 BCMS, IT Governance (COBIT), ERM - ISO 31000, etc,) and API Q Plus, API Monogram Consultancy & Certification etc.' },
    { name: 'Advisory', content: 'Business Advisory Services, including International business development, Representation of Foreign companies, Sourcing of Projects / partners applicable to the companies we represent, Formation of JVs, Consortium partnerships Supply Chain Management, etc Financial Advisory Services, including Acquisitions, Mergers, Formation of JVs, Consortium partnerships, etc.' },
    { name: 'Audit', content: 'Internal audits, Second party audits, Third party audits, managing maintenance contracts for various management systems of ISO and other projects.' },
    { name: 'Training', content: 'Our interactive and comprehensive training programs are goal oriented and up to date. Our tactical approach towards performance enhancement ensures the best returns on your training investment.' },
  ];

  return (
    <div className="flex bg-white">
      <div className="w-1/3 bg-[#0b0f12] text-white p-8">
        <h2 className="text-4xl font-bold mb-6">Services</h2>
        {services.map((service) => (
          <div
            key={service.name}
            className={`py-3 border-b border-gray-700 cursor-pointer ${
              activeService === service.name ? 'text-blue-400' : 'hover:text-gray-300'
            }`}
            onClick={() => setActiveService(service.name)}
          >
            {service.name}
            <span className="float-right">›</span>
          </div>
        ))}
      </div>


      <div className="w-3.5/4 relative">
        <img
          src="https://www.alnoor-consultants.com/wp-content/uploads/2021/07/img.png"
          alt="Service illustration"
          className="w-3.5/4 h-[440px] object-fit"
        />

      </div>

      {/* Right column */}
      <div className="flex-1 p-8">
      <div className='w-full'>
        <p className="mb-6 mt-10">
          We offer the best in class Management Consultancy, Business Advisory & Financial
          Advisory, Audit & Training Services.
        </p>

        <h3 className="text-2xl font-bold mb-4">{activeService}</h3>
        <p className="mb-6">
          {services.find((service) => service.name === activeService)?.content}
        </p>

      
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Learn More ›
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;