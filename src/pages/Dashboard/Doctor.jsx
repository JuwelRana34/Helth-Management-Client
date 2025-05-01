import React from "react";
import useFetchData from "../../utils/fetchGetFunction";
import { Link } from "react-router";

function Doctor() {
  const { data: doctors = [], isLoading, isError, error } = useFetchData("allDoctors" ,"doctor")

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">Loading doctor details...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-red-500 text-lg">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="min-h-screen  py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 dark:text-darkHeadingTxt">
        Meet Our Doctors
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white dark:text-darkText dark:bg-dark  shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800  dark:text-darkText">
              {doctor.name}
            </h2>
            <p className="text-gray-500 dark:text-darkText">{doctor.specialty}</p>
            <p className="text-sm text-gray-700 dark:text-darkText mt-2">{doctor.brief}</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600 dark:text-darkText">
                📞 <span className="font-medium">{doctor.phone}</span>
              </p>
              <p className="text-gray-600 dark:text-darkText">
                ✉️ <span className="font-medium">{doctor.email}</span>
              </p>
              <Link to={`/doctor/${doctor._id}`} className="text-center block text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 mt-4 transition duration-300 dark:text-darkText dark:bg-gray-800 dark:hover:bg-gray-700">
                {/* className="text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 mt-4 transition duration-300 dark:text-darkText dark:bg-gray-800 dark:hover:bg-gray-700"> */}
                  Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;
