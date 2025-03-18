import React from "react";
import { Link, Outlet } from "react-router";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="bg-gray-200 h-screen p-2  rounded md:col-span-3">
        <p>side bar </p>
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
