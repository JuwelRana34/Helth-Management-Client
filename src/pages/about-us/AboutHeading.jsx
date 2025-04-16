import React from "react";

const AboutHeading = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/MkHXZCT3/portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smili.jpg')",
      }}
    >
      {/* Overlay: Soft gradient + dark layer for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

      {/* Heading */}
      <h1 className="relative text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-md">
        About Us
      </h1>
    </div>
  );
};

export default AboutHeading;
