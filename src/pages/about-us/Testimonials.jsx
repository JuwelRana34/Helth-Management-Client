import React from "react";

const testimonials = [
  {
    name: "Isabella K.",
    role: "Patient",
    review: "A serene visit amidst anxiety. Finding a good dentist is challenging. Thankfully, I found MediCare.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "bg-orange-100",
  },
  {
    name: "John D.",
    role: "Heart Patient",
    review: "I’ve been bringing my kids to MediCare for years, and they always have a great experience.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bgColor: "bg-blue-100",
  },
  {
    name: "Mike L.",
    role: "Professor",
    review: "I recently had a dental emergency and was amazed at how quickly I was seen.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Mark T.",
    role: "Patient",
    review: "I can’t thank the team at MediCare enough for their outstanding care and attention.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    bgColor: "bg-indigo-100",
  },
  {
    name: "Emily W.",
    role: "Patient",
    review: "Had a great visit to the dentist! Staff is friendly and professional.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/48.jpg",
    bgColor: "bg-green-100",
  },
  {
    name: "Emma S.",
    role: "Doctor",
    review: "Finding a great dentist is hard, but MediCare made it easy!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/49.jpg",
    bgColor: "bg-pink-100",
  },
];

const TestimonialSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
        Experiences Shared By Our Esteemed Patients
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg ${testimonial.bgColor}  relative transition transform hover:-translate-y-2`}
          >
            {/* User Info */}
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={testimonial.img}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>

            {/* Review */}
            <p className="mt-4 text-gray-700">{testimonial.review}</p>

            {/* Rating Stars */}
            <div className="flex space-x-1 mt-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
