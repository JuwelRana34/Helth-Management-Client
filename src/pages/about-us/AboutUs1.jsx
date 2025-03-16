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
                    <h2 className='text-2xl lg:text-4xl'>Transforming Healthcare, Simplifying Management</h2>
                    <p className='py-5'> <span className='font-bold'>Health Care</span> is a modern hospital management system built to enhance efficiency, accuracy, and care quality within healthcare facilities. We aim to bring smart, digital solutions to hospitals, clinics, and medical centers for smoother daily operations and better patient experiences.</p>
                    <p className='font-semibold pb-2'>Why Choose Health Care?</p>
                    {
                        features.map((feature, idx) => <ul key={idx} className='pt-[2px]'>
                            <li className='flex items-center gap-2 pl-2'> <MdOutlineDone className=' bg-green-500 text-white rounded text-md' />
                                {feature}</li>
                        </ul>)
                    }
                    <p className='pt-5'>With Health Care, managing your hospital becomes easier, faster, and more reliable — so you can focus on what matters most: delivering better healthcare.</p>

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