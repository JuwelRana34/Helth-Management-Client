import React, { useContext } from "react";
import ThemeContext from "../../Providers/ThemeContext";

const services = [
  {
    title: "Women's Health",
    img: "https://cdn-icons-png.flaticon.com/128/6401/6401082.png",
    alt: "Women’s Health",
    items: ["Pap Smears", "Breast Exams", "Family Planning"],
    description: "Dedicated to women's preventive care and lifelong wellness.",
  },
  {
    title: "Urgent Care",
    img: "https://cdn-icons-png.flaticon.com/128/17385/17385105.png",
    alt: "Urgent Care",
    items: ["Prompt Evaluation", "Common Illness", "Minor Injury Treatment"],
    description: "Ensuring timely treatment for better health outcomes.",
  },
  {
    title: "Telehealth Services",
    img: "https://cdn-icons-png.flaticon.com/128/7918/7918134.png",
    alt: "Telehealth Services",
    items: ["Virtual Consultations", "Remote Monitoring", "Prescription Refills"],
    description: "Convenient access to healthcare from anywhere.",
  },
  {
    title: "Diagnostic Services",
    img: "https://cdn-icons-png.flaticon.com/128/11232/11232259.png",
    alt: "Diagnostic Services",
    items: ["X-Rays", "Laboratory Testing", "Imaging (MRI, CT)"],
    description: "Advanced diagnostics for accurate health assessments.",
  },
  {
    title: "Primary Care",
    img: "https://cdn-icons-png.flaticon.com/128/18572/18572123.png",
    alt: "Primary Care",
    items: ["Routine Check-ups", "Immunizations", "Preventive Care"],
    description: "Comprehensive care for long-term health maintenance.",
  },
  {
    title: "Specialty Care",
    img: "https://cdn-icons-png.flaticon.com/128/2209/2209673.png",
    alt: "Specialty Care",
    items: ["Cardiology", "Oncology", "Gynecology"],
    description: "Expert medical services for specialized health needs.",
  },
  {
    title: "Mental Health",
    img: "https://cdn-icons-png.flaticon.com/128/15192/15192783.png",
    alt: "Mental Health",
    items: ["Counseling & Therapy", "Psychiatry", "Medication Management"],
    description: "Supporting emotional and psychological well-being.",
  },
  {
    title: "Senior Care",
    img: "https://cdn-icons-png.flaticon.com/128/12631/12631672.png",
    alt: "Senior Care",
    items: ["Geriatric Assessments", "Chronic Disease Care", "Memory Care"],
    description: "Personalized healthcare for aging with dignity.",
  },
];

const HomeCard = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <section className="py-12 font-lato w-[90%] mx-auto">
      <div className="mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary shadow-md bg-btnBg rounded-full py-2 px-4 font-semibold">
            Our Services
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mt-3">
            Begin Your Health Journey with <br /> Key Wellness Services
          </h1>
        </div>

        {/* Service Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ${theme === "light"? "text-gray-800" : "text-gray-400"}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${theme === "light"? "hover:bg-emerald-100" : "hover:bg-[#233433]"} bg-base-300 shadow-lg rounded-lg p-5 transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-emerald-100 hover:text-primary group duration-200 ease-in-out`}
            >
              <div className="flex justify-start">
                <img className="w-16 h-16" src={service.img} alt={service.alt} />
              </div>
              <h2 className="text-xl font-semibold mt-4 ">{service.title}</h2>
              <ul className="list-disc list-inside mt-2 text-sm">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className=" group-hover:text-primary mt-3 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8  ">
          <button className="flex items-center bg-btnBg text-primary font-semibold px-4 py-3 rounded-full hover:bg-emerald-300 transition">
            View More Services
            <img className="w-8 ml-4 rounded-full" src="https://cdn-icons-gif.flaticon.com/7740/7740503.gif" alt="Arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
