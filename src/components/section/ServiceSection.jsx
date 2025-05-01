import React from 'react';
import { Link } from 'react-router';

const ServiceSection = () => {
    return (
        <div className="bg-[#143323] text-white text-center py-20 px-6 dark:bg-dark dark:text-darkText">
            <p className="text-lg font-semibold uppercase tracking-wide">Join Our Dental Family</p>
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mt-4">
                Comprehensive Dental Care <br className="hidden md:block" /> for a Healthier Smile
            </h1>
            <p className=" md:text-lg text-gray-200 mt-6 max-w-2xl mx-auto">
                Take the first step toward optimal oral health. Schedule your personalized consultation with our expert dental team today.
            </p>
            <div className="mt-8">
                <Link to="/Subscription" className="px-6 py-3 bg-primary shadow-lg  text-white  font-bold text-lg rounded-full transition duration-300  dark:bg-darkHeadingTxt">
                    Book an Appointment
                </Link>
            </div>
        </div>
    );
};

export default ServiceSection;
