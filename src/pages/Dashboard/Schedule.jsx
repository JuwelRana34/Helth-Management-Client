import React, { useContext } from 'react'
import BookSchedule from '../../components/BookSchedule'
import { AuthContext } from '../../Providers/AuthProvider'
import useFetchData from '../../utils/fetchGetFunction'

function Schedule() {
  const {isAdmin} =useContext(AuthContext)
  const { data: bookedSchedules= [], refetch, isLoading } = useFetchData("All-bookedSchedules", "AllSchedule");

  return (
    <div>
      {isAdmin ?
        <div className="p-6 overflow-x-auto dark:text-darkText dark:bg-dark ">
        <h2 className="text-2xl font-semibold mb-4">📋 All Booked Schedules</h2>
        <table className="min-w-full table-auto border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              <th className="px-4 py-2 border">Doctor Name</th>
              <th className="px-4 py-2 border">Doctor Email</th>
              <th className="px-4 py-2 border">Schedule Date</th>
              <th className="px-4 py-2 border">Slot Time</th>
              <th className="px-4 py-2 border">Booked User(s)</th>
            </tr>
          </thead>
          <tbody>
            {bookedSchedules.map((schedule) =>
              schedule.slots.map((slot, index) => (
                <tr key={`${schedule._id}-${index}`} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{schedule.doctorId?.name || "N/A"}</td>
                  <td className="px-4 py-2 border">{schedule.doctorId?.email || "N/A"}</td>
                  <td className="px-4 py-2 border">{new Date(schedule.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2 border">{slot.time}</td>
                  <td className="px-4 py-2 border">
                    <ul className="space-y-1">
                      {slot.bookedUsers.map((user) => (
                        <li key={user._id} className="text-sm">
                          <strong>{user.name}</strong> ({user.email})
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      :
       <BookSchedule/>} 
    </div>
  )
}

export default Schedule