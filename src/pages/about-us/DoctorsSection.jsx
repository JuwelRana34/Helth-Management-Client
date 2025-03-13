// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../../components/Card';

const DoctorsSection = () => {


    const doctors = [
        {
            name: "Dr. Aisha Rahman",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
            department: "Cardiology", 
        },
        
        {
            name: "Dr. David Smith",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
            department: "Neurology",
        },
        {
            name: "Dr. Emily Johnson",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
            department: "Pediatrics",
        },
        {
            name: "Dr. Rajesh Kumar",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOZNAA0l6H1rYwGvL1M2O_oLwtcoHbfeQfg&s",
            department: "Orthopedics",
        },
    ];


    return (
        <div className="bg-zinc-50 container mx-auto">
            <p className='p-8 underline text-lg text-gray-500 font-bold'>Meet Our Proffetionals</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-lg mx-auto">The Skills Proffetionals Making A Difference</h2>

            <div className='py-12'>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {doctors.map((doctor, idx) => (
                    <SwiperSlide key={idx}>
                        <Card item={doctor} />
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>


        </div>
    );
};

export default DoctorsSection;