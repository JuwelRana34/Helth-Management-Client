import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  User,
  Calendar,
  Users,
  Stethoscope,
  MessageSquare,
  CreditCard,
  Home,
  Bell,
  LogOut,
  CircleFadingPlus,
} from "lucide-react";
import useAuth from "../Hooks/useAuth";

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { logOut } = useAuth()

  const handelLogout = () => {
    logOut()
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-primary text-white h-full p-4 transition-all duration-300 flex flex-col ${isCollapsed ? "w-20" : "w-64"
          }`}
      >
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center text-white p-3  rounded-md"
        >
          <Menu size={24} />
          {!isCollapsed && <span className="ml-3"></span>}
        </button>

        {/* Navigation Links */}
        <nav className="mt-5 flex-1">
          <ul className="space-y-3">
            <NavItem
              to="/Dashboard"
              icon={<User size={28} />}
              label="User Dashboard"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard"}
            />
            <NavItem
              to="/Dashboard/schedule"
              icon={<Calendar size={28} />}
              label="Schedule"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/schedule"}
            />
            <NavItem
              to="/Dashboard/patient"
              icon={<Users size={28} />}
              label="Patients"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/patient"}
            />
            <NavItem
              to="/Dashboard/add-doctor"
              icon={<CircleFadingPlus size={28} />}
              label="Add Doctors"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/add-doctor"}
            />
            <NavItem
              to="/Dashboard/doctor"
              icon={<Stethoscope size={28} />}
              label="Doctors"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/doctor"}
            />
            <NavItem
              to="/Dashboard/messages"
              icon={<MessageSquare size={28} />}
              label="Messages"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/messages"}
            />
            <NavItem
              to="/Dashboard/payments"
              icon={<CreditCard size={28} />}
              label="Payments"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/payments"}
            />
          </ul>
        </nav>

        {/* Back to Home */}
        <div className="mt-auto">
          <NavItem to="/" icon={<Home size={28} />} label="Back to Home" collapsed={isCollapsed} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="bg-pri p-4 shadow-md flex justify-between items-center md:pr-16">
          {/* Page Title */}
          <h1 className="text-xl font-semibold">Welcome To <span className="text-secondary font-bold">Ataur Rahman</span></h1>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell size={24} className="text-gray-600 hover:text-gray-800" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                3
              </span>
            </button>
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pravatar.cc/40" // Replace with actual user image
                alt="User Avatar"
                className="w-10 h-10 rounded-full border"
              />
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <button onClick={handelLogout}>
                <LogOut size={20} className="text-gray-600 hover:text-red-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 flex-1 overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

/* Navigation Item Component */
const NavItem = ({ to, icon, label, collapsed, active }) => (
  <ol className="relative group">
    <Link
      to={to}
      className={`flex items-center space-x-3 p-3 rounded-md transition-all ${active ? "bg-blue-500" : "hover:bg-blue-500"
        }`}
    >
      <span className="text-white flex justify-center items-center">{icon}</span>
      {!collapsed && <span className="text-white">{label}</span>}
    </Link>

    {/* Tooltip when collapsed */}
    {collapsed && (
      <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </div>
    )}
  </ol>
);

export default Dashboard;
