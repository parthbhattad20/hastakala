import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing React Icons
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MapComponent from '../components/Map';
import AboutUs from '../components/ImageTop';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <AboutUs title="Contact Us" route="Alnoor > Contact"/>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img 
                    src="https://pagedone.io/asset/uploads/1696488602.png" 
                    alt="ContactUs tailwind section" 
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-green-100 object-cover" 
                    style={{ filter: 'brightness(0.8) sepia(1) hue-rotate(120deg)' }} // Adding a green texture effect
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">Contact us</h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6 block">
                      <a href="tel:4706011911" className="flex items-center mb-6">
                        <FaPhoneAlt className="text-green-500" size={30} />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">+965 97860595</h5>
                      </a>
                      <a href="mailto:Pagedone1234@gmail.com" className="flex items-center mb-6">
                        <FaEnvelope className="text-green-500" size={30} />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">info@alnoor-consultants.com</h5>
                      </a>
                      <a className="flex items-center">
                        <FaMapMarkerAlt className="text-green-500" size={30} />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">5th Floor, Panasonic Tower, Kuwait City</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
              <input 
                type="text" 
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" 
                placeholder="Name" 
              />
              <input 
                type="text" 
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" 
                placeholder="Phone Number" 
              />
              <input 
                type="email" 
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" 
                placeholder="Email" 
              />
              <textarea 
                className="w-full h-32 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none pl-4 pt-2 mb-10" 
                placeholder="Message" 
              />
              <button className="w-full h-12 text-white bg-blue-600 rounded-full font-semibold text-lg leading-7 transition duration-300 ease-in-out hover:bg-blue-700">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
      <MapComponent/>
      <Footer />
    </div>
  );
};

export default ContactUs;
