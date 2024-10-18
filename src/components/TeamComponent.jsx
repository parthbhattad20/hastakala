import React, { useState } from 'react';
import namshan from '../assets/team/namshan.jpg'
import khaleel from '../assets/team/khaleel.jpg'
import ajay from '../assets/team/ajay.jpg'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg z-50 max-w-2xl w-full mx-4">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const LeadershipCard = ({ name, role, description, imageUrl, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col items-center">
      <img src={imageUrl || "/api/placeholder/150/150"} alt={name} className="w-full h-full rounded-lg mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 text-center mb-2">{role}</p>
      <p className="text-xs text-gray-500 text-center mb-4">{description}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
        onClick={() => setIsModalOpen(true)}
      >
        VIEW DETAILS
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <img src={imageUrl} alt={name} className="w-48 h-48 rounded-lg float-left mr-4 mb-4" />
          <p className="text-sm mb-4">{role}</p>
          <p className="text-sm">{description}</p>
          {details && (
            <ul className="list-disc list-inside mt-4">
              {details.map((detail, index) => (
                <li key={index} className="text-sm mb-2">{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </Modal>
    </div>
  );
};

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Namshan Saud Al Namshan",
      role: "Sponsor",
      description: "Abu Saud is a well known businessman in Kuwait and sponsor of AlNoor.",
      imageUrl: namshan,
      details: [
        "Prominent businessman in Kuwait",
        "Key sponsor of AlNoor",
        "Extensive experience in regional business development",
        "Advocate for sustainable business practices"
      ]
    },
    {
      name: "Shaik Khaleel Basha",
      role: "Founder-Managing Partner",
      description: "Khaleel is the Founder-Managing Partner and head of Business Development",
      imageUrl: khaleel,
      details: [
        "Founder of AlNoor",
        "Head of Business Development",
        "Expert in strategic partnerships",
        "Visionary leader with over 20 years of industry experience"
      ]
    },
    {
      name: "Ajay Gavande",
      role: "Partner & Head of Management Consulting",
      description: "Ajay is the Partner & Head of Management Consulting, Auditing...",
      imageUrl: ajay,
      details: [
        "Partner at AlNoor",
        "Head of Management Consulting and Auditing",
        "Certified management consultant",
        "Specialist in process optimization and risk management"
      ]
    },
  ];

  return (
    <div className="bg-blue-500 p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center mt-10">Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {teamMembers.map((member, index) => (
          <LeadershipCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;