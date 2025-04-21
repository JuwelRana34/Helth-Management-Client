import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SingleDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const axiosPublic = useAxiosSecure();
  const axiosSecure = useAxiosSecure();
  const [slots, setSlots] = useState([]);
  const { userDatabaseInfo } = useContext(AuthContext);
  const userID = userDatabaseInfo?._id;
  const [loading, setLoading] = useState(false);
  const formattedDate = selectedDate
    ? format(new Date(selectedDate), "yyyy-MM-dd")
    : "";

  const fetchSchedule = useCallback(async () => {
    if (!selectedDate || !id) return;

    try {
      const res = await axiosSecure.get(
        `${
          import.meta.env.VITE_Url
        }/api/schedule?doctorId=${id}&date=${selectedDate}`
      );
      setSlots(res.data.slots);
    } catch (err) {
      setSlots([]);
      toast.error("Schedule not available. Please try again later.");
    }
  }, [axiosSecure, id, selectedDate]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axiosPublic.get(`/api/doctor/${id}`);
        setDoctor(res.data);
      } catch (error) {
        console.error("failed to fetch:", error);
      }
    };
    fetchDoctor();
  }, [id, axiosPublic]);

  const handleBooking = async (time) => {
    Swal.fire({
      title: `Are you sure you want to book slot ⏲ ${time}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33333",
      confirmButtonText: "Yes, Book!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          await axiosSecure.post(
            `${import.meta.env.VITE_Url}/api/bookSchedule`,
            {
              doctorId:id,
              userId: userID,
              date: formattedDate,
              time,
            }
          );
          fetchSchedule();
          Swal.fire({
            title: "Booked!",
            text: `Your slot has been booked at ⏲ ${time}.`,
            icon: "success",
          });
        } catch (err) {
          toast.error(
            err?.response?.data?.msg || "Booking failed. Please try again."
          );
        } finally {
          setLoading(false);
        }
      }
    });
  };

  if (!doctor)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="grid md:grid-cols-2 lg:gap-4 p-6 bg-slate-200 w-11/12 md:w-3/4 lg:w-3/5 my-12 mx-auto rounded-lg">
      <div className="flex justify-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between gap-8">
        {/* doctor details info */}
        <div className="space-y-3">
          <div className="space-y-1">
            <h6 className="text-primary font-semibold text-md">Profile </h6>
            <h2 className="text-2xl lg:text-4xl font-semibold">
              Dr. {doctor.name}
            </h2>
            <p className="text-xl text-gray-700">{doctor.specialty}</p>
          </div>

          <div className="space-y-1">
            <h6 className="text-primary font-semibold text-md">Contact </h6>

            <p className="flex items-center gap-2">
              <FaPhoneAlt className="" />
              {doctor.phone}
            </p>
            <p className="flex items-center gap-2">
              <AiTwotoneMail />
              {doctor.email}
            </p>
          </div>

          <div>
            <h6 className="text-primary font-semibold text-md">About </h6>
            <p>{doctor.brief}</p>
          </div>
        </div>

        {/* book appointment */}
        <div>
          <h2 className="text-xl flex items-center gap-2 mb-4">
            <FaRegCalendarCheck />
            Book a schedule with Dr. {doctor.name}
          </h2>

          <div className="flex gap-4 items-center mb-5">
            {/* <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            minDate={new Date()}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Pick a date"
                            className="w-full p-3 bg-gray-100 text-primary rounded-lg shadow-sm outline-primary border border-emerald-500 hover:border-gray-400"
                        /> */}
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              placeholderText="Pick a date"
              className="w-full p-4 bg-gray-100 text-primary rounded-lg shadow-sm outline-primary border border-emerald-500 hover:border-gray-400"
            />
            <div>
              <button className="btn btn-lg text-base rounded-lg bg-primary text-white">
                select
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center space-x-2">
              <Loader className="animate-spin" size={24} />
              <span className="text-lg text-gray-600">
                Booking in progress...
              </span>
            </div>
          ) : (
            <div className="space-y-4">
              {slots?.length > 0 ? (
                slots.map((slot) => (
                  <div
                    key={slot.time}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm hover:bg-emerald-50 transition duration-200"
                  >
                    <span className="text-sm md:text-lg text-primary">
                      {slot.time}
                    </span>
                    <span className="text-sm text-primary">
                      {slot.bookedUsers.length}/{slot.maxBookings}
                    </span>
                    <button
                      onClick={() => handleBooking(slot.time)}
                      disabled={
                        slot.bookedUsers.length >= slot.maxBookings ||
                        slot.bookedUsers.includes(userID)
                      }
                      title={
                        slot.bookedUsers.includes(userID) &&
                        "You have already booked this slot."
                      }
                      className={`px-3 md:px-4 py-2 rounded-lg font-semibold ${
                        slot.bookedUsers.length >= slot.maxBookings
                          ? "bg-rose-500 text-white"
                          : "bg-btnBg text-primary hover:bg-emerald-300"
                      } disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500`}
                    >
                      {slot.bookedUsers.length >= slot.maxBookings
                        ? "Full"
                        : "Book"}
                    </button>
                  </div>
                ))
              ) : (
                <>
                  {!selectedDate && (
                    <p className="text-gray-500">
                      Please select date to see available slots.{" "}
                    </p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
