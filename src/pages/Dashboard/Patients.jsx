import React, { useContext } from "react";
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
import { AuthContext } from "../../Providers/AuthProvider";
import useIsDoctor from "../../Hooks/useIsDoctor";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

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
  const { userDatabaseInfo, user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const { isPatient } = useIsDoctor();

 console.log(userDatabaseInfo, 'userDatabaseInfo')
  const { data : status, isLoading, isError, error,refetch } = useQuery({
    queryKey: ['users'],
    queryFn:  async () => {
      const res = await axiosSecure.get(`/api/user/${user.email}`);
      const result = res.data.user.status
      return result;
    },
  });
  // console.log("test is doctor", isPatient);

  console.log(status,'status tanstack')

  const handleDoctorRequest = async () => {
    try {
      const { data } = await axiosSecure.patch(`/api/users/status/${user.email}`);
      console.log('success data',data);
      toast.success('Request sent')
      refetch()
      console.log("success");
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  };

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
    <div className="min-h-screen">
      {/* Header */}
      <h2 className="text-3xl font-bold text-primary dark:text-darkText">Your Profile</h2>

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"> */}
        {/* Patient Card */}
        <div className="bg-white shadow-lg mx-auto mt-5 md:w-2/6 rounded-lg p-6 dark:text-darkText dark:bg-dark ">
          <div className="text-center">
            <img
              src={userDatabaseInfo?.img}
              alt="Patient"
              className="w-24 h-24 mx-auto rounded-full ring ring-emerald-400 border-primary dark:ring-cyan-300"
            />
            <h3 className="text-xl font-bold mt-2 dark:text-darkHeadingTxt">{userDatabaseInfo?.name}</h3>
            <p className="text-gray-600 dark:text-darkText text-sm">{userDatabaseInfo?.email}</p>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className="p-2 border text-center">
              <p className="text-gray-600 text-sm dark:text-darkText">Tickets</p>
              <p
                className={`text-lg font-bold ${(userDatabaseInfo?.subscriptionPlan === "basic" &&
                    userDatabaseInfo?.ticket <= 10) ||
                    userDatabaseInfo?.subscriptionPlan === ""
                    ? "text-red-500"
                    : "text-green-600 dark:text-darkText"
                  }`}
              >
                {userDatabaseInfo?.subscriptionPlan === "basic" ||
                  userDatabaseInfo?.subscriptionPlan === null
                  ? userDatabaseInfo?.ticket
                  : "Unlimited"}
              </p>
            </div>
            <div className="p-2 border text-center">
              <p className="text-gray-600 text-sm dark:text-darkText">Subscription Plan</p>
              <p className="text-lg font-bold text-primary dark:text-darkText">
                {userDatabaseInfo?.subscriptionPlan === "" ? "N/A" : userDatabaseInfo?.subscriptionPlan}
              </p>
            </div>
          </div>
        {/* </div> */}

        {/* "Be a Doctor" Button (only for patients) */}
        {isPatient && (
          <div className={`bg-white dark:text-darkText dark:bg-dark  shadow-lg rounded-lg p-6 flex items-center justify-center`}>
            <button disabled={status === 'pending'} onClick={handleDoctorRequest} className={`bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded  ${status == 'pending' && `bg-slate-400 hover:bg-slate-300`}`}>
              Be a Doctor
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Patients;
