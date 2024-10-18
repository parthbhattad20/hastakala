import React from "react";


const MapComponent = () => {
    return (
        <div className="flex items-center justify-center">
      <div className="h-96 w-full mx-20 my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.097978137872!2d47.97869421547476!3d29.37585938213809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9b18717c1a8d%3A0x5dcbfbf1da43f131!2sPanasonic%20Tower!5e0!3m2!1sen!2sin!4v1603325645212!5m2!1sen!2sin"
          className="w-full h-full border-solid"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      </div>
    );
  };


export default MapComponent
  