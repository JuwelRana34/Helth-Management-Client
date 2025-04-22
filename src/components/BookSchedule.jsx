import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useFetchData from "../utils/fetchGetFunction";
import { Loader } from "lucide-react";


const BookSchedule = () => {
  const { userDatabaseInfo } = useContext(AuthContext);
  const userID = userDatabaseInfo?._id;
  const {
    data: BookedSlots = [],
    refetch,
    isLoading,
  } = useFetchData("getBookedSlots", userID ? `schedule/${userID}` : null);


  return (
    <div className="lg:flex gap-5">
      <div className="md:w-1/2 mx-auto">
        <img
          className="w-full"
          src="https://i.ibb.co.com/DHXff26R/doctor-doing-teeth-treatment-to-patient.png"
          alt="Doctor treating patient"
        />
      </div>

      <div className="p-4 max-w-lg mx-auto space-y-6 bg-white shadow-xl rounded-xl">
        <h2 className="text-3xl font-semibold text-center text-primary">
          Booked Appointments
        </h2>

        {!isLoading ? (
          <div className="mt-6 space-y-4">
            {BookedSlots.map((item, index) => (
              <div key={index} className={`border p-4 rounded-lg  shadow-md ${new Date() > new Date(item.date) ? "bg-red-100 cursor-not-allowed text-red-500":"bg-emerald-50"}` }>
                <p className="text-sm text-primary">
                  <span className="font-medium">ID:</span> {item.user}
                </p>
                <h3 className="text-lg font-semibold text-primary">
                  Doctor: {item.doctorName}
                </h3>
                <p className="text-sm text-primary">Time: {item.time}</p>
                <p className="text-sm text-primary">
                  Date: {new Date(item.date).toDateString()}
                  {new Date() > new Date(item.date) && <p className="text-red-400 capitalize font-semibold">expired</p>}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 flex justify-center items-center space-x-2">
            <Loader className="animate-spin text-primary" size={24} />
            <span className="text-lg text-primary">Loading your booked Appointments...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSchedule;
