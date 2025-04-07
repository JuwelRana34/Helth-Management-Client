import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
      {
        img: "https://www.tuv.com/content-media-files/master-content/services/products/p05-medical/1665-tuv-rheinland-eu-medical-device-regulation-mdr-2017-745/fotolia_117124325_x_bearbeitet_sergey-nivens_core_8_3.jpg",
      title: "Your Health, Our Commitment",
      des: "We are dedicated to offering you the best possible care with a focus on your health and well-being. Whether it's a routine checkup or a specialized treatment, our team of experienced professionals is here to ensure you receive personalized and compassionate care.",
    },
    {
        img: "https://www.cpajournal.com/wp-content/uploads/2019/02/GettyImages-1001713236-730x330.jpg",
      title: "Advanced Medical Solutions",
      des: "In today's world, healthcare must be both advanced and accessible. Our cutting-edge medical solutions incorporate the latest technology to provide you with the best possible care. ",
    },
    {
      img: "https://eithealth.eu/wp-content/uploads/2023/05/Digital-Medical-Devices-Summer-School.png",
      title: "Comprehensive Care for All Ages",
      des: "Our commitment to providing quality healthcare extends to patients of all ages. From pediatric care to geriatric services, we specialize in creating personalized care plans that address the unique needs of each patient. ",
    },
    {
      img: "https://media.istockphoto.com/id/1250152635/photo/medicine-doctor-holding-electronic-medical-and-record-on-tablet-dna-digital-healthcare-and.jpg?s=612x612&w=0&k=20&c=FikWeiJRJBc4UD4wbmhRzPoJRCMnMO8XPY2kD2AWsKA=",
      title: "24/7 Availability, Always Ready",
      des: "We understand that health emergencies can happen at any time. That's why our services are available 24/7, ensuring that you receive immediate medical attention when you need it the most.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/10/33/28/28/360_F_1033282806_ZnGQNch8TUA64Dp5kS9vZessssu8IhUK.jpg",
      title: "Trusted by Thousands of Patients",
      des: "With a growing community of patients, we pride ourselves on being a trusted healthcare provider. Thousands of people have relied on our expert services for years, and we continuously strive to build strong relationships based on trust and results.",
    },
  ];
  
  
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      3000
    );
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlider]);

  return (
    <>
      <div
        className="w-full h-70 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/65 before:inset-0 transform duration-1000 ease-linear py-5"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-5xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base text-justify md:text-center lg:text-lg w-3/4 mx-auto">
            {sliders[currentSlider].des}
          </p>
        </div>
      </div>
      {/* slider container */}
      <div className="flex justify-center items-center gap-3 p-2">
        {/* sliders */}
        {/* {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))} */}
      </div>
    </>
  );
};

export default Hero;
