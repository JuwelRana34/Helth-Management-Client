import React, { useState } from 'react';

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        image: '',
        specialty: '',
        brief: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-xl rounded-lg mt-10 ">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Add Doctor</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
                <input type="date" name="dob" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
                <select name="gender" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" name="image" placeholder="Image URL" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
                <input type="text" name="specialty" placeholder="Specialty" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
                <textarea name="brief" placeholder="Brief Description" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"></textarea>
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400" />
                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctor;
