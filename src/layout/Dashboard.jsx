import React, { useState, useContext, useEffect } from "react";
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
  X,
  UserCog,
  FilePlus,
} from "lucide-react";
import useAuth from "../Hooks/useAuth";
import { AuthContext } from "../Providers/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import AiChatBox from "../components/AiChatBox";
import toast from "react-hot-toast";
import { QueryClient } from "@tanstack/react-query";
import useFetchData from "../utils/fetchGetFunction";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ThemeContext from "../Providers/ThemeContext";
import { LuSunMedium } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  const { logOut } = useAuth();
  const { notifi, user, isAdmin, setNotifi } = useContext(AuthContext);
  const { data: notifications, refetch } = useFetchData('getNotifications', 'notifications');
  const axiosSecure = useAxiosSecure()
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    setNotifi(notifications)
  }, [notifications, setNotifi])

  const handelLogout = () => logOut();
  const handleBellClick = () => setShowNotifications(!showNotifications);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handelDelete = async (id) => {
    await axiosSecure.delete(`${import.meta.env.VITE_Url}/api/notification/${id}`);
    refetch();
    toast.error('Notification deleted successfully!');
    QueryClient.invalidateQueries(['notifications']); // Invalidate cache to trigger refetch
    // Fetch latest notifications
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <div
        className={`bg-primary text-white dark:text-darkText dark:bg-dark   h-screen overflow-y-scroll overflow-x-hidden p-2 hidden md:flex flex-col transition-all duration-300  ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <SidebarContent
          isCollapsed={isCollapsed}
          toggleCollapse={() => setIsCollapsed(!isCollapsed)}
          location={location}
          isAdmin={isAdmin}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed overflow-y-scroll top-0 left-0 h-full w-64 bg-primary text-white dark:text-darkText dark:bg-dark  z-50 p-4 transition-transform transform md:hidden ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setShowSidebar(false)}
          className="mb-4 text-white"
        >
          <X size={28} />
        </button>
        <SidebarContent
          isCollapsed={false}
          toggleCollapse={() => {}}
          location={location}
          isAdmin={isAdmin}
        />
      </div>

      {/* Main Content */}
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="flex-1 flex flex-col h-screen  overflow-y-scroll"
      >
        {/* Top Navbar */}
        <div className="p-4 shadow-md flex justify-between items-center md:pr-16">
          {/* Mobile Sidebar Toggle Button */}
          <button onClick={toggleSidebar} className="md:hidden text-gray-700">
            <Menu size={24} />
          </button>

          {/* Page Title */}
          <h1 className="text-xl hidden md:block dark:text-darkText font-semibold">
            Welcome To{" "}
            <span className="text-primary dark:text-darkHeadingTxt font-bold">
              {user?.displayName}
            </span>
          </h1>

          {/* User Info */}
          <div className="flex items-center justify-around space-x-5">
            <button onClick={handleBellClick} className="relative">
              <Bell
                size={24}
                className="text-gray-600 hover:text-gray-800 dark:text-darkText"
              />
              <AnimatePresence>
                {notifi?.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full"
                  >
                    {notifi?.length}
                  </motion.span>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute -right-36 md:right-0 top-11 mt-2 w-64 bg-white text-slate-700 shadow-lg rounded-md p-2 dark:text-darkText dark:bg-dark "
                  >
                    {notifi?.length > 0 ? (
                      notifi.map((notification, index) => (
                        <div
                          key={notification._id}
                          className={`p-2 border-b last:border-none overflow-y-scroll h-56 ${
                            index % 2 === 0
                              ? " bg-slate-50 dark:text-darkText dark:bg-dark "
                              : ""
                          }`}
                        >
                          <p className="flex justify-between text-justify">
                            {notification.message}
                            {isAdmin && (
                              <button
                                onClick={() => handelDelete(notification._id)}
                                className=" rounded-md py-2 px-3 bg-red-300 text-rose-600 h-fit dark:text-darkText dark:bg-gray-800 "
                              >
                                Delete
                              </button>
                            )}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-rose-500 bg-rose-100 font-semibold p-2 dark:text-darkText dark:bg-dark ">
                        No notifications
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <button className="dark:text-darkText"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <LuSunMedium size={24} />
              ) : (
                <FaMoon size={24} />
              )}
            </button>
            <div className="flex items-center space-x-3">
              <img
                src={user?.photoURL}
                alt={user?.displayName}
                className="w-10 h-10 rounded-full border shadow-2xl hover:scale-110 transform transition-transform"
              />
              <div className="text-primary dark:text-darkText   md:hidden">
                <p className="text-xs ">HI,</p>
                <p className="text-sm font-medium ">{user?.displayName}</p>
              </div>
              <button onClick={handelLogout}>
                <LogOut size={20} className=" text-red-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 flex-1">
          <Outlet />
          <AiChatBox />
        </div>
      </div>
    </div>
  );
}

const SidebarContent = ({ isCollapsed, toggleCollapse, location, isAdmin }) => (
  <>
    {/* Collapse Button */}
    <button
      onClick={toggleCollapse}
      className="flex items-center hidden md:block text-white p-3 rounded-md"
    >
      <Menu size={24} />
      {!isCollapsed && <span className="ml-3"></span>}
    </button>

    {/* Navigation */}
    <nav className="mt-5 flex-1">
      <ul className="space-y-3">
        {isAdmin && (
          <>
            <NavItem
              to="/Dashboard/AdminDashboard"
              icon={<UserCog size={28} />}
              label="Admin Dashboard"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/AdminDashboard"}
            />

            <NavItem
              to="/Dashboard/Users"
              icon={<Users size={28} />}
              label="All-User"
              collapsed={isCollapsed}
              active={location.pathname === "/Dashboard/Users"}
            />
          </>
        )}

        {!isAdmin && (
          <>

          </>
        )}
        <NavItem
          to="/Dashboard"
          icon={<User size={28} />}
          label="Profile"
          collapsed={isCollapsed}
          active={location.pathname === "/Dashboard"}
        />

        <NavItem
          to="/Dashboard/payments"
          icon={<CreditCard size={28} />}
          label="Payments"
          collapsed={isCollapsed}
          active={location.pathname === "/Dashboard/payments"}
        />
        <NavItem
          to="/Dashboard/requested"
          icon={<FilePlus size={28}  />}
          label="Requested"
          collapsed={isCollapsed}
          active={location.pathname === "/Dashboard/requested"}
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
          to="/Dashboard/schedule"
          icon={<Calendar size={28} />}
          label="Schedule"
          collapsed={isCollapsed}
          active={location.pathname === "/Dashboard/schedule"}
        />
      </ul>
    </nav>

    <div className="mt-auto">
      <NavItem
        to="/"
        icon={<Home size={28} />}
        label="Back to Home"
        collapsed={isCollapsed}
      />
    </div>
  </>
);

const NavItem = ({ to, icon, label, collapsed, active }) => (
  <ol className="relative group">
    <Link
      to={to}
      className={`flex items-center space-x-3 p-3 rounded-md transition-all  ${active ? "bg-emerald-500 dark:bg-gray-800" : "hover:bg-emerald-400 dark:hover:bg-gray-800"
        }`}
    >
      <span className="text-white flex justify-center items-center">
        {icon}
      </span>
      {!collapsed && <span className="text-white">{label}</span>}
    </Link>
    {collapsed && (
      <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </div>
    )}
  </ol>
);

export default Dashboard;
