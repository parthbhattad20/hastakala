import React from 'react';
import client1 from '../assets/clients/client1.jpg'
import client2 from '../assets/clients/client2.jpg'
import client3 from '../assets/clients/client3.jpg'
import client4 from '../assets/clients/client4.jpg'
import client5 from '../assets/clients/client5.jpg'
import client6 from '../assets/clients/client6.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import AboutUs from './ImageTop';

const CompanyGrid = () => {
  const companies = [
    { name: 'KIPIC', logo: client1 },
    { name: 'KOC', logo: client2 },
    { name: 'KNPC', logo:client3 },
    { name: 'KUFPEC', logo:client4  },
    { name: 'KISR', logo: client5 },
    { name: 'MEW', logo: client6 },
  ];

  const additionalCompanies = [
   ' KIPIC',
    'KOC',
    'KNPC',
    'KUFPEC',
    'KISR',
    'MEW',
    'Kuwait Energy Co.',
    'NBTC Group',
    'Al-Sayer Group',
    'Al-Mulla Group',
    'Alghanim Group',
    'Ahlia Group',
    'Zahem Malhotra',
    'KDDB GT & C',
   'Fawaz Refrigeration Co.',
   'City Bus',
   'Jassim Transport Group',
   'Kuwait Pearl Catering',
   'Americana',
   'Sadeer GT & C',
   'Gulf Group',
   'Gulf Cable Mfg. Co',
   'Gulf Bank',
   'Burgan Bank',
   'SQC Eng Consultants',
   'GEC DAR Eng Consultants etc..'
];

  return (
    <>
    <Navbar/>
    <AboutUs title=" Our Clients" route="Alnoor > Clients"/>
    <div className="p-4 mt-20 mb-20 bg-white ">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {companies.map((company, index) => (
          <div key={index} className="bg-white p-4 rounded-lg flex flex-col items-center justify-center">
            <img src={company.logo} alt={`${company.name} logo`} className="w-40 h-30 mb-2" />
            <p className="text-sm font-semibold">{company.name}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded-lg ml-20">
        <h2 className="text-2xl font-bold mb-2 ml-20">To list a few:</h2>
        <div className="grid grid-cols-2 gap-2 ml-20">
          {companies.concat(additionalCompanies).map((company, index) => (
            <p key={index} className="text-xl">
              {typeof company === 'string' ? company : company.name}
            </p>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CompanyGrid;