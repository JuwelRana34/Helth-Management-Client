import React, { useContext } from "react";
import { Link } from "react-router";
import ThemeContext from "../Providers/ThemeContext";

const Card = ({ item }) => {
  const { name, image, specialty, _id } = item;
  const {theme} = useContext(ThemeContext)

  return (
    <Link to={`/doctor/${_id}`}  className={`hover:bg-emerald-100 dark:bg-dark dark:text-darkText
    hover:bg-[#233433]"} p-4 space-y-3 rounded-lg bg-base-300 shadow-md hover:scale-105 duration-300 ease-in-out hover:cursor-pointer `}>
      <figure className="">
        <img src={image} alt="Doctor" className="md:h-48 h-36 lg:h-64 w-full max-w-72 object-cover rounded-lg" />
      </figure>
      <div className="">
        <h2 className="text-xl font-semibold">Dr. {name}</h2>
        <p className="text-gray-600 dark:text-darkText"> {specialty} </p>
      </div>
    </Link>
  );
};

export default Card;
