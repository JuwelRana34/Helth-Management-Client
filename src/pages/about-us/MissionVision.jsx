import { FaEye, FaHeartbeat } from "react-icons/fa";


const MissionVision = () => {
    return (



        <div>


            
            <section
                className="relative bg-cover bg-center bg-no-repeat py-20"
                style={{
                    backgroundImage: "url('https://i.ibb.co.com/3m865ffp/pngtree-medical-practitioner-utilizing-advanced-computer-interface-in-healthcare-practice-photo-imag.jpg')",
                }}
            >
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content Layer */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10">
                    <h2 className="text-4xl text-white font-bold text-center mb-10">
                        Our Mission & Vision
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission Card */}
                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 text-blue-600 text-2xl font-semibold mb-3">
                                <FaHeartbeat />
                                <span>Our Mission</span>
                            </div>
                            <p className="text-gray-700">
                                To simplify healthcare management and improve patient care through
                                smart and efficient digital solutions that empower hospitals and
                                medical professionals.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                            <div className="flex items-center gap-3 text-blue-600 text-2xl font-semibold mb-3">
                                <FaEye />
                                <span>Our Vision</span>
                            </div>
                            <p className="text-gray-700">
                                To become a global leader in digital hospital management by
                                continuously innovating and making healthcare more connected,
                                accessible, and efficient.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MissionVision;