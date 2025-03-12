import React from 'react';

const Card = ({item}) => {
    const {name, img, department} = item
    return (
        <div className="card bg-white shadow-lg rounded-lg p-5  w-72 mx-auto">
            <figure className=''>
                <img src={img} alt="Doctor" className="h-60 object-cover rounded-lg" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold mt-3 text-[#21275C]">{name}</h2>
                <p className="text-gray-500"> {department} </p>
               
            </div>
        </div>
    );
};

export default Card;
