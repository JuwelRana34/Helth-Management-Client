import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddDoctor = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [imagePreview, setImagePreview] = useState(null);

    const onSubmit = async (data) => {
        try {
            if (!data.image || data.image.length === 0) {
                toast.error("Please upload an image.");
                return;
            }

            const imageFile = new FormData();
            imageFile.append("image", data.image[0]);

            // Upload image to imgbb
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (!res.data.success) {
                toast.error("Failed to upload image.");
                return;
            }

            const doctorData = {
                name: data.name,
                dob: data.dob,
                image: res.data.data.display_url,
                gender: data.gender,
                specialty: data.specialty,
                brief: data.brief,
                phone: data.phone,
                email: data.email,
            };

            // Save doctor data to database
            const response = await axios.post(`${import.meta.env.VITE_Url}/api/doctor`, doctorData);
            toast.success("Doctor added successfully!");
            reset();
            setImagePreview(null);

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
            <Toaster />
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Add Doctor
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Full Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Date of Birth</label>
                        <input
                            type="date"
                            {...register("dob", { required: "Date of birth is required" })}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                    </div>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-gray-700 font-semibold">Gender</label>
                    <select
                        {...register("gender", { required: "Gender is required" })}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                </div>

                {/* Image Upload */}
                <div className="flex flex-col items-center">
                    <label className="block text-gray-700 font-semibold">Upload Image</label>
                    <div className="relative border border-dashed border-gray-400 w-full p-5 text-center rounded-lg">
                        <input
                            type="file"
                            accept="image/*"
                            {...register("image", { required: "Image is required" })}
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <FaCloudUploadAlt className="text-gray-500 text-4xl mx-auto mb-2" />
                        <p className="text-gray-500">Click to upload image</p>
                    </div>
                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                    
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded-lg shadow" />
                    )}
                </div>

                {/* Specialty */}
                <div>
                    <label className="block text-gray-700 font-semibold">Specialty</label>
                    <input
                        type="text"
                        {...register("specialty", { required: "Specialty is required" })}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Enter specialty"
                    />
                    {errors.specialty && <p className="text-red-500 text-sm">{errors.specialty.message}</p>}
                </div>

                {/* Brief Description */}
                <div>
                    <label className="block text-gray-700 font-semibold">Brief Description</label>
                    <textarea
                        {...register("brief", { required: "Brief description is required" })}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Write a short description..."
                        rows="3"
                    ></textarea>
                    {errors.brief && <p className="text-red-500 text-sm">{errors.brief.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Phone</label>
                        <input
                            type="tel"
                            {...register("phone", { required: "Phone is required" })}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddDoctor;
