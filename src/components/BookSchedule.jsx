import React, { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Providers/AuthProvider';
import useFetchData from '../utils/fetchGetFunction';
import Select from 'react-select'; 
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css"; 
import { Loader } from 'lucide-react';
import { format } from 'date-fns';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const BookSchedule = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [doctorId, setDoctorId] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userDatabaseInfo } = useContext(AuthContext);
  const userID = userDatabaseInfo?._id;
  const axiosSecure = useAxiosSecure()
  const formattedDate = selectedDate ? format(new Date(selectedDate), 'yyyy-MM-dd') : '';



  const { data: BookedSlots = [], refetch, isLoading, isError } = useFetchData('getBookedSlots', userID ? `schedule/${userID}` : null);


  useEffect(() => {
    // Load doctors on first load
    axiosSecure.get(`${import.meta.env.VITE_Url}/api/doctor`)
      .then(res => setDoctors(res.data))
      .catch(err => toast.error('Failed to load doctors. Please try again later.'));
  }, [axiosSecure]);

    const fetchSchedule = async () => {
      if (!selectedDate || !doctorId) return;

      try {
        const res = await axiosSecure.get(`${import.meta.env.VITE_Url}/api/schedule?doctorId=${doctorId}&date=${selectedDate}`);
        setSlots(res.data.slots);
      } catch (err) {
        setSlots([]);
        toast.error('schedule not available. Please try again later.');
      }
    };
    

  useEffect(() => {

       fetchSchedule();
  }, [axiosSecure, doctorId, selectedDate]);

  const handleBooking = async (time) => {
    setLoading(true);
    try {
      const res = await axiosSecure.post(`${import.meta.env.VITE_Url}/api/bookSchedule`, {
        doctorId,
        userId: userDatabaseInfo?._id,
        date: formattedDate ,
        time,
      });
      refetch();
      fetchSchedule()
      toast.success(res.data.msg);
      setLoading(false);
    } catch (err) {
      toast.error(err?.response.data.error || 'Booking failed. Please try again.');
      setLoading(false);
    }
  };

  // Convert doctors data for react-select
  const doctorOptions = doctors.map(doc => ({
    value: doc._id,
    label: doc.name
  }));

  return (
    <div className="p-4 max-w-lg mx-auto space-y-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-semibold text-center text-primary">Book a Doctor&apos;s Appointment</h2>

      <div>
        <label className="block text-sm font-medium text-primary mb-2">Select Doctor</label>
        <Select
          options={doctorOptions}
          value={doctorOptions.find(option => option.value === doctorId)}
          onChange={e => setDoctorId(e.value)}
          placeholder="Select a doctor..."
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div className='w-full'>
        <label className="block text-sm font-medium text-primary mb-2">Select Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
          placeholderText="Pick a date"
          className="w-full p-4 bg-gray-100 text-primary rounded-lg shadow-sm outline-primary border border-emerald-500 hover:border-gray-400"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center space-x-2">
          <Loader className="animate-spin" size={24} />
          <span className="text-lg text-gray-600">Booking in progress...</span>
        </div>
      ) : (
        <div className="space-y-4">
          {slots?.length > 0 ? (
            slots?.map(slot => (
              <div key={slot.time} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm hover:bg-emerald-50 transition duration-200 space-x-2">
                <span className=" text-sm md:text-lg text-primary">{slot.time}</span>
                <span className="text-sm text-primary">{slot.bookedUsers.length}/{slot.maxBookings}</span>
                <button
                  onClick={() => handleBooking(slot.time)}
                  disabled={slot.bookedUsers.length >= slot.maxBookings}
                  className={` px-3 md:px-4 py-2 rounded-lg font-semibold ${slot.bookedUsers.length >= slot.maxBookings ? 'bg-rose-500' : 'bg-btnBg text-primary hover:bg-emerald-300'}`}
                >
                  {slot.bookedUsers.length >= slot.maxBookings ? 'Full' : 'Book'}
                </button>
              </div>
            ))
          ) : (
            <p className="text-rose-500">No available slots for the selected date.</p>
          )}
        </div>
      )}

      {!isLoading ? (
        <div className="mt-6 space-y-4">
          {BookedSlots?.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg bg-emerald-50 shadow-md">
              <h3 className="text-lg font-semibold text-primary">Doctor: {item.doctorName}</h3>
              <p className="text-sm text-primary">Time: {item.time}</p>
              <p className="text-sm text-primary">Date: {new Date(item.date).toDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 flex justify-center items-center space-x-2">
          <Loader className="animate-spin text-primary" size={24} />
          <span className="text-lg text-primary ">Loading your booked slots...</span>
        </div>
      )}
    </div>
  );
};

export default BookSchedule;
