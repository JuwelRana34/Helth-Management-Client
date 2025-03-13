import React, { useState } from 'react';
import Card from '../../components/Card';

const doctors = [
  {
    name: "Dr. Aisha Rahman",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
    department: "Cardiology",
  },
  {
    name: "Dr. David Smith",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
    department: "Neurology",
  },
  {
    name: "Dr. Emily Johnson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
    department: "Pediatrics",
  },
  {
    name: "Dr. Rajesh Kumar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
    department: "Orthopedics",
  },
];

const departments = ["All", "Orthopedics", "Pediatrics", "Neurology", "Cardiology"];

const Doctors = () => {
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredDoctors =
    selectedDept === "All" ? doctors : doctors.filter((doc) => doc.department === selectedDept);

  return (
    <div className="pb-20 w-3/4 mx-auto px-5">
      <h1 className="text-3xl md:text-5xl text-primary font-bold text-center py-10">
        Meet Our Skilled Professionals Making a Difference at the Clinic
      </h1>

      {/* Department Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-5 py-2 rounded-md text-primary border-2 border-pritext-primary transition-all duration-300
            ${selectedDept === dept ? "bg-primary text-white shadow-md" : "bg-[#F5F5F3] hover:bg-pritext-primary hover:text-black"}`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Doctors List */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredDoctors.map((doctor, idx) => (
          <Card key={idx} item={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
