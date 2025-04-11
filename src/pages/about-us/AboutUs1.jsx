import React from 'react';
import doctor_paitent from '../../assets/Home/Doctor-Patient_Relationships .jpg';
import doctor from '../../assets/Home/icons/doctor.png';
import globe from '../../assets/Home/icons/globe.png';
import laptop from '../../assets/Home/icons/laptop.png';
import { FaUserMd, FaHospital, FaClipboardList } from "react-icons/fa";


const AboutUs1 = () => {
        return (
            <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                
                {/* Text Content */}
                <div className="flex-1">
                  <p className="text-[#2F7A55] font-bold tracking-wide uppercase">
                    Our Journey & Success
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 py-5 leading-snug">
                    Driven by Excellence, Proven by Results
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our journey began with a vision to simplify and transform healthcare operations through 
                    cutting-edge technology. Over the years, <span className="font-semibold text-gray-700">Health Care</span> has evolved into 
                    a trusted name in digital hospital management. We have focused on innovation, efficiency, 
                    and impact—helping hospitals, clinics, and healthcare professionals deliver better patient care.
                  </p>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    From prestigious awards to empowering thousands of medical professionals, our success 
                    is measured not just in numbers but in the real-life improvements we bring to healthcare 
                    systems worldwide. We continue to shape a smarter, more connected future in healthcare 
                    management.
                  </p>
                </div>
        
                {/* Image & Statistics */}
                <div className="flex-1 space-y-6">
                  <img
                    className="w-full max-w-2xl object-cover rounded-xl shadow-lg"
                    src={doctor_paitent}
                    alt="Doctor and Patient"
                  />
        
                  {/* Statistics */}
                </div>
              </div>
            </div>
          );
        };
        
        // Statistic Card Component
        const StatCard = ({ icon, number, text }) => {
          return (
            <div className="bg-gray-100 px-6 py-5 rounded-lg flex items-center gap-4 shadow-md">
              <div className="text-blue-600 text-3xl">{icon}</div>
              <div>
                <p className="text-xl font-semibold text-gray-800">{number}</p>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            </div>
          );
        };
        

export default AboutUs1;