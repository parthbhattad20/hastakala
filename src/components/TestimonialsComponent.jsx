import React, { useState, useEffect } from 'react';
import Citybus from '../assets/appriciation/Citybus.jpg'
import GEC from '../assets/appriciation/GEC.jpg'
import KUFPEC from '../assets/appriciation/KUFPEC.jpg'
import MEBS from '../assets/appriciation/MEBS.jpg'
import MEBS2 from '../assets/appriciation/MEBS2.jpg'
import MOH from '../assets/appriciation/MOH.jpg'

const testimonials = [
  { title: "KUFPEC Appreciation letter", image: KUFPEC },
  { title: "MOH appreciation letter Abu Saud", image: MOH },
  { title: "GEC DAR appreciation letter", image: GEC },
  { title: "MEBS Appreciation letter ", image: MEBS },
  { title: "Citybus appreciation letter", image: Citybus },
  { title: "MOH appreciation letter", image: MOH },
 
  // Add more testimonials if needed
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-14 text-center">Testimonials</h1>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-2">
                <div className="bg-white p-4 border-t-green-400">
                  <img src={testimonial.image} alt={testimonial.title} className="w-full object-contain mb-4 border-t-green-400" />
                  <h3 className="text-sm font-medium text-center text-gray-800">{testimonial.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-300' : 'bg-blue-100'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;