import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaMailBulk } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Team = () => {
  return (
    <div>
        <Navbar/>

<div className="font-sans">
  <div className="lg:max-w-5xl max-w-3xl mx-auto mt-10 ">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-gray-800 text-3xl font-extrabold">Meet Our Management Team</h2>
      <p className="text-gray-800 text-sm mt-4 leading-relaxed">
        Meet our team of professionals to serve you.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
      <div className="border rounded-lg overflow-hidden">
        <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">Namshan Saud Al-Namshan</h4>
          <p className="text-gray-800 text-xs mt-1">S Chairman </p>

          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
            >
              <FaMailBulk color="white" size={14} />
            </button>
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
            >
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">Shaik Khaleel Basha</h4>
          <p className="text-gray-800 text-xs mt-1">Managing Partner</p>

          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
            >
              <FaMailBulk color="white" size={14} />
            </button>
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
            >
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">Ajay Gavande</h4>
          <p className="text-gray-800 text-xs mt-1">Partner</p>

          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
            >
              <FaMailBulk color="white" size={14} />
            </button>
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
            >
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
  
     


      {/* Repeat for the other team members */}
    </div>
    
  </div>
</div>
<div className="font-sans mb-10">
  <div className="lg:max-w-5xl max-w-3xl mx-auto mt-10">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-gray-800 text-3xl font-extrabold">Meet Our Associate Partners</h2>
      <p className="text-gray-800 text-sm mt-4 leading-relaxed">
        Meet our team of professionals to serve you.
      </p>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
      <div className="border rounded-lg overflow-hidden">
        <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">Sanjay Santuka</h4>
          <p className="text-gray-800 text-xs mt-1"> Financial Advisory</p>

          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
            >
              <FaMailBulk color="white" size={14} />
            </button>
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
            >
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">Probal Choudhuri</h4>
          <p className="text-gray-800 text-xs mt-1">IT Systems & Risk Management</p>

          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
            >
              <FaMailBulk color="white" size={14} />
            </button>
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
            >
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">Jayant Shiradkar</h4>
          <p className="text-gray-800 text-xs mt-1">EnMS Advisory</p>

          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
            >
              <FaMailBulk color="white" size={14} />
            </button>
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
            >
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <img src="https://readymadeui.com/team-1.webp" className="w-full h-56 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">Gaurav Chhaunkar</h4>
          <p className="text-gray-800 text-xs mt-1">QHSE IMS Software</p>

          <div className="space-x-4 mt-4">
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]"
            >
              <FaMailBulk color="white" size={14} />
            </button>
            <button
              type="button"
              className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]"
            >
              <FaLinkedinIn color="white" size={14} />
            </button>
          </div>
        </div>
      </div>
  
     


      {/* Repeat for the other team members */}
    </div>
    
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Team
