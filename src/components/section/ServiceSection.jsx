import React from 'react'

const ServiceSection = () => {
    return (
        <div className='bg-yellow-300 flex flex-col items-center justify-center gap-5 py-20 text-center my-10'>
            <p className='font-bold'>Join Our Dental Family</p>
            <p className='font-bold text-6xl'>Schedule Your Dental <br /> Exam With Us!</p>
            <p className='text-gray-600'>Take the step towards a healthier smile: schedule you personalized <br /> consultation with our dental expert dental team tody.</p>
            <div className="flex gap-5 items-center">
                <button className='px-5 py-3 bg-blue-950 rounded-full text-white font-bold text-xl'>Book Appointment</button>
            </div>
        </div>
    )
}

export default ServiceSection