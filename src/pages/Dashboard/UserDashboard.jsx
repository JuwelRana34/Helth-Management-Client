import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaUserMd, FaCalendarCheck, FaDollarSign, FaHeart, FaUserInjured, FaNotesMedical, FaHospital, FaUserCheck, FaFileMedicalAlt, FaClinicMedical } from "react-icons/fa";

const Dashboard = () => {
  const revenueData = [
    { month: "06", income: 400, expenses: 240 },
    { month: "07", income: 800, expenses: 500 },
    { month: "08", income: 750, expenses: 400 },
    { month: "09", income: 600, expenses: 300 },
    { month: "10", income: 700, expenses: 450 },
    { month: "11", income: 680, expenses: 420 },
    { month: "12", income: 750, expenses: 500 },
  ];

  const patientData = [
    { month: "January", recovered: 500, newPatient: 200 },
    { month: "February", recovered: 600, newPatient: 300 },
    { month: "March", recovered: 400, newPatient: 250 },
    { month: "April", recovered: 300, newPatient: 350 },
    { month: "May", recovered: 800, newPatient: 400 },
    { month: "June", recovered: 600, newPatient: 550 },
    { month: "July", recovered: 500, newPatient: 400 },
    { month: "August", recovered: 700, newPatient: 450 },
    { month: "September", recovered: 600, newPatient: 600 },
    { month: "October", recovered: 500, newPatient: 300 },
    { month: "November", recovered: 400, newPatient: 350 },
    { month: "December", recovered: 200, newPatient: 800 },
  ];

  const doctors = [
    {
      name: "Dr. Aliandro M",
      specialty: "Nursing",
      rating: "4.2",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Dr. Samuel",
      specialty: "Gynecologist",
      rating: "4.2",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Dr. Alexandro Jr.",
      specialty: "Dentist",
      rating: "4.2",
      image: "https://via.placeholder.com/100",
    },
  ];
  

  return (
    <section>
      <div>
        UserDashboard
      </div>
    </section>
  );
};

export default Dashboard;
