import React from "react";
import { Link } from "react-router";

const Card = ({ item }) => {
  const { name, image, specialty, _id } = item;
  return (
    <Link to={`/doctor/${_id}`}  className="p-4 space-y-3 rounded-lg bg-slate-100 shadow-md hover:scale-105 duration-300 ease-in-out hover:cursor-pointer">
      <figure className="">
        <img src={image} alt="Doctor" className="md:h-48 h-36 lg:h-64 w-full max-w-72 object-cover rounded-lg" />
      </figure>
      <div className="">
        <h2 className="text-xl font-semibold">Dr. {name}</h2>
        <p className="text-gray-600"> {specialty} </p>
      </div>
    </Link>
  );
};

export default Card;
