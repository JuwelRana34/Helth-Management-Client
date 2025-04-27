import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const departments = [
  "All",
  "Orthopedics",
  "Pediatrics",
  "Neurology",
  "Cardiology",
  "Dermatology",
  "Psychiatry"
];

const Doctors = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedDept, setSelectedDept] = useState("All");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axiosPublic.get(`${import.meta.env.VITE_Url}/api/doctor`);
        // const res = await axiosPublic.get(`${import.meta.env.VITE_Url}/api/users`);
        setDoctors(res.data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, [axiosPublic]);

  console.log(doctors,'inside')
  // const selectedDoc = doctors.filter(item => item.role == 'doctor')

  const filteredDoctors =
    selectedDept === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty.toLowerCase() === selectedDept.toLowerCase());

  return (
    <div className="pb-10 w-[80%] mx-auto">
      <h1 className="text-3xl md:text-5xl text-primary font-bold text-center py-10">
        Meet Our Skilled Professionals Making a Difference at the Clinic
      </h1>

      {/* Department Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-3 py-1 rounded-md text-primary border border-emerald-200 transition-all duration-300
            ${selectedDept === dept ? "bg-primary text-white shadow-md" : "bg-emerald-100 hover:bg-primary text-primary hover:text-white"}`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Doctors List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center ">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor._id} item={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;