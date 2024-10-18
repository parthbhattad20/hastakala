import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="flex flex-wrap justify-between bg-white p-8">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Get In Touch!</h2>
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-green-500 text-6xl mr-4" />
          <p>Office # 14, 5th Floor, Panasonic Tower, Qibla, Kuwait City</p>
        </div>
        <div className="flex items-center mb-4">
          <FaPhone className="text-green-500 text-6xl mr-4" />
          <p>+965 9786 0595, 5167 8907</p>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-green-500 text-6xl mr-4" />
          <p>info@alnoor-consultants.com</p>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              className="w-1/2 p-2 border rounded"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-1/2 p-2 border rounded"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Phone"
          />
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Subject"
          />
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Message"
            rows="4"
          ></textarea>
          <div className="flex items-center">
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
