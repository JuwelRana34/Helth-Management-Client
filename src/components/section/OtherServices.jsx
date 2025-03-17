import React from 'react';
import { otherServiceData, serviceData } from '../../utils/serviceData';

const OtherServices = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                <div className="lg:col-span-2">
                    <p className='text-3xl font-bold text-blue-900'>Senior Care Services</p>
                    <p className='py-5 text-gray-700 leading-relaxed'>
                        We provide exceptional senior care services tailored to meet the needs of elderly individuals. Our compassionate approach ensures that seniors receive the highest quality of care, including companionship, medical support, and assistance with daily activities. Our team is dedicated to making life easier, more enjoyable, and comfortable for your loved ones.
                    </p>
                    <p className='font-bold mb-5 text-blue-800'>Experience the best senior care services with us.</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {serviceData?.map(item => (
                            <div key={item?.id} className='p-6 rounded-xl shadow-md border border-gray-200 bg-white'>
                                
                                <p className='text-xl font-semibold text-blue-900'>{item?.title}</p>
                                <p className='text-gray-600 py-3'>{item?.description}</p>
                                <p className='flex items-center gap-2 text-blue-700 font-medium cursor-pointer hover:underline'>
                                    Learn More 
                                    <img className="w-8 ml-2 rounded-full" src="https://cdn-icons-png.flaticon.com/128/2252/2252537.png" alt="Arrow" />
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="bg-blue-100 py-5 px-5 rounded-xl shadow-md border border-gray-200 flex flex-col gap-3">
                        <p className='text-xl font-bold text-blue-900'>Other Services</p>
                        {otherServiceData?.map(item => (
                            <div key={item?.id} className='px-4 py-3 rounded-xl bg-white shadow border border-gray-200 flex items-center justify-between'>
                                <img className='w-8 h-8 bg-orange-300 p-2 rounded-full' src={item?.icon} alt="Service Icon" />
                                <p className='text-gray-700 font-medium'>{item?.title}</p>
                                <img className="w-8 ml-2 rounded-full bg-fuchsia-200 p-2" src="https://cdn-icons-png.flaticon.com/128/1536/1536475.png" alt="Arrow" />
                            </div>
                        ))}
                    </div>
                    <div className="border border-gray-200 p-5 rounded-xl shadow-md bg-white">
                        <p className='text-2xl font-bold text-blue-900'>Have Questions?</p>
                        <p className='text-gray-600 py-2'>Your email address will not be published.</p>
                        <div className="space-y-3">
                            <div className="flex flex-col">
                                <label className='font-medium'>Name</label>
                                <input className='border bg-gray-100 rounded-xl px-3 py-2' type="text" placeholder='Your Name' />
                            </div>
                            <div className="flex flex-col">
                                <label className='font-medium'>Email</label>
                                <input className='border bg-gray-100 rounded-xl px-3 py-2' type="text" placeholder='Enter Your Email' />
                            </div>
                            <div className="flex flex-col">
                                <label className='font-medium'>Comment</label>
                                <textarea className='border bg-gray-100 rounded-xl px-3 py-2' placeholder='Your Message' />
                            </div>
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" />
                                <label className='text-gray-700'>I accept all terms & conditions</label>
                            </div>
                            <button className='bg-[#39b5a4] px-5 py-2 rounded-xl text-white flex gap-2 items-center text-lg font-bold'>
                                Submit 
                                {/* <img className="w-7 ml-3 rounded-full" src="https://cdn-icons-gif.flaticon.com/7740/7740503.gif" alt="Arrow" /> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className='mt-12 bg-gray-100 p-8 rounded-xl shadow-md'>
                <p className='text-3xl font-bold text-blue-900 text-center'>Frequently Asked Questions</p>
                <div className='mt-6 space-y-4'>
                    <div className='bg-white p-4 rounded-xl shadow-md border border-gray-200'>
                        <p className='font-semibold text-blue-900'>Q: What services do you provide for seniors?</p>
                        <p className='text-gray-600'>A: We offer personalized senior care services including companionship, medical support, and assistance with daily activities.</p>
                    </div>
                    <div className='bg-white p-4 rounded-xl shadow-md border border-gray-200'>
                        <p className='font-semibold text-blue-900'>Q: How can I contact your support team?</p>
                        <p className='text-gray-600'>A: You can contact us through our website’s contact form or call our 24/7 support hotline.</p>
                    </div>
                    <div className='bg-white p-4 rounded-xl shadow-md border border-gray-200'>
                        <p className='font-semibold text-blue-900'>Q: Do you offer customized care plans?</p>
                        <p className='text-gray-600'>A: Yes, we provide tailored care plans based on the needs of each individual.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;
