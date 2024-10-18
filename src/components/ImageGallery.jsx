import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AboutUs from './ImageTop';
import imageg1 from '../assets/gallery/gallery1.jpeg'
import imageg2 from '../assets/gallery/gallery2.jpeg'
import imageg3 from '../assets/gallery/gallery3.jpg'
import imageg4 from '../assets/gallery/gallery4.jpg'
import imageg5 from '../assets/gallery/gallery5.jpg'
import imageg6 from '../assets/gallery/gallery6.jpg'
import imageg7 from '../assets/gallery/gallery7.jpg'
import imageg8 from '../assets/gallery/gallery8.jpg'
import imageg9 from '../assets/gallery/gallery9.jpg'
import imageg10 from '../assets/gallery/gallery10.jpg'
import imageg11 from '../assets/gallery/gallery11.jpg'
import imageg12 from '../assets/gallery/gallery12.jpg'
import imageg13 from '../assets/gallery/gallery13.jpg'
import imageg14 from '../assets/gallery/gallery14.jpg'
import imageg15 from '../assets/gallery/gallery15.jpg'
import imageg16 from '../assets/gallery/gallery16.jpg'
import imageg17 from '../assets/gallery/gallery17.jpg'


const images = [
  imageg1,
  imageg2,
  imageg3,
  imageg4,
  imageg5,
  imageg5,
  imageg6,
  imageg7,
  imageg8,
  imageg9,
  imageg10, 
  imageg11,
  imageg12,
  imageg13,
  imageg14,
  imageg15,
  imageg16,
  imageg17,
]

const ImageGallery = () => {
  return (
    <>
   <Navbar/>
   <AboutUs title="Gallery" route="Alnoor > Gallery"/>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ImageGallery;