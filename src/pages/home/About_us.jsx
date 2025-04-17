import React, { useState } from "react";
import photo from "../../../src/assets/aboutus/about1.jpg";
import squre from "../../../src/assets/aboutus/about-shape1.png";
import squre2 from "../../../src/assets/aboutus/about-shape2.png";
import squre3 from "../../../src/assets/aboutus/about-shape3.png";
import videoThumbnail from "../../../src/assets/aboutus/wrap-video.jpg";
import line from "../../../src/assets/aboutus/line.png";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router";


const About_us = () => {
    const [isOpen, setIsOpen] = useState(false);
    const features = [
        "Easy and user-friendly interface for staff and administrators", 'Efficient patient management and appointment scheduling', "Secure storage and access to medical records", "Real-time coordination between departments and staff"
    ]

    return (
        <div className="px-4 lg:px-0 mt-12 mb-8">
            <p className='flex justify-center pb-4'>
                <span className="bg-btnBg text-primary rounded-full py-2 px-3 font-semibold text-center"> About Us </span>
            </p>
            <div className="grid  grid-cols-12 mt-5 justify-center container mx-auto">

                <div className="col-span-12 lg:col-span-6 w-full md:pr-10">
                    <div className="aboutUs-img relative p-2">
                        <img
                            src={photo}
                            className="mt-10 shadow-lg relative rounded-xl z-[5] md:w-72 mx-auto md:h-auto"
                            alt="Healthcare Logo"
                        />
                        <div className="absolute z-0 top-0 left-10">
                            <img src={squre} alt="svg img" />
                        </div>
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                            <img src={squre2} alt="svg img" />
                        </div>
                        <div className="absolute -bottom-16 left-24">
                            <img src={squre3} alt="svg img" />
                        </div>
                        <div className="absolute md:animate-move-right -bottom-10 right-0 z-[6] bg-white shadow-2xl rounded-3xl border p-2 mr-2 md:p-5">
                            <div className="flex justify-center items-center gap-5">
                                <div>
                                    <img
                                        className="w-16 rounded-full bg-[#eebcff] p-2"
                                        src="https://cdn-icons-png.flaticon.com/128/83/83654.png"
                                        alt="icon"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="font-bold text-xl md:text-4xl text-gray-800">
                                        45+
                                    </h1>
                                    <h3 className="text-[#767ab2]">Global Healthcare Awards</h3>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 z-[9] bg-white p-3 rounded-3xl border shadow-lg">
                            <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
                                <img
                                    className="rounded-2xl w-32 md:w-48 mb-2"
                                    src={videoThumbnail}
                                    alt="video thumbnail"
                                />

                                <img
                                    className="absolute  w-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    src="https://cdn-icons-png.flaticon.com/128/4208/4208490.png"
                                    alt="play button"
                                />


                            </div>
                            <img className="w-20" src={line} alt="line" />
                        </div>
                    </div>
                </div>
                <div className="col-span-12 mt-16 lg:mt-0 lg:col-span-6 w-full">
                    <div>
                        <h1 className="font-semibold text-2xl text-primary md:text-4xl">
                            Transforming Healthcare, Simplifying Management
                        </h1>
                        <p className="py-5">
                            <span className='font-bold'>Health Care</span> is a modern hospital management system built to enhance efficiency, accuracy, and care quality within healthcare facilities. We aim to bring smart, digital solutions to hospitals, clinics, and medical centers for smoother daily operations and better patient experiences.
                        </p>

                        <p className='font-semibold text-emerald-600 pb-2'>Why Choose Health Care?</p>
                        {
                            features.map((feature, idx) => <ul key={idx} className='pt-[2px]'>
                                <li className='flex items-center gap-2 pl-2'> <MdOutlineDone className=' bg-emerald-500 text-white rounded text-md' />
                                    {feature}</li>
                            </ul>)
                        }
                        <p className='pt-5'>With Health Care, managing your hospital becomes easier, faster, and more reliable — so you can focus on what matters most: delivering better healthcare.</p>


                        <p className="text-emerald-500">
                            Our dedicated team of medical professionals is here to guide you on your health journey.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-6  lg:mt-12 xl:mt-16">
                <Link to={"/about"} className="flex items-center bg-btnBg text-primary font-semibold px-4 py-2 rounded-full hover:bg-emerald-300 transition">
                    More About Us
                    <img className="w-8 ml-4 rounded-full" src="https://cdn-icons-gif.flaticon.com/7740/7740503.gif" alt="Arrow" />
                </Link>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
                    <div className="bg-white p-5 rounded-lg shadow-lg relative w-full max-w-2xl">
                        <button
                            className="absolute top-2 right-2 text-gray-600 text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            ✖
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-64 md:h-96"
                                src="https://www.youtube.com/embed/TOPrY7YqBZA?si=3g7qrpQS4ThCTY5B"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default About_us;