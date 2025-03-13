import React from "react";

const HealthNeeds = () => {
  return (
    <div className="w-3/4 mx-auto grid md:grid-cols-2 gap-10 py-20 items-center">
      {/* Left Section */}
      <div className="flex flex-col justify-center">
        <p className="w-fit px-5 py-2 bg-yellow-100 text-yellow-800 font-semibold rounded-full">
          Why Choose Mavis Clinic
        </p>
        <h2 className="py-5 text-4xl md:text-5xl font-bold text-[#21275C] leading-tight">
          Unique Approach To Your Health Needs
        </h2>
        <div className="bg-green-100 w-10/12 md:w-8/12 p-6 rounded-3xl shadow-md">
          <p className="text-gray-700">
            We provide a patient-centered approach with state-of-the-art
            treatments and personalized care plans for optimal well-being.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-6 justify-end">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-purple-100 p-6 rounded-3xl text-center shadow-md">
            <p className="text-3xl font-bold text-purple-700">25k+</p>
            <p className="text-gray-600 font-semibold">Happy Patients</p>
          </div>
          <img
            className="rounded-3xl max-w-[260px] h-[260px] object-cover shadow-lg"
            src="/section/image1.jpeg"
            alt="Happy Patients"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <img
            className="rounded-3xl max-w-[260px] h-[260px] object-cover shadow-lg"
            src="/section/image2.jpeg"
            alt="Doctor Consultation"
          />
          <div className="bg-blue-100 p-6 rounded-3xl text-center shadow-md">
            <p className="text-3xl font-bold text-blue-700">98%</p>
            <p className="text-gray-600 font-semibold">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthNeeds;
