
import React from 'react'

const HealthNeeds = () => {
    return (
        <div className='w-11/12 mx-auto grid grid-cols-2 gap-5 py-20'>
            <div className="flex flex-col justify-center">
                <p className='px-5 py-2 bg-yellow-100 rounded-full'>Why Choose Mavis Clinic</p>
                <p className='py-5 text-5xl font-bold'>Unique Approach To Your Health Needs</p>
                <div className="bg-green-200 w-6/12 p-5 rounded-3xl">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam amet ipsum quia ea deleniti laudantium optio possimus impedit natus vero.</p>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="">
                    <div className="bg-purple-300 p-5 rounded-3xl">
                        {/* <p> {<SmilePlus />}</p> */}
                        <p>25k+</p>
                        <p>Happy Patients</p>
                    </div>
                    <img src="/public/section/image1.jpeg" alt="" />
                </div>
                <div className="flex flex-col">
                    <img src="/public/section/image2.jpeg" alt="" />
                    <div className="bg-blue-300 p-5 rounded-3xl">
                        {/* <p> {<SmilePlus />}</p> */}
                        <p>25k+</p>
                        <p>Happy Patients</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HealthNeeds