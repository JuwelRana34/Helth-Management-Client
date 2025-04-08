import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhone, FaBars, FaMoon } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import useAuth from "../Hooks/useAuth";
import ThemeContext from "../Providers/ThemeContext";
import { LuSunMedium } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <>
      {/* Nav Top */}
      <div className="flex text-xs  flex-col md:text-base md:flex-row justify-between  p-2 md:px-4 bg-primary text-white">
        <div className="flex items-center justify-center">
          <h1 className="py-2">We understand that each patient is unique</h1>
          <button className="ml-2 underline">Learn More</button>
        </div>
        <div className="flex gap-3 items-center justify-center">
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
      <nav className=" bg-base-100 shadow-md sticky top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-primary">
            MediCare
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black hover:text-primary transition font-medium ${isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/book-appoinment"
              className={({ isActive }) =>
                `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              Book Appoinment
            </NavLink>
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${isActive ? "text-[#1C5CBB] font-bold" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </ul>


          {user ? (
            <button
              onClick={() => logOut()}
              className="bg-red-400 px-6 py-1 rounded-md text-white"
            >
              Logout
            </button>
          ) : (
            <div className="flex space-x-3">
              <Link to={'/login'} className="btn bg-secondary px-6 py-1 rounded-md text-white">Login</Link>
              <Link to={'/register'} className="btn bg-secondary px-6 py-1 rounded-md text-white">Register</Link>
            </div>
          )}
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
        <div
          className={`${isOpen ? "block" : "hidden"
            } md:hidden bg-white shadow-md`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            {[ "About", "services","book-appoinment","Dashboard"].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-[#1C5CBB] transition font-medium ${isActive ? "text-[#1C5CBB] font-bold" : ""
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
