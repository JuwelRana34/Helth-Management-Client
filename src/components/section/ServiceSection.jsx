import React from 'react';

const ServiceSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-20 px-6">
            <p className="text-lg font-semibold uppercase tracking-wide">Join Our Dental Family</p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
                Comprehensive Dental Care <br className="hidden md:block" /> for a Healthier Smile
            </h1>
            <p className="text-lg text-gray-200 mt-6 max-w-2xl mx-auto">
                Take the first step toward optimal oral health. Schedule your personalized consultation with our expert dental team today.
            </p>
            <div className="mt-8">
                <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-blue-800  font-bold text-lg rounded-full transition duration-300">
                    Book an Appointment
                </button>
            </div>
        </div>
    );
};

export default ServiceSection;
