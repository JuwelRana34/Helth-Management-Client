import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Ronald Richards",
    role: "Patient",
    feedback:
      "I couldn’t be happier with the results of my rhinoplasty procedure at Mavis. Dr. Ryan Taylor and the entire team were incredibly supportive throughout the entire process.My physiotherapy sessions at Mavis helped me regain mobility faster than I expected. Highly skilled professionals with a patient-first approach.",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
  },
  {
    name: "Wade Warren",
    role: "Doctor",
    feedback:
      "After years of struggling with stubborn fat pockets, I finally decided to try liposuction at Mavis. The results exceeded my expectations! Dr. Isabella and his team were professional, caring, and attentive to my needs.",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    rating: 5,
  },
  {
    name: "Ralph Edwards",
    role: "Eye Patient",
    feedback:
      "The team at Mavis provided exceptional service. My cataract surgery was smooth, and I now have perfect vision. I’m so grateful for the amazing care I received. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    rating: 5,
  },
  {
    name: "Kathryn Murphy",
    role: "Heart Patient",
    feedback:
      "Mavis saved my life with their advanced cardiac care. The doctors were knowledgeable, and the staff was compassionate throughout my recovery process.",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    rating: 5,
  },
];

const FeedbackSlider = () => {
  return (
    <div className="py-16  rounded-xl w-11/12 mx-auto text-center">
      {/* Heading Section */}
      <div className="mb-12">
        <p className="text-md font-semibold text-[#1C5CBB] uppercase tracking-widest">Client Feedback</p>
        <h2 className="text-4xl font-bold text-gray-800 leading-snug mt-2">
          Words of Satisfaction:{" "}
          <span className="italic text-[#1C5CBB]">Life-Changing Experiences</span>  
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Hear what our esteemed patients have to say about their experiences.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="py-20 px-4 bg-white rounded-xl  shadow-lg h-96 flex flex-col">
              <p className="text-gray-600 text-md italic line-clamp-4 flex-grow">“{testimonial.feedback}”</p>
              <div className="flex items-center justify-center mt-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-purple-500"
                />
                <div className="ml-4 text-left">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-yellow-500 mt-1">{"⭐".repeat(testimonial.rating)}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackSlider;
