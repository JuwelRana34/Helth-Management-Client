import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Ensure autoplay CSS is imported

const images = [
  {
    img: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/gallery4.jpg",
    alt: "Before and After 1",
  },
  {
    img: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/gallery3.jpg",
    alt: "Before and After 2",
  },
  {
    img: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/gallery2.jpg",
    alt: "Before and After 3",
  },
  {
    img: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/gallery1.jpg",
    alt: "Before and After 4",
  },
];

const PhotoGallery = () => {
  return (
    <div className="pb-20 w-11/12 mx-auto px-5 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm font-semibold text-gray-500">Photo Gallery</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Explore Our Extensive Photo Gallery <br />
            Showcasing Stunning{" "}
            <span className="italic text-[#1C5CBB]">Before-and-After</span>{" "}
            Transformations
          </h2>
        </div>
        <button
          className="text-gray-600 hover:text-purple-700 transition-all text-sm font-semibold flex items-center gap-1"
        >
          View All From Gallery →
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]} // Ensure Autoplay is included
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop={true} // Continuous loop enabled
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // Keep autoplay running after user interaction
          pauseOnMouseEnter: false, // Keep autoplay running even when hovered
        }}
        speed={1200} // Smooth transition effect
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={img.img}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoGallery;
