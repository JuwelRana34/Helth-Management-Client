import React from 'react';
import doctor_paitent from '../../assets/Home/Doctor-Patient_Relationships .jpg';
import { MdOutlineDone } from "react-icons/md";
import { Link } from 'react-router';
import doctor from '../../assets/Home/icons/doctor.png';
import globe from '../../assets/Home/icons/globe.png';
import laptop from '../../assets/Home/icons/laptop.png';


const AboutUs1 = () => {

    const features = [
        "Easy and user-friendly interface for staff and administrators", 'Efficient patient management and appointment scheduling', "Secure storage and access to medical records", "Real-time coordination between departments and staff"
    ]


    return (
        <div className='py-12 w-3/4 mx-auto'>
            <div className='flex justify-center flex-col md:flex-row-reverse gap-12 pt-8'>

                <div className='flex-1'>
                    <p className='text-yellow-500 font-semibold underline'>Our Journey & Success</p>
                    <h2 className='text-2xl lg:text-4xl py-5'>Driven by Excellence, Proven by Results</h2>

                    <p className='pt-5 text-gray-500'>Our journey began with a vision to simplify and transform healthcare operations through cutting-edge technology. Over the years, Health Care has grown from a passionate idea into a trusted name in digital hospital management. With every step forward, we’ve focused on innovation, efficiency, and impact — helping hospitals, clinics, and healthcare professionals manage their tasks effortlessly and deliver better care to patients.
                    We take pride in our remarkable milestones, from winning prestigious awards to empowering thousands ofmedical professionals. Our success is not just in numbers, but in the real-life improvements we bring tohealthcare systems around the world. Through continuous improvement and a commitment to excellence,Health Care is shaping a smarter, more connected future in healthcare management.</p>

                </div>
                <div className='flex-1 flex flex-col xl:flex-row gap-6'>
                    <div>
                        <img className='w-full max-w-sm object-cover h-full  rounded-xl' src={doctor_paitent} alt="" />
                    </div>
                    <div className='flex xl:flex-col gap-6 flex-wrap'>
                        <div className='bg-gray-100 px-2 py-4 rounded-lg flex gap-4 justify-center items-center'>
                            <img className='w-10 rounded-full' src={doctor} alt="" />
                            <p><span className='text-xl font-semibold'>5000+</span> <br /> <span className='text-sm text-gray-500'>Medical Professionals</span></p>
                        </div>
                        <div className='bg-gray-100 px-2 py-4 rounded-lg flex gap-4 justify-center items-center'>
                            <img className='w-10 rounded-full' src={globe} alt="" />
                            <p><span className='text-xl font-semibold'>100+</span> <br /> <span className='text-sm text-gray-500'>Digitized Facilities</span></p>
                        </div>
                        <div className='bg-gray-100 px-2 py-4 rounded-lg flex gap-4 justify-center items-center'>
                            <img className='w-10 rounded-full' src={laptop} alt="" />
                            <p><span className='text-xl font-semibold'>100k+</span> <br /> <span className='text-sm text-gray-500'>Appointments Managed</span></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs1;