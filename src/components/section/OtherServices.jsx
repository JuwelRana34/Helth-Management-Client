import React from 'react'
import { otherServiceData, serviceData } from '../../utils/serviceData'

const OtherServices = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className='grid md:grid-cols-3 gap-5'>
                <div className="col-span-2">
                    <p className='text-2xl font-bold'>Senior Care</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores veritatis, ex minima porro quis eaque deserunt vitae, quasi exercitationem culpa libero officia tenetur fugit reprehenderit assumenda laudantium. Non omnis similique ea nostrum! Molestias consequatur harum id itaque ipsa! Corporis natus repudiandae, aliquid provident illum possimus corrupti molestias porro quibusdam?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, sunt.</p>
                    <div className="grid md:grid-cols-2 gap-5">
                        {serviceData?.map(item => <div key={item?.id}
                            className='p-10 rounded-3xl border border-gray-200'>
                            <img src={item?.icon} alt="" />
                            <p>{item?.title}</p>
                            <p>{item?.description}</p>
                            <p>Learn More</p>
                        </div>)}
                    </div>
                </div>
                <div className="">
                    <div className="bg-purple-400 py-5 px-5 rounded-3xl border border-gray-200 gap-2 flex flex-col">
                        <p>Others Service</p>
                        {otherServiceData?.map(item => <div key={item?.id}
                            className='px-5 rounded-3xl border bg-white  border-gray-200'>
                            <div className="flex justify-between ">
                                <img src={item?.icon} alt="" />
                                <p>{item?.title}</p>
                            </div>
                        </div>)}
                    </div>
                    <div className="border border-gray-200 py-5 px-5 rounded-3xl">
                        <p>You Have any Questions</p>
                        <p>You email address will not be published</p>

                        <div className="w-full flex flex-col">
                            <label>Name</label>
                            <input className='border bg-gray-100 rounded-3xl border-gray-200 px-3 py-2' type="text" placeholder='Your Name' />
                        </div>
                        <div className="w-full flex flex-col">
                            <label>eEmail</label>
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
                        <button className='bg-[#1C5CBB] px-5 py-2 rounded-3xl text-white'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherServices