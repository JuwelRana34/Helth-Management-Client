import React from 'react';
import offeringData from '../../utils/offeringData';



const WellnessOfferings = () => {



    return (
        <div className='w-11/12 mx-auto py-20'>
            <p className='text-center text-4xl font-bold'>Explore Diverse Health and Wellness <br /> Offering at mavis Clinic</p>
            <div className="flex gap-5 mt-10">
                {offeringData?.map((item, idx) => <div key={idx}
                className='p-5 rounded-3xl border'>
                    <img className='mb-5 bg-blue-300 p-3 rounded-full' src={item?.image} alt="" />
                    <p>{item?.title}</p>
                    <p className='py-5'>{item?.description}</p>
                    <p>Learn More</p>
                </div>)}
            </div>
        </div>
    )
}

export default WellnessOfferings