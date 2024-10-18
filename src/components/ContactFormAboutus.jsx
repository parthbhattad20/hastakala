import React from 'react';

const ContactForm = () => (
  <div className="bg-gray-800 p-8">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
    <form className="max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-4 p-2 rounded"
      />
      <input
        type="tel"
        placeholder="Phone"
        className="w-full mb-4 p-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-2 rounded"
      />
      <textarea
        placeholder="Message"
        className="w-full mb-4 p-2 rounded h-32"
      ></textarea>
      <div className="mb-4">
        <div className="g-recaptcha" data-sitekey="your_recaptcha_site_key"></div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm w-full"
      >
        SEND
      </button>
    </form>
  </div>
);

export default ContactForm;