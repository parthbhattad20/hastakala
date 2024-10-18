import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaLinkedin, FaTwitter, FaFacebookF, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Why Us?', path: '/why-us' },
    { name: 'Services', path: '/services' },
    { name: 'Our Clients', path: '/ourclients' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News & Updates', path: '/news' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="font-sans">
      {/* Top Bar */}
      <div className="bg-[#00A9CE] text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4">
          <div className="flex space-x-4 items-center mb-2 sm:mb-0">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span className="text-sm">+965 9786 0595, 5167 8907</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
            <a href="mailto:info@alnoor-consultants.com" className="flex items-center space-x-1 hover:text-gray-200 transition duration-300">
              <span className="text-sm">info@alnoor-consultants.com</span>
            </a>
            <div className="flex space-x-3">
              {[FaLinkedin, FaTwitter, FaFacebookF, FaYoutube].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-gray-200 transition duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-12 w-auto sm:h-16" />
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-between flex-1 ml-8">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link 
                      to={item.path}
                      className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem}
                              to={`${item.path}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <button 
                  onClick={() => openPdf("/assets/alnoorpdf.pdf")}
                  className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-4 py-2 rounded-full transition duration-300"
                >
                  AL-Noor Profile
                </button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button 
                onClick={() => openPdf("/assets/alnoorpdf.pdf")}
                className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-4 py-2 rounded-full transition duration-300 w-full text-center"
              >
                AL-Noor Profile
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;