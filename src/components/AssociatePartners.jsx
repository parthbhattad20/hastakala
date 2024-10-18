import React, { useState } from 'react';
import sanjay from '../assets/team/sanjay.jpg'
import probal from '../assets/team/probal.jpg'
import jayant from '../assets/team/jayant.jpg'

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

const PartnerCard = ({ name, role, imageUrl, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-full h-full rounded-lg mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 text-center mb-4">{role}</p>
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

const AssociatePartners = () => {
  const partners = [
    {
      name: "Sanjay Santuka",
      role: "CEO of Tyche International",
      imageUrl: sanjay,
      details: [
        "CEO of Tyche International",
        "Leads Al-Noor's International Business operations",
        "Over 25 years of experience in international business development",
        "Expert in cross-cultural business strategies",
        "Holds an MBA in International Business"
      ]
    },
    {
      name: "Probal Choudhuri",
      role: "Head of Coral eSecure Ltd",
      imageUrl: probal,
      details: [
        "Head of Coral eSecure Ltd",
        "Key business associate of Al-Noor",
        "Specialist in cybersecurity and digital transformation",
        "20+ years of experience in IT consulting",
        "Certified Information Systems Security Professional (CISSP)"
      ]
    },
    {
      name: "Jayant Shiradkar",
      role: "EnMS Advisory",
      imageUrl: jayant,
      details: [
        "Energy Management Systems (EnMS) Advisory",
        "Certified Energy Auditor",
        "IRCA Accredited Lead Auditor for EnMS ISO 50001",
        "Member of Indian Green Building Council (IGBC)",
        "Expert in sustainable energy practices and green building technologies"
      ]
    },
  ];

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Associate Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </div>
    </div>
  );
};

export default AssociatePartners;