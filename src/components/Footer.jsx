import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Our Services Section */}
        <div>
          <h2 className="font-bold mb-4">OUR SERVICES</h2>
          <ul className="space-y-2">
            <li>ISO Standards and API systems consultancy</li>
            <li>Auditing</li>
            <li>Training</li>
            <li>International Business Development</li>
            <li>Business Advisory</li>
            <li>Strategy</li>
            <li>Sustainability</li>
            <li>IT Consulting</li>
            <li>Six Sigma and Other support services</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-bold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Services</li>
            <li>Clients</li>
            <li>Partners</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-bold mb-4">CONTACT</h2>
          <ul className="space-y-2">
            <li>5th Floor, Panasonic Tower, Kuwait City</li>
            <li>+965 97860595</li>
            <li>info@alnoor-consultants.com</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
