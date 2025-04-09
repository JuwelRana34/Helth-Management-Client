import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format, addDays } from 'date-fns';

const CreateSchedule = ({ doctorId, userId }) => {
  const [schedule, setSchedule] = useState([]);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [userBookings, setUserBookings] = useState([]);

  useEffect(() => {
    // Fetch schedule
    axios.get(`/api/schedule/${doctorId}`).then(res => {
      setSchedule(res.data);
    });

    // Fetch user's own bookings
    axios.get(`/api/schedule/user/${userId}`).then(res => {
      setUserBookings(res.data);
    });
  }, [doctorId, userId]);

  const handleBook = async (date, time) => {
    try {
      await axios.post('/api/schedule/book', { doctorId, userId, date, time });
      alert('Booked!');
      window.location.reload();
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const dates = Array.from({ length: 7 }, (_, i) =>
    format(addDays(new Date(), i), 'yyyy-MM-dd')
  );

  // const filteredSlots = schedule?.find(s => s.date === selectedDate)?.slots || [];
  const filteredSlots = 12;

  return (
    <div>
      <h2>Select a date</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {dates?.map(date => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            style={{ backgroundColor: selectedDate === date ? '#4caf50' : '#e0e0e0' }}
          >
            {date}
          </button>
        ))}
      </div>

      <h3>Available Slots for {selectedDate}</h3>
      {filteredSlots?.length === 0 ? (
        <p>No slots available</p>
      ) : (
        filteredSlots?.map((slot, idx) => (
          <div key={idx}>
            <span>{slot.time} ({slot.bookedUsers.length}/30 booked)</span>
            <button
              disabled={slot.bookedUsers.length >= 30}
              onClick={() => handleBook(selectedDate, slot.time)}
            >
              Book
            </button>
          </div>
        ))
      )}

      <h3>Your Appointments</h3>
      {userBookings?.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        userBookings?.map((b, idx) => (
          <div key={idx}>
            <strong>{b.date}</strong> - {b.time}
          </div>
        ))
      )}
    </div>
  );
};

export default CreateSchedule;
