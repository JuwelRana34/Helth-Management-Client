import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../components/Loading";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa6";
import DatePicker from "react-datepicker";


const SingleDoctor = () => {
    const { id } = useParams()
    const [doctor, setDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const axiosPublic = useAxiosPublic()

    console.log(selectedDate);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const res = await axiosPublic.get(`/api/doctor/${id}`);
                setDoctor(res.data)
            } catch (error) {
                console.error('failed to fetch:', error)
            }
        }
        fetchDoctor()
    }, [id, axiosPublic])

    if (!doctor) return <div><Loading /></div>

    return (
        <div className="grid md:grid-cols-2 lg:gap-4 p-6 bg-slate-200 w-11/12 md:w-3/4 lg:w-3/5 my-12 mx-auto rounded-lg">
            <div className="flex justify-center">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full rounded-lg object-cover"
                />
            </div>
            <div className="p-6 flex flex-col justify-between gap-8">
                {/* doctor details info */}
                <div className="space-y-3">
                    <div className="space-y-1">
                        <h6 className="text-primary font-semibold text-md">Profile </h6>
                        <h2 className="text-2xl lg:text-4xl font-semibold">
                            Dr. {doctor.name}
                        </h2>
                        <p className="text-xl text-gray-700">{doctor.specialty}</p>
                    </div>

                    <div className="space-y-1">
                        <h6 className="text-primary font-semibold text-md">Contact </h6>

                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="" />
                            {doctor.phone}
                        </p>
                        <p className="flex items-center gap-2">
                            <AiTwotoneMail />
                            {doctor.email}
                        </p>
                    </div>

                    <div>
                        <h6 className="text-primary font-semibold text-md">About </h6>
                        <p>{doctor.brief}</p>
                    </div>
                </div>

                {/* book appointment */}
                <div>
                    <h2 className="text-xl flex items-center gap-2 mb-4">
                        <FaRegCalendarCheck />
                        Book a schedule with Dr. {doctor.name}
                    </h2>

                    <div className="flex gap-4 items-center">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            minDate={new Date()}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Pick a date"
                            className="w-full p-3 bg-gray-100 text-primary rounded-lg shadow-sm outline-primary border border-emerald-500 hover:border-gray-400"
                        />
                        <div>
                            <button className="btn btn-lg rounded-lg bg-primary text-white">
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleDoctor;