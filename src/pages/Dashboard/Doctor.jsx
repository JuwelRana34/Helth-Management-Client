import React, { useContext } from "react";
import useFetchData from "../../utils/fetchGetFunction";
import { DeleteIcon, Mail, PhoneCall, Stethoscope, X } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

function Doctor() {
  const {isAdmin} = useContext(AuthContext)
  const { data, isLoading, isError, refetch } = useFetchData("getDoctors", "doctor");

  if (isLoading) return <p className="text-center text-lg font-semibold">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching data.</p>;

  const handelDoctorDelete = async (id)=>{
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });
  
    if (!result.isConfirmed) return;
  
    console.log(id);
    try {
      const response = await axios.delete(`${import.meta.env.VITE_Url}/api/doctor/${id}`);
      console.log(response);
      refetch();
      Swal.fire("Deleted!", "Doctor has been deleted.", "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Error!", "Something went wrong! 😥", "error");
    }
  }


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
            className="bg-white relative shadow-xl rounded-2xl overflow-hidden border p-5 hover:shadow-2xl transition duration-300 flex flex-col"
          >
            { isAdmin && 
            <button onClick={()=>handelDoctorDelete(doctor._id)} className="absolute top-0 right-2">
            <DeleteIcon size={24} className=" text-red-600"/>
            </button>
            }
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
