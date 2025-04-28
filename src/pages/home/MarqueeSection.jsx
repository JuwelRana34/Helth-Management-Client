import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { FaHospital, FaUserMd, FaHeartbeat, FaStethoscope, FaClinicMedical } from 'react-icons/fa';
import ThemeContext from '../../Providers/ThemeContext';

const MarqueeSection = () => {
  const sponsors = [
    { logo: <FaHospital size={32} />, name: "City Hospital" },
    { logo: <FaUserMd size={32} />, name: "Healthcare Professionals" },
    { logo: <FaHeartbeat size={32} />, name: "Heart Care Clinic" },
    { logo: <FaStethoscope size={32} />, name: "Medical Specialists" },
    { logo: <FaClinicMedical size={32} />, name: "Global Health Center" },
  ];
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${theme === "light"? 'bg-primary': 'bg-[#0079558d]'} py-6  text-white`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 px-4">
        {/* "Our Medical Partners" Title */}
        <h1 className="text-2xl font-bold whitespace-nowrap border-r-2 pr-4 border-white">
          Our Medical Partners
        </h1>

        {/* Marquee Section */}
        <div className="w-full lg:flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-teal-400">
          <Marquee gradient={false} speed={50}>
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-4 py-2 mx-2 bg-emerald-600 rounded-md shadow-md"
              >
                {sponsor.logo}
                <span className="font-medium text-sm sm:text-base">{sponsor.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;

