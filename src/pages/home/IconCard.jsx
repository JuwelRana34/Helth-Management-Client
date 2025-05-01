import React, { useContext } from 'react';
import { FaHeartbeat, FaStethoscope, FaShieldAlt } from 'react-icons/fa';
import ThemeContext from './../../Providers/ThemeContext';

const Card = ({ icon, title, description }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={` ${theme === "light" ? "bg-emerald-100" : "bg-dark "} shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl mx-auto`}>
      <div className="flex items-center justify-start p-6  text-primary dark:text-darkText">
        <div className="text-7xl">{icon}</div>
      </div>
      <div className="px-6 pb-6">
        <h3 className="text-xl font-semibold dark:text-darkText text-primary ">{title}</h3>
        <p className="text-primary dark:text-darkText mt-2">{description}</p>
      </div>
    </div>
  );
};

const IconCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-[90%] mx-auto">
      <Card
        icon={<FaHeartbeat />}
        title="Emergency Care"
        description="Our emergency care team is always ready to handle urgent medical needs with top-notch services."
      />
      <Card
        icon={<FaStethoscope />}
        title="Regular Check-ups"
        description="We offer regular check-up services to help you stay on top of your health and well-being."
      />
      <Card
        icon={<FaShieldAlt />}
        title="Health Insurance"
        description="Protect yourself and your family with comprehensive health insurance plans."
      />
    </div>
  );
};

export default IconCard;
