import React, { useState } from "react";
import photo from "../../../src/assets/aboutus/about1.jpg";
import squre from "../../../src/assets/aboutus/about-shape1.png";
import squre2 from "../../../src/assets/aboutus/about-shape2.png";
import squre3 from "../../../src/assets/aboutus/about-shape3.png";
import videoThumbnail from "../../../src/assets/aboutus/wrap-video.jpg";
import line from "../../../src/assets/aboutus/line.png";

function Aboutus_section1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="grid  grid-cols-12 mt-5 justify-center container mx-auto">
        <div className="col-span-12 lg:col-span-6 w-full md:pr-10">
          <div className="aboutUs-img relative p-2">
            <img
              src={photo}
              className="mt-10 shadow-lg relative rounded-xl z-[5] md:w-72 mx-auto md:h-auto"
              alt="Healthcare Logo"
            />
            <div className="absolute z-0 top-0 left-10">
              <img src={squre} alt="svg img" />
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <img src={squre2} alt="svg img" />
            </div>
            <div className="absolute -bottom-16 left-24">
              <img src={squre3} alt="svg img" />
            </div>
            <div className="absolute -bottom-10 right-0 z-[6] bg-white shadow-2xl rounded-3xl border p-2 mr-2 md:p-5">
              <div className="flex justify-center items-center gap-5">
                <div>
                  <img
                    className="w-16 rounded-full bg-[#eebcff] p-2"
                    src="https://cdn-icons-png.flaticon.com/128/83/83654.png"
                    alt="icon"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold text-xl md:text-4xl text-gray-800">
                    45+
                  </h1>
                  <h3 className="text-[#767ab2]">Global Healthcare Awards</h3>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 z-[9] bg-white p-3 rounded-3xl border shadow-lg">
              <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
                <img
                  className="rounded-2xl w-32 md:w-48 mb-2"
                  src={videoThumbnail}
                  alt="video thumbnail"
                />
                
                  <img 
                  className="absolute  w-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="https://cdn-icons-png.flaticon.com/128/4208/4208490.png"
                  alt="play button"
                />
               
                
              </div>
              <img className="w-20" src={line} alt="line" />
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-16 lg:mt-0 lg:col-span-6 w-full">
          <div className="mt-3 space-y-5 p-2">
            <span className="bg-primary/20 text-primary rounded-full p-3"> About Us </span>
            <h1 className="font-bold text-3xl text-[#20265b] md:text-5xl">
              Unveiling Mavis: The Heartbeat of Healthcare
            </h1>
            <p className="text-[#20265b]">
              At Mavis Clinic, your health and well-being are at the heart of everything we do. We understand that each patient is unique, and we are dedicated to providing personalized, compassionate care tailored to your specific needs.
            </p>
            <ul className="text-[#20265b]">
              <li>
                <img className="w-5 inline mx-2" src="https://cdn-icons-png.flaticon.com/128/13965/13965236.png" alt="icon" />
                Convenient Appointment Booking
              </li>
              <li>
                <img className="w-5 inline mx-2" src="https://cdn-icons-png.flaticon.com/128/13965/13965236.png" alt="icon" />
                State-of-the-Art Facilities
              </li>
              <li>
                <img className="w-5 inline mx-2" src="https://cdn-icons-png.flaticon.com/128/13965/13965236.png" alt="icon" />
                Patient-Centric Approach
              </li>
              <li>
                <img className="w-5 inline mx-2" src="https://cdn-icons-png.flaticon.com/128/13965/13965236.png" alt="icon" />
                Comprehensive Medical Services
              </li>
            </ul>
            <p className="text-[#20265b]">
              Our dedicated team of medical professionals is here to guide you on your health journey.
            </p>
            <button className="text-white bg-primary p-2 px-4 rounded-md">More About Us</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-full max-w-2xl">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-96"
                src="https://www.youtube.com/embed/TOPrY7YqBZA?si=3g7qrpQS4ThCTY5B"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Aboutus_section1;
