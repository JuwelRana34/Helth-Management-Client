import React from 'react';
import { NavLink } from "react-router-dom";

import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";


const Navbar = () => {
    return (
        <>
            {/* Nav Top */}
            <div className='flex justify-between px-5 bg-[#39B5A4]'>
                <div className='flex'>
                    <h1 className='py-2 text-base'>We understand that each patient is unique</h1>
                    <button className='btn btn-link'>Learn More</button>
                </div>
                <div className='flex gap-4'>
                    <h1 className='flex gap-1 justify-center items-center text-base'><FaPhone />880 0000 00000</h1>
                    <h1 className='flex gap-1 justify-center items-center text-base'><CiLocationOn />Find Location</h1>
                    <h1 className='flex gap-1 justify-center items-center text-base'>Pay Your Bill</h1>
                </div>
            </div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? "text-[#1C5CBB] font-bold" : "text-gray-600")}>
                                <li><a>Home</a></li>
                            </NavLink>
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? "text-[#1C5CBB] font-bold" : "text-gray-600")}>
                                <li><a>About Us</a></li>
                            </NavLink>
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? "text-[#1C5CBB] font-bold" : "text-gray-600")}>
                                <li><a>Contact Us</a></li>
                            </NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">MediCare</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-[#1C5CBB] font-bold" : "text-gray-600")}>
                            <li><a>Home</a></li>
                        </NavLink>
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-[#1C5CBB] font-bold" : "text-gray-600")}>
                            <li><a>About Us</a></li>
                        </NavLink>
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-[#1C5CBB] font-bold" : "text-gray-600")}>
                            <li><a>Contact Us</a></li>
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>

    );
};

export default Navbar;