import React from "react";
import { Bar, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Patients = () => {
  const bloodLevelsData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Blood Sugar",
        data: [40, 70, 50, 65, 72, 55, 40],
        backgroundColor: "#1C5CBB",
      },
      {
        label: "Blood Pressure",
        data: [50, 30, 60, 80, 75, 40, 35],
        backgroundColor: "#39B5A4",
      },
    ],
  };

  const activitiesData = {
    labels: ["Running", "Cycling", "Eating", "Drinking", "Sleeping", "Working"],
    datasets: [
      {
        label: "Activity Levels",
        data: [60, 65, 50, 40, 80, 45],
        backgroundColor: "rgba(60, 120, 216, 0.5)",
        borderColor: "#1C5CBB",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800">Patient Profile</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Patient Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="text-center">
            <img
              src="https://medash.netlify.app/data/profile/avatar-5.png"
              alt="Patient"
              className="w-24 h-24 mx-auto rounded-full border-4 border-primary"
            />
            <h3 className="text-xl font-bold mt-2">Smith Wright</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className="p-2 border text-center">
              <p className="text-gray-600 text-sm">Gender</p>
              <p className="text-lg font-bold">Male</p>
            </div>
            <div className="p-2 border text-center">
              <p className="text-gray-600 text-sm">Age</p>
              <p className="text-lg font-bold">23</p>
            </div>
          </div>
        </div>

        {/* Blood Levels Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Blood Levels</h3>
          <Bar data={bloodLevelsData} />
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
          <ul className="mt-2 text-sm">
            <li className="border-l-4 border-blue-500 pl-2">
              Appointment confirmed - <span className="font-bold">July 27</span>
            </li>
            <li className="border-l-4 border-green-500 pl-2 mt-2">
              Treatment reminder - <span className="font-bold">July 25</span>
            </li>
            <li className="border-l-4 border-red-500 pl-2 mt-2">
              Visit canceled - <span className="font-bold">Nov 17</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Medical Details */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Medical Details</h3>
          <p>Blood Type: <span className="font-bold">AB+</span></p>
          <p>Allergies: <span className="font-bold">Peanuts</span></p>
          <p>Diseases: <span className="font-bold">Diabetes</span></p>
          <p>Pressure: <span className="font-bold">130/89 mmHg</span></p>
          <p>Temperature: <span className="font-bold">36.8°C</span></p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Doctors</h3>
          <ul>
            <li>Dr. Anthony Wager - Dermatologist</li>
            <li>Dr. Smith Wright - Clinical Doctor</li>
            <li>Dr. Tom Humpton - Dentist</li>
            <li>Dr. Riphat Jion - Surgeon</li>
          </ul>
        </div>
      </div>

      {/* Health Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h4 className="text-sm text-gray-600">Blood Pressure</h4>
          <p className="text-xl font-bold text-purple-600">120/89 mmHg</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h4 className="text-sm text-gray-600">Heart Rate</h4>
          <p className="text-xl font-bold text-red-500">107 bpm</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h4 className="text-sm text-gray-600">Glucose Rate</h4>
          <p className="text-xl font-bold text-green-500">97 mg/dl</p>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h4 className="text-sm text-gray-600">Cholesterol</h4>
          <p className="text-xl font-bold text-blue-500">124 mg/dl</p>
        </div>
      </div>

      {/* Patient Activities Chart */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-700">Patient Activities</h3>
        <Radar data={activitiesData} />
      </div>
    </div>
  );
};

export default Patients;
