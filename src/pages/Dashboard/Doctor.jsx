import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Doctor() {
  const { data: doctors = [], isLoading, isError, error } = useQuery({
    queryKey: ["allDoctors"],
    queryFn: async () => {
      const res = await axios.get(
        "https://hospital-management-server-seven.vercel.app/api/doctor"
      );
      return res.data;
    },
  });

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
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Meet Our Doctors
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {doctor.name}
            </h2>
            <p className="text-gray-500">{doctor.specialty}</p>
            <p className="text-sm text-gray-700 mt-2">{doctor.brief}</p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">
                📞 <span className="font-medium">{doctor.phone}</span>
              </p>
              <p className="text-gray-600">
                ✉️ <span className="font-medium">{doctor.email}</span>
              </p>
              {/* <p className="text-gray-600">
                🏥 Available on:{" "}
                <span className="font-medium">
                  {new Date(doctor.date).toDateString()}
                </span>
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;
