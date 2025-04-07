import React from "react";

const AboutHeading = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.ibb.co.com/rfsmVNZ4/image-2022-01-04-T09-35-54-562-Z.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Heading */}
      <h1 className="relative text-white text-3xl md:text-5xl font-bold tracking-wide underline">
        About Us
      </h1>
    </div>
  );
};

export default AboutHeading;
