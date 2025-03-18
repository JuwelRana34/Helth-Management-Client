import React from "react";
import { Link, Outlet } from "react-router";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="bg-gray-200 h-screen p-2  rounded md:col-span-3">
      <nav>
                <ul className="space-y-3">
                    <li>
                        <Link to="/Dashboard" className="block p-2 hover:bg-gray-700 rounded">User Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/schedule" className="block p-2 hover:bg-gray-700 rounded">Schedule</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/patient" className="block p-2 hover:bg-gray-700 rounded">Patients</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/doctor" className="block p-2 hover:bg-gray-700 rounded">Doctors</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/messages" className="block p-2 hover:bg-gray-700 rounded">Messages</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/payments" className="block p-2 hover:bg-gray-700 rounded">Payments</Link>
                    </li>
                </ul>
            </nav>
        <div className=" ">

        <Link
          to="/"
          className=" inline-block bg-lime-500 text-white py-2 px-3 rounded-md shadow-md mt-10 "
        >
          {" "}
          back to Home
        </Link>
        </div>
      </div>
      <div className="md:col-span-9 p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
