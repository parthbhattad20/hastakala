import React from 'react';
import vision from '../assets/vision.jpg'

const VisionSection = () => {
  return (
    <div className="flex items-center justify-center py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/2 relative">
          {/* Masked Image */}
          <div className="w-[50%] h-[50%] relative mask-image">
            <img 
              src={vision}
              alt="Vision Image" 
              className="object-cover w-full h-full ml-20 rounded-3xl"
            />
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Vision</h2>
          <p className="text-lg text-gray-600">
            To reduce Business risk for our customers through effective business advisory, auditing, training, and knowledge services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
