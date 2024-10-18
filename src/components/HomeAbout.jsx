import React, { useState, useEffect } from 'react';
import { Users, Globe, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/aboutimage.jpg'

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="relative h-[500px] bg-gray-800 text-white p-8 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Business people"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left side - About Us text */}
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold mt-10 mb-4 text-white">About Us</h2>
            <p className="text-white mb-4 text-justify w-2/3">
              We are a leading management consulting firm in Kuwait. Established in 2010 and assisted <span className="font-bold">200+</span> companies globally on many consulting projects and imparted multiple level trainings. Some of our key clients in Kuwait include KOC, KNPC, KUFPEC, KPC, KIPIC, MEW, KISR, Kuwait Energy, Gulf Bank, Burgan Bank, Alghanim Group, NBTC Group, Al Mulla Group, Al Sayer Group, Ahlia Chemicals, Jassim Transport, Citybus, KDDB, Sadeer, SDPM, GEC DAR, KBH, TAEP, SQC, Group 5 etc.
            </p>
            <div className="space-x-4">
              <button onClick={()=> navigate("/why-us")} className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition">
                MEET OUR TEAM ›
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                PROFILE ↓
              </button>
            </div>
          </div>

          {/* Right side - Statistics */}
          <div className="lg:w-1/3 flex flex-col gap-6 mt-10 ml-10">
            <StatCard icon={<Users size={70} />} number={200} label="Clients" />
            <StatCard icon={<Globe size={70} />} number={5} label="Countries" />
            <StatCard icon={<Trophy size={70} />} number={25} label="Years of Experience" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About

const StatCard = ({ icon, number, label }) => (
  <div className="flex items-center gap-4">
    <div className="bg-green-500 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-4xl font-bold text-green-500">
        <CountUp end={number} duration={2000} />+
      </h3>
      <p className="text-gray-300">{label}</p>
    </div>
  </div>
);