import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: "https://i.ibb.co.com/wZd3t0N9/labor-union-members-working-together-1.jpg",
      title: "Your Health, Our Commitment",
      des: "Compassionate care, modern technology — empowering your health every step of the way.",
    },
    {
      img: "https://i.ibb.co.com/ymfkNtxt/team-doctors-standing-together-hospital-premises-1.jpg",
      title: "Innovative Healthcare Solutions",
      des: "We combine leading-edge innovations with personalized service to ensure your wellbeing.",
    },
    {
      img: "https://i.ibb.co.com/pvbh8DkH/team-young-specialist-doctors-standing-corridor-hospital-1.jpg",
      title: "Care for Every Generation",
      des: "From childhood to senior years, we offer tailored medical solutions at every life stage.",
    },
  ];

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % sliders.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [sliders.length]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      {sliders.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out${
            index === currentSlider ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Bottom Left Content */}
            <div className="absolute bottom-16 left-10 md:left-20 max-w-2xl text-white z-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg font-light mb-6 drop-shadow-md">
                {slide.des}
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dot Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {sliders.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlider(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentSlider ? "bg-white" : "bg-white/40"
            } transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
