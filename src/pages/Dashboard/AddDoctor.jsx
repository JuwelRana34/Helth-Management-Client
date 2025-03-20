import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddDoctor = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [imagePreview, setImagePreview] = useState(null);

    const onSubmit = async(data) => {
        console.log(data,'data');
        const imageFile = {image : data.image[0]}
        console.log(imageFile,'image')
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers : {
                 'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data,'image bb')
        if(res.data.success){
            
            const doctorData = {...data, image : res.data.data.display_url};
            console.log('doctor data',doctorData)
            // post data to the database
            const menuRes = await axiosSecure.post('/menu',doctorData)
            console.log(menuRes);
            if(menuRes.data.insertedId){
                // show popup success
                reset();
                
            }

        }
       
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-xl rounded-lg mt-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
                Add Doctor
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                <input
                    type="date"
                    {...register("dob", { required: "Date of birth is required" })}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}

                <select
                    {...register("gender", { required: "Gender is required" })}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}

                {/* File Input */}
                <input
                    type="file"
                    accept="image/*"
                    {...register("image", { required: "Image is required" })}
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                {errors.image && <p className="text-red-500">{errors.image.message}</p>}

                {/* Image Preview */}
                {imagePreview && (
                    <div className="mt-3">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-32 h-32 object-cover rounded-lg mx-auto shadow"
                        />
                    </div>
                )}

                <input
                    type="text"
                    {...register("specialty", { required: "Specialty is required" })}
                    placeholder="Specialty"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                {errors.specialty && <p className="text-red-500">{errors.specialty.message}</p>}

                <textarea
                    {...register("brief", { required: "Brief description is required" })}
                    placeholder="Brief Description"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                ></textarea>
                {errors.brief && <p className="text-red-500">{errors.brief.message}</p>}

                <input
                    type="tel"
                    {...register("phone", { required: "Phone is required" })}
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddDoctor;
