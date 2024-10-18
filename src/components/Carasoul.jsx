import React, { useState, useEffect } from "react";
import image1 from '../assets/slider/image1.jpeg';
import image2 from '../assets/slider/image2.jpeg'; // Add more images if needed
import image3 from '../assets/slider/image3.jpeg';
import image4 from '../assets/slider/image4.jpeg';
import image5 from '../assets/slider/image5.jpeg';
import image6 from '../assets/slider/image6.jpeg';
import image7 from '../assets/slider/image7.jpeg';
import image8 from '../assets/slider/image8.jpeg';
import image9 from '../assets/slider/image9.jpeg';
import image10 from '../assets/slider/image10.jpeg';
import image11 from '../assets/slider/image11.jpeg';
import image12 from '../assets/slider/image12.jpeg';
import image13 from '../assets/slider/image13.jpeg'
import image14 from '../assets/slider/image14.jpeg'
import image15 from '../assets/slider/image15.jpeg'
import image16 from '../assets/slider/image16.jpeg'
import image17 from '../assets/slider/image17.jpeg'
import video1 from '../assets/slider/video1.mp4'



import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();

  const slides = [
    {
      image: image1,
      title: "Management Consultancy",
      description: "We are passionate to add value to your business, be it ISO systems, Six Sigma business advisory, and financial advisory.",
      buttonText: "Know More",
    },
    {
      image: image2,
      title: "Advisory",
      description: "One stop solution for all your business advisory and financial advisory needs.",
      buttonText: "Know More",
    },
    {
      image: image3,
      title: "Auditing",
      description: "Specialist for all your ISO systems audits, supplier audits, third party audits, etc.",
      buttonText: "Know More",
    },
    {
      image: image4,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image5,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image6,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image7,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image8,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image9,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image10,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image11,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image12,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image13,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image14,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image15,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image16,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: image17,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },
    {
      image: video1,
      title: "Training",
      description: "Specialized in customized training as well as ISO system, management, skilled and soft skills training programs.",
      buttonText: "Know More",
    },

    // Add remaining images here...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoScroll); // Cleanup interval on component unmount
  }, [currentIndex]); // Re-run when currentIndex changes

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Slide Image */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="w-full h-full object-contain transition-all duration-500"
      />

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer bg-gray-800 bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </div>
    </div>
  );
};

export default Carousel;
