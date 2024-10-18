import React from 'react';

const ISOServicesComponent = () => {
  return (
    <div className="relative bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Training Section */}
          <ServiceCard
            title="Training"
            bgColor="bg-yellow-300"
            content={
              <>
                <p className="mb-4"> We provide bespoke training for ISO 9001, listed below are our offerings.</p>
                <ul className="list-disc pl-5 space-y-4">
                  <li>Shorter Sessions from 1 hour to 4 hours</li>
                  <li>Interpretation of the ISO 9001 requirements</li>
                  <li>1 Day Awareness Session</li>
                  <li>2 Days Internal Audit Course</li>
                  <li>3 Days Implementation Course covering 10+ hands on exercises</li>
                </ul>
                <p className="mt-4">Upon receiving your request, we will provide you further details.</p>
              </>
            }
          />

          {/* Documentation Toolkit Section */}
          <ServiceCard
            title="Documentation Toolkit"
            bgColor="bg-green-300"
            content={
              <>
                <p className="mb-4">ISO 9001 requires documentation of policies, procedures and records. As a result of several consulting assignments, we have some of the best content available that covers all the requirements.</p>
                <p className="mb-4">Our documentation has the following salient features:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Alignment with all ISO 9001-documentation requirements</li>
                  <li>Our experiences turned into documentation templates</li>
                  <li>Email support</li>
                  <li>Expert review of a document</li>
                  <li>Live one-on-one online consultations with an ISO 9001 expert</li>
                </ul>
                <p className="mt-4">Upon receiving your request, we will provide you further details.</p>
              </>
            }
          />

          {/* Internal Audit Section */}
          <ServiceCard
            title="Internal Audit"
            bgColor="bg-blue-300"
            content={
              <>
                <p className="mb-4">An independent assessment helps to assess the state of compliance with ISO 9001.</p>
                <p className="mb-4">Our internal audit methodology includes people, process, technology and measurements to assure and provide management the degree of ISO 9001 compliance.</p>
                <p className="mb-4">Typically, 3-5 days is required to perform a comprehensive internal audit.</p>
                <p className="mt-4">Upon receiving your request, we will provide you further details.</p>
              </>
            }
          />
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-4 left-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>

      {/* Live Chat Button */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, bgColor, content }) => (
  <div className={`flex-1 ${bgColor} p-6 rounded-lg shadow-md flex flex-col`}>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="text-sm flex-grow">{content}</div>
    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      CONTACT US NOW !
    </button>
  </div>
);

export default ISOServicesComponent;