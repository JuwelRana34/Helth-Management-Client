import React, { useState } from "react";
import axios from "axios";

const CreateSchedule = () => {
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([
    { startTime: "", endTime: "", isBooked: false },
  ]);
  const [message, setMessage] = useState("");

  const handleTimeSlotChange = (index, field, value) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index][field] = value;
    setTimeSlots(updatedTimeSlots);
  };

  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, { startTime: "", endTime: "", isBooked: false }]);
  };

  const handleRemoveTimeSlot = (index) => {
    const updatedTimeSlots = timeSlots.filter((_, i) => i !== index);
    setTimeSlots(updatedTimeSlots);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scheduleData = {
      doctorId,
      date,
      timeSlots,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-schedule",
        scheduleData
      );
      setMessage("Schedule created successfully!");
      console.log("Schedule Created:", response.data);
    } catch (error) {
      setMessage("Failed to create schedule.");
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h1>Create Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor ID:</label>
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time Slots:</label>
          {timeSlots.map((slot, index) => (
            <div key={index}>
              <input
                type="time"
                value={slot.startTime}
                onChange={(e) => handleTimeSlotChange(index, "startTime", e.target.value)}
                placeholder="Start Time"
                required
              />
              <input
                type="time"
                value={slot.endTime}
                onChange={(e) => handleTimeSlotChange(index, "endTime", e.target.value)}
                placeholder="End Time"
                required
              />
              <button type="button" onClick={() => handleRemoveTimeSlot(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddTimeSlot}>
            Add Time Slot
          </button>
        </div>
        <button type="submit">Create Schedule</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateSchedule;
