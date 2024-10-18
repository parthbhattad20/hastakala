import React from 'react';
import coral from '../assets/coral.png'
import greenflame from '../assets/green-flame-logo.jpg'
import tyche from '../assets/tyche-png.png'

const BusinessAssociates = () => {
  return (
    <div className="bg-blue-500 p-8">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">Business Associates</h2>
      <div className="flex justify-between items-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={coral} alt="GreenFlame" className="w-48" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={greenflame} alt="TT Logo" className="w-48" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={tyche} alt="Coral" className="w-48" />
        </div>
      </div>
    </div>
  );
};

export default BusinessAssociates;