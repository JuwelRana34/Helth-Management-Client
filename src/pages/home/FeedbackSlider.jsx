import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Ronald Richards",
    role: "Patient",
    feedback:
      "I couldn’t be happier with the results of my rhinoplasty procedure at Mavis. Dr. Ryan Taylor and the entire team were incredibly supportive throughout. My physiotherapy sessions helped me regain mobility faster than I expected.",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
  },
  {
    name: "Wade Warren",
    role: "Doctor",
    feedback:
      "After years of struggling with stubborn fat, I tried liposuction at Mavis. The results were amazing! Dr. Isabella and team were professional, caring, and attentive to my needs.",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    rating: 5,
  },
  {
    name: "Ralph Edwards",
    role: "Eye Patient",
    feedback:
      "The Mavis team was exceptional. My cataract surgery was smooth and now I have perfect vision. I'm so grateful for the amazing care I received!",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    rating: 5,
  },
  {
    name: "Kathryn Murphy",
    role: "Heart Patient",
    feedback:
      "Mavis saved my life with advanced cardiac care. The doctors were skilled and the staff was incredibly compassionate during my recovery.",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    rating: 5,
  },
];

const FeedbackSlider = () => {
  return (
    <section className="py-20 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Patients Say
        </h2>
        <p className="text-gray-500 text-lg mt-3">
          Trusted experiences. Real feedback.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="max-w-7xl mx-auto px-4"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm h-[360px] flex flex-col justify-between transition hover:shadow-md">
              <p className="text-gray-600 text-base line-clamp-5">
                “{testimonial.feedback}”
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeedbackSlider;
