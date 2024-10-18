import React from "react";
import { FiAlertTriangle, FiUserCheck, FiLock, FiFolder } from "react-icons/fi";

const ServiceCard = ({ title, description, icon, borderColor,bgcolor }) => {
  return (
    <div className="relative group overflow-hidden rounded-md shadow-md transform transition duration-300 hover:scale-105 cursor-pointer">

      <div className={`absolute bottom-0 left-0 h-1 w-full ${bgcolor} group-hover:h-full transition-all duration-500 ease-in-out`}></div>

   
      <div
        className={`relative z-10 p-6 bg-white group-hover:bg-transparent border-t-4 ${borderColor} transition-all duration-500`}
      >
        <div className="flex items-center space-x-3">
 
          <div className="group-hover:text-white transition-colors duration-500">
            {icon}
          </div>
          <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-500">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 group-hover:text-white mt-3 transition-colors duration-500">
          {description}
        </p>
        <button className="text-gray-600 items-center group-hover:text-white mt-3 transition-colors duration-500">
          Read more
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="px-6 py-10">
      <div className="text-center mb-12">
        <p className="text-2xl text-gray-600 mt-2">
          We offer a range of services to help your business succeed, from risk
          management to cybersecurity solutions.
        </p>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          title="Enterprise Risk Management Consulting"
          description="We provide consulting services that help clients define and implement their Enterprise risk and manage them as part of their business planning. We have established consulting practices in International standards such as ISO 31000, COSO, SOC 1, and SOC 2 to name a few."
          icon={<FiAlertTriangle size={40} className="text-blue-400" />}
          borderColor="border-green-400"
          bgcolor="bg-black"
        />
        <ServiceCard
          title="IT Governance"
          description="We provide consulting services that result in clients defining and implementing their IT Strategy. We have established consulting practices in International standards such as COBIT and ISO 20000 to name a few."
          icon={<FiUserCheck size={40} className="text-orange-400" />}
          borderColor="border-purple-400"
                 bgcolor="bg-black"
        />
        <ServiceCard
          title="Cybersecurity Consulting Services"
          description="We offer consulting services to help clients define and implement their cyber security posture. We use international best practices to determine threat-attack scenarios."
          icon={<FiLock size={40} className="text-blue-400" />}
          borderColor="border-purple-400"
          bgcolor="bg-black"
        />
        <ServiceCard
          title="Privacy Consulting Services"
          description="We help clients define and implement privacy policies. Our step-by-step implementation journey helps clients achieve their privacy goals."
          icon={<FiFolder size={40} className="text-blue-400" />}
          borderColor="border-orange-400"
          bgcolor="bg-black"
        />
      </div>
    </div>
  );
};

export default Services;
