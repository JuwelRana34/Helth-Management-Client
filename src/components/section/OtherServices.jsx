import React from 'react'
import { otherServiceData, serviceData } from '../../utils/serviceData'

const OtherServices = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className='grid md:grid-cols-3 gap-20 py-10'>
                <div className="col-span-2">
                    <p className='text-2xl font-bold'>Senior Care</p>
                    <p className='py-5 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores veritatis, ex minima porro quis eaque deserunt vitae, quasi exercitationem culpa libero officia tenetur fugit reprehenderit assumenda laudantium. Non omnis similique ea nostrum! Molestias consequatur harum id itaque ipsa! Corporis natus repudiandae, aliquid provident illum possimus corrupti molestias porro quibusdam?</p>
                    <p className='font-bold mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, sunt.</p>
                    <div className="grid md:grid-cols-2 gap-10">
                        {serviceData?.map(item => <div key={item?.id}
                            className='p-10 rounded-3xl border border-gray-200 bg-gray-100'>
                            <img  src={item?.icon} alt="" />
                            <p className='text-2xl font-bold'>{item?.title}</p>
                            <p className='text-gray-600 py-5'>{item?.description}</p>
                            <p className='flex items-center gap-2'>Learn More <img className="w-8 ml-4 rounded-full" src="https://cdn-icons-gif.flaticon.com/7740/7740503.gif" alt="Arrow" /></p>
                        </div>)}
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="bg-purple-400 py-5 px-5 rounded-3xl border border-gray-200 gap-2 flex flex-col">
                        <p className='text-xl font-bold'>Others Service</p>
                        {otherServiceData?.map(item => <div key={item?.id}
                            className='px-5 rounded-3xl border bg-white  border-gray-200'>
                            <div className="flex justify-between items-center">
                                <img className='w-8 h-8 bg-orange-300 p-2 rounded-full my-2' src={item?.icon} alt="" />
                                <p >{item?.title}</p>
                                <img className="w-8 ml-4 rounded-full" src="https://cdn-icons-gif.flaticon.com/7740/7740503.gif" alt="Arrow" />
                            </div>
                        </div>)}
                    </div>
                    <div className="border border-gray-200 p-5 rounded-3xl">
                        <p className='text-2xl font-bold'>You Have any Questions</p>
                        <p className='text-gray-600 py-2'>You email address will not be published</p>

                        <div className="space-y-2">
                            <div className="w-full flex flex-col">
                                <label>Name</label>
                                <input className='border bg-gray-100 rounded-3xl border-gray-200 px-3 py-2' type="text" placeholder='Your Name' />
                            </div>
                            <div className="w-full flex flex-col">
                                <label>Email</label>
                                <input className='border bg-gray-100 rounded-3xl border-gray-200 px-3 py-2' type="text" placeholder='Enter Your Email' />
                            </div>
                            <div className="w-full flex flex-col">
                                <label>Comment</label>
                                <textarea className='border bg-gray-100 rounded-3xl border-gray-200 px-3 py-2' placeholder='Your Message' />
                            </div>
                            <div className="w-full flex gap-2">
                                <input type="checkbox" />
                                <label htmlFor="I accept all terms & conditions">I accept all terms & conditions</label>
                            </div>
                            <button className='bg-[#1C5CBB] px-5 py-2 rounded-3xl text-white flex gap-2 items-center text-xl font-bold'>Submit <img className="w-8 ml-4 rounded-full" src="https://cdn-icons-gif.flaticon.com/7740/7740503.gif" alt="Arrow" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherServices