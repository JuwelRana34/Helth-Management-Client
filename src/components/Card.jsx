import React from "react";

const Card = ({ item }) => {
  const { name, img, department } = item;
  return (
    <div className="card bg-emerald-200 shadow-lg rounded-lg p-5 mx-auto">
      <figure className="">
        <img src={img} alt="Doctor" className="h-60 object-cover rounded-lg" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold mt-3 text-primary">{name}</h2>
        <p className="text-primary"> {department} </p>
      </div>
    </div>
  );
};

export default Card;
