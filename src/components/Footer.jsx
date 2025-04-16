import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2F7A55] py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-extrabold">MediCare Hospital</h2>
          <p className="mt-4 text-Primary text-sm leading-relaxed">
            Providing exceptional healthcare with expert doctors, state-of-the-art equipment, and compassionate care for every patient.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-white  pb-2">Quick Links</h3>
          <ul className="mt-4 space-y-3   text-sm">
            <li><a href="#" className="">About Us</a></li>
            <li><a href="#" className="">Our Doctors</a></li>
            <li><a href="#" className="">Services</a></li>
            <li><a href="#" className="">Appointments</a></li>
            <li><a href="#" className="">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-white pb-2">Contact Us</h3>
          <ul className="mt-4  text-sm space-y-3">
            <li className="flex items-center space-x-3"><FaMapMarkerAlt className="" /> <span>123 Health St, MediCity, MC 45678</span></li>
            <li className="flex items-center space-x-3"><FaPhoneAlt className="" /> <span>+1 234 567 890</span></li>
            <li className="flex items-center space-x-3"><FaEnvelope className="" /> <span>contact@medicare.com</span></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-white pb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className=""><FaFacebookF size={22} /></a>
            <a href="#" className=""><FaTwitter size={22} /></a>
            <a href="#" className=""><FaLinkedinIn size={22} /></a>
            <a href="#" className=""><FaInstagram size={22} /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-primarytext-sm mt-10 border-t border-white pt-6">
        &copy; {new Date().getFullYear()} MediCare Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;