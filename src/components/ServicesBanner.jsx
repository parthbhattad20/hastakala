import React from 'react';

const ServiceBannerComponent = () => {
  return (
    <div className="h-[150px] bg-sky-500 py-4 px-6 flex justify-between items-center">
      <h2 className="text-white text-2xl font-semibold">
        We always ready to serve you.
      </h2>
      <button className="bg-transparent hover:bg-white hover:text-sky-500 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded transition duration-300">
        VIEW MORE SERVICES
      </button>
    </div>
  );
};

export default ServiceBannerComponent;