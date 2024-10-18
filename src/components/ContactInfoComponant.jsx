import React from 'react';

const ContactInfoComponent = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Call or write to us at :
        </h2>
        <a 
          href="mailto:info@alnoor-consultants.com" 
          className="text-xl text-blue-500 hover:text-blue-600 mb-2 inline-block"
        >
          info@alnoor-consultants.com
        </a>
        <p className="text-gray-600 mb-6">
          for proposal / roadmap / information
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
          CONTACT US NOW !
        </button>
      </div>
    </div>
  );
};

export default ContactInfoComponent;