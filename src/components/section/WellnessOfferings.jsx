import React from 'react';
import offeringData from '../../utils/offeringData';



const WellnessOfferings = () => {



    return (
        <div className='w-11/12 mx-auto py-20'>
            <p className='text-center text-4xl font-bold'>Explore Diverse Health and Wellness <br /> Offering at mavis Clinic</p>
            <div className="flex gap-10 mt-10 justify-center">
                {offeringData?.map((item, idx) => <div key={idx}
                className='p-10 rounded-3xl border border-yellow-200 max-w-sm'>
                    <img className='mb-5 bg-blue-300 p-3 rounded-full' src={item?.image} alt="" />
                    <p className='text-xl font-bold'>{item?.title}</p>
                    <p className='py-5 text-gray-500'>{item?.description}</p>
                    <p>Learn More</p>
                </div>)}
            </div>
        </div>
    )
}

export default WellnessOfferings