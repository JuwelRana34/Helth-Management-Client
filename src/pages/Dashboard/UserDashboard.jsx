import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaUserMd, FaCalendarCheck, FaDollarSign, FaHeart, FaUserInjured, FaNotesMedical, FaHospital, FaUserCheck, FaFileMedicalAlt, FaClinicMedical } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useFetchData from "../../utils/fetchGetFunction";

const Dashboard = () => {
  const { data: bookedSchedules= [] } = useFetchData("All-bookedSchedules", "AllSchedule");

  const {data:allData =[] , isLoading , error} = useFetchData("allDetailsAboutWebiste" , "allDetailsAboutWebiste")
  console.log("allData", allData)
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
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };
  

  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-950 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 mb-6 text-center dark:text-darkHeadingTxt">Admin Dashboard!</h1>
      <p className="text-gray-500 mb-6 dark:text-darkText">Hospital Admin Dashboard Template</p>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-red-100 shadow-lg p-6 rounded-lg text-center dark:text-darkText dark:bg-dark ">
          <FaHeart className="text-red-500 dark:text-darkText text-4xl mx-auto" />
          <h2 className="text-xl text-gray-600 dark:text-darkText mt-2">Total Patient</h2>
          <p className="text-3xl font-bold dark:text-darkText text-red-500">{allData?.userStats?.patient}</p>
        </div>

        <div className="bg-green-100 shadow-lg p-6 rounded-lg text-center dark:text-darkText dark:bg-dark ">
          <FaUserMd className="text-green-500 dark:text-darkText text-4xl mx-auto" />
          <h2 className="text-xl text-gray-600 dark:text-darkText mt-2">Doctor</h2>
          <p className="text-3xl font-bold text-green-500 dark:text-darkText">{allData?.userStats?.doctor}</p>
        </div>

        <div className="bg-blue-100 shadow-lg p-6 rounded-lg text-center dark:text-darkText dark:bg-dark ">
          <FaCalendarCheck className="text-blue-500 dark:text-darkText text-4xl mx-auto" />
          <h2 className="text-xl text-gray-600 dark:text-darkText mt-2">Appointment</h2>
          <p className="text-3xl font-bold text-blue-500 dark:text-darkText">{bookedSchedules?.length}</p>
        </div>

        <div className="bg-purple-100 shadow-lg p-6 rounded-lg text-center dark:text-darkText dark:bg-dark ">
          <FaDollarSign className="text-purple-500 dark:text-darkText text-4xl mx-auto" />
          <h2 className="text-xl text-gray-600 dark:text-darkText mt-2">Hospital Earning</h2>
          <p className="text-3xl font-bold text-purple-500 dark:text-darkText">$ {formatNumber(allData?.totalPayments || 0)}</p>
        </div>
      </div>

      {/* Revenue & Patient Statistics */}
     
        {/* Revenue Chart */}
        {/* <div className="bg-white mx-auto my-5 dark:text-darkText dark:bg-dark  shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-700 dark:text-darkText">Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={allData}>
              <XAxis dataKey="totalPayments" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalPayments" fill="#8884d8" />
              <Bar dataKey="total users" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}

      
    

      {/* New Section from Second Image */}
      <div className="grid grid-cols-1  gap-6 mt-6">
        <div className="bg-orange-100 shadow-lg p-6 rounded-lg text-center dark:text-darkText dark:bg-dark ">
          <FaUserCheck className="text-orange-500 dark:text-darkText text-4xl mx-auto" />
          <h2 className="text-xl text-gray-600 dark:text-darkText mt-2">Total Admin </h2>
          <p className="text-3xl font-bold text-orange-500 dark:text-darkText">{allData?.userStats?.admin}</p>
        </div>

       
      </div>
    </section>
  );
};

export default Dashboard;
