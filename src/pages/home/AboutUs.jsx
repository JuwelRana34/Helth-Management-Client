import React from 'react';
import doctor_paitent from '../../assets/Home/doctor-patient_relationship.jpg';
import { MdOutlineDone } from "react-icons/md";


const AboutUs = () => {

    const features = [
        "Easy and user-friendly interface for staff and administrators", 'Efficient patient management and appointment scheduling', "Secure storage and access to medical records", "Real-time coordination between departments and staff"
    ]


    return (
        <div className='py-12 container mx-auto'>
            <p className='flex justify-center'>
                <span className="bg-primary text-white rounded-full py-2 px-3 font-semibold text-center"> About Us </span>
            </p>
            <div className='flex justify-center gap-12 pt-8'>
                <div className='flex-1'>
                    <img className='w-full max-w-[220px]  rounded-xl' src={doctor_paitent} alt="" />

                </div>
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
            </div>
        </div>
    );
};

export default AboutUs;