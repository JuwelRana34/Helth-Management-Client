import React from 'react';
import doctor_paitent from '../../assets/Home/Doctor-Patient_Relationships .jpg';
import doctor from '../../assets/Home/icons/doctor.png';
import globe from '../../assets/Home/icons/globe.png';
import laptop from '../../assets/Home/icons/laptop.png';


const AboutUs1 = () => {

    return (
        <div className='py-12 w-3/4 mx-auto'>
            <div className='flex justify-center flex-col md:flex-row-reverse gap-12 pt-8'>

                <div className='flex-1'>
                    <p className='text-yellow-500 font-semibold underline'>Our Journey & Success</p>
                    <h2 className='text-2xl lg:text-4xl py-5'>Driven by Excellence, Proven by Results</h2>

                    <p className='pt-5 text-gray-500'>Our journey began with a vision to simplify and transform healthcare operations through cutting-edge technology. Over the years, Health Care has grown from a passionate idea into a trusted name in digital hospital management. With every step forward, we’ve focused on innovation, efficiency, and impact — helping hospitals, clinics, and healthcare professionals manage their tasks effortlessly and deliver better care to patients.
                    We take pride in our remarkable milestones, from winning prestigious awards to empowering thousands ofmedical professionals. Our success is not just in numbers, but in the real-life improvements we bring tohealthcare systems around the world. Through continuous improvement and a commitment to excellence,Health Care is shaping a smarter, more connected future in healthcare management.</p>

                </div>
                <div className='flex-1 flex flex-col gap-6'>
                    <div>
                        <img className='w-full max-w-2xl object-cover rounded-xl' src={doctor_paitent} alt="" />
                        <img className='w-full max-w-2xl object-cover rounded-xl' src={doctor_paitent} alt="" />
                    </div>
                    <div className='grid grid-cols-2 gap-3 xl:grid-cols-3'>
                        <div className='bg-base-300 px-2 sm:px-8 md:px-2 xl:px-6 py-4 rounded-lg flex gap-2 justify-between items-center'>
                            <img className='w-8 lg:w-10 rounded-full' src={doctor} alt="" />
                            <p><span className='lg:text-xl font-semibold'>5000+</span> <br /> <span className='text-xs text-gray-500'>Medical Professionals</span></p>
                        </div>
                        <div className='bg-base-300 px-2 sm:px-8 md:px-2 xl:px-6 py-4 rounded-lg flex gap-2 justify-between items-center'>
                            <img className='w-8 lg:w-10 rounded-full' src={globe} alt="" />
                            <p><span className='lg:text-xl font-semibold'>100+</span> <br /> <span className='text-xs text-gray-500'>Digitized Facilities</span></p>
                        </div>
                        <div className='bg-base-300 px-2 sm:px-8 md:px-2 xl:px-4 py-4 rounded-lg flex gap-2 justify-between items-center'>
                            <img className='w-8 lg:w-10 rounded-full' src={laptop} alt="" />
                            <p><span className='lg:text-xl font-semibold'>100k+</span> <br /> <span className='text-xs text-gray-500'>Appointments Managed</span></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs1;