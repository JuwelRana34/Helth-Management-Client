import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone, FaBars } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logOut} = useAuth();
  return (
    <>
      {/* Nav Top */}
      <div className="flex justify-between px-5 bg-[#39B5A4] text-white">
        <div className="flex items-center">
          <h1 className="py-2">We understand that each patient is unique</h1>
          <button className="ml-3 underline">Learn More</button>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="flex gap-1 items-center">
            <FaPhone /> 880 0000 00000
          </h1>
          <h1 className="flex gap-1 items-center">
            <CiLocationOn /> Find Location
          </h1>
          <h1 className="flex gap-1 items-center">Pay Your Bill</h1>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-[#1C5CBB]">
            MediCare
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
          <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${
                  isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${
                  isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${
                  isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              Services
            </NavLink>
          </ul>

          {/* Button */} 
          <a className="hidden md:block bg-[#1C5CBB] text-white px-5 py-2 rounded-md hover:bg-[#174a91] transition">
                Get Appointment
              </a>
          
              {
                user  ? <button  onClick={() => logOut()} className="btn border border-red-700">Logout</button> : <button className="btn  border-t-green-300">Login</button>
    
              }
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-[#1C5CBB] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white shadow-md`}>
          <ul className="flex flex-col items-center py-4 space-y-4">
            {["Home", "About Us", "Contact Us"].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${
                      isActive ? "text-[#1C5CBB] font-bold" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
