import React from "react";
import useFetchData from "../../utils/fetchGetFunction";
import { Mail, PhoneCall, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

function Doctor() {
  const { data, isLoading, isError } = useFetchData("getDoctors", "doctor");

  if (isLoading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching data.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Meet Our <span className="text-primary">Doctors</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((doctor) => (
          <motion.div
            key={doctor._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border p-5 hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-lg text-gray-600 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" /> {doctor.specialty}
              </p>
              <p className="text-sm text-gray-500 mt-2 flex-grow">{doctor.brief.substring(0,50)}...</p>
              
              <div className="mt-4 space-y-2">
                <p className="flex items-center gap-2 text-gray-700 text-sm">
                  <Mail className="w-5 h-5 text-blue-500" /> {doctor.email}
                </p>
                <p className="flex items-center gap-2 text-gray-700 text-sm">
                  <PhoneCall className="w-5 h-5 text-green-500" /> {doctor.phone}
                </p>
              </div>
            </div>

            {/* View Profile Button at Bottom */}
            <div className="mt-auto pt-4">
              <button className="btn btn-primary btn-sm w-full">View Profile</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;
