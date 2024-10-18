import React from 'react';
import { Route } from 'react-router-dom';
import image1 from '../assets/business.webp'

const AboutUs = ({title, route}) => {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={image1}// Replace this with the actual image path or URL
          alt="Services"
          className="w-full h-full object-fit mb-10"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text */}
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-white text-sm md:text-lg mt-2">{route}</p>
      </div>
    </div>
  );
};

export default AboutUs;
