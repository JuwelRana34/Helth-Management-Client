import React from 'react';
import Card from '../../components/Card';

const doctors = [
    {
      name: "Dr. Aisha Rahman",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
      department: "Cardiology"
    },
    {
      name: "Dr. David Smith",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
      department: "Neurology"
    },
    {
      name: "Dr. Emily Johnson",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
      department: "Pediatrics"
    },
    {
      name: "Dr. Rajesh Kumar",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
      department: "Orthopedics"
    }
  ];
  
  console.log(doctors);

  const departments = [
    "All",
    "Orthopedics",
    "Pediatrics",
    "Neurology",
    "Cardiology"
  ];
  

const Doctors = () => {
    return (
        <div className='pb-20'>
            <h1 className='xl:text-5xl text-3xl text-[#21275C] font-bold text-center py-10'>The skills proffessionals making a defferent at clinic</h1>
            <div className='flex md:flex-row flex-col gap-2 items-center justify-center'>
                {
                    departments.map(item => <button className='btn rounded-md text-[#21275C] bg-[#F5F5F3]' key={item}>{item}</button>)
                }
            </div>
           <div className='grid md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-2 items-center justify-center'>
                {
                    doctors.map((item, idx) => <Card key={idx} item={item}/>)
                }
           </div>
        </div>
    );
};

export default Doctors;