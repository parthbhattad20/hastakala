import React from 'react';
import { FaFilePdf, FaFileImage } from 'react-icons/fa';

const letters = [
  {
    name: "Alnoor-Profile-Latest.pdf",
    type: "pdf",
    size: "1.5 MB",
    url: "./Alnoor-Profile-Latest.pdf",
  },
  {
    name: "Citybus appreciation letter.jpg",
    type: "image",
    size: "339 KB",
    url: "./Citybus-appreciation-letter.jpg",
  },
  {
    name: "GEC DAR appreciation letter.jpg",
    type: "image",
    size: "345 KB",
    url: "./GEC-DAR-appreciation-letter.jpg",
  },
  {
    name: "KUFFPEC Appreciation letter.pdf",
    type: "pdf",
    size: "233 KB",
    url: "./KUFFPEC-Appreciation-letter.pdf",
  },
  {
    name: "MEBS Appreciation letter.pdf",
    type: "pdf",
    size: "48 KB",
    url: "./MEBS.pdf",
  },
  {
    name: "MOH appreciation letter Abu Saud.pdf",
    type: "pdf",
    size: "315 KB",
    url: "./MOH-appreciation-letter-Abu-Saud.pdf",
  },
];

const AppreciationLetters = () => {
  return (
    <div className="bg-white min-h-screen p-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Appreciation Letters</h1>

      {/* Introductory Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700 mb-4 text-justify">
          At Alnoor Advisory Services, we take pride in the recognition we've received from our esteemed partners and clients.
          These appreciation letters highlight our commitment to excellence and the trust our clients place in us.
        </p>
      </div>

      {/* Letters Display */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              {letter.type === "pdf" ? (
                <FaFilePdf className="text-red-600 text-3xl mr-4" />
              ) : (
                <FaFileImage className="text-blue-600 text-3xl mr-4" />
              )}
              <div>
                <p className="text-gray-800 font-semibold text-lg truncate">{letter.name}</p>
                <p className="text-sm text-gray-500">{letter.size}</p>
              </div>
            </div>

            {/* Display PDF or Image */}
            {letter.type === "pdf" ? (
              <iframe
                src={letter.url}
                className="w-full h-96 border rounded-lg shadow-lg"
                title={letter.name}
              ></iframe>
            ) : (
              <img
                src={letter.url}
                alt={letter.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppreciationLetters;
