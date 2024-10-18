import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Client = () => {
  const clients = [
    { id: 1, name: "logoclient", logo: "./logo1.png" },
    { id: 2, name: "logoclient", logo: "./logo2.png" },
    { id: 3, name: "logoclient", logo: "./logo3.png" },
    { id: 4, name: "logoclient", logo: "./logo4.png" },
    { id: 5, name: "logoclient", logo: "./logo5.png" },
    { id: 6, name: "logoclient", logo: "./logo6.png" },
    { id: 7, name: "logoclient", logo: "./logo7.png" },
    { id: 8, name: "logoclient", logo: "./logo8.png" },
    { id: 9, name: "logoclient", logo: "./logo9.png" },
    { id: 10, name: "logoclient", logo: "./logo10.png" },
    { id: 11, name: "logoclient", logo: "./logo11.png" },
    { id: 12, name: "logoclient", logo: "./logo12.png" },
    { id: 13, name: "logoclient", logo: "./logo13.png" },
    { id: 14, name: "logoclient", logo: "./logo14.png" },
    { id: 15, name: "logoclient", logo: "./logo15.png" },
    { id: 16, name: "logoclient", logo: "./logo16.png" },
    { id: 17, name: "logoclient", logo: "./logo17.png" },
    { id: 18, name: "logoclient", logo: "./logo18.png" },
    { id: 19, name: "logoclient", logo: "./logo19.png" },
    { id: 20, name: "logoclient", logo: "./logo20.png" },
    { id: 21, name: "logoclient", logo: "./logo21.png" },
    { id: 22, name: "logoclient", logo: "./logo22.png" },
    { id: 23, name: "logoclient", logo: "./logo23.png" },
    { id: 24, name: "logoclient", logo: "./logo24.png" },
    { id: 25, name: "logoclient", logo: "./logo25.png" }

  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-white mb-10">
      <h2 className="text-center text-3xl font-bold mb-8">Trusted By Companies Like</h2>
      <div className="container mx-auto px-6">
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="p-4">
              <div className="bg-white rounded-md shadow-md p-6 flex justify-center items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
