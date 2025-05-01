import React, { useState } from "react";
import { otherServiceData, serviceData } from "../../utils/serviceData";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const OtherServices = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const axiosSecure = useAxiosSecure()
  const [loading , setLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
        await axiosSecure.post(`${import.meta.env.VITE_Url}/api/Contact`,formData)
    setIsPopupOpen(false);
    setFormData({ name: "", email: "", message: "" });
    toast.success("Submit Successfully! we will contact with you. Thank You.");
    } catch (error) {
       console.log(error)
    } finally{
      setLoading(false)
    }
   
  };
  const Faq = [
    {
      qus: "What services do you provide for seniors?",
      ans: "We offer personalized senior care services including companionship, medical support, and assistance with daily activities.",
    },
    {
      qus: "How can I contact your support team?",
      ans: "You can contact us through our website’s contact form or call our 24/7 support hotline.",
    },
    {
      qus: "Do you offer customized care plans?",
      ans: "Yes, we provide tailored care plans based on the needs of each individual.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="">
        <div className="lg:col-span-2">
          <p className="text-3xl font-bold text-primary dark:text-darkText">
            Senior Care Services
          </p>
          <p className="py-5 text-gray-500 leading-relaxed">
            We provide exceptional senior care services tailored to meet the
            needs of elderly individuals. Our compassionate approach ensures
            that seniors receive the highest quality of care, including
            companionship, medical support, and assistance with daily
            activities. Our team is dedicated to making life easier, more
            enjoyable, and comfortable for your loved ones.
          </p>
          <p className="font-bold mb-5 text-primary dark:text-darkText">
            Experience the best senior care services with us.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceData?.map((item , index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-darkText bg-base-300"
              >
                {/* <img
                  src={item?.icon}
                  alt="Service Icon"
                  className="w-12 h-12 mb-3"
                /> */}
                <p className="text-xl font-semibold text-primary dark:text-darkHeadingTxt ">
                  {item?.title}
                </p>
                <p className="text-gray-500 py-3">{item?.description}</p>
                <p className="flex items-center gap-2 text-primary font-medium cursor-pointer hover:underline dark:text-darkHeadingTxt">
                  Learn More{" "}
                  <img
                    className="w-8 ml-2 rounded-full "
                    src="https://cdn-icons-png.flaticon.com/128/2252/2252537.png"
                    alt="Arrow"
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
       
      </div>
      {/* FAQ Section */}
      <div className="mt-12 dark:bg-gray-800 bg-base-300 p-2 md:p-4 rounded-xl shadow-sm">
        <p className="text-3xl dark:text-darkHeadingTxt font-bold text-primary  text-center">
          <img
            className="w-10 inline"
            src="https://cdn-icons-png.flaticon.com/128/2608/2608208.png"
            alt="faq"
          />{" "}
          Frequently Asked Questions
        </p>
        <div className="mt-6 space-y-4">
          {Faq.map((faq, index) => (
            <div
              key={index}
              className="bg-base-200 p-4 rounded-xl shadow-md border-gray-200 dark:bg-dark  cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-blue-900 text-darkText">Q: {faq.qus}</p>
                <span className="text-xl font-bold">
                  {openFAQ === index ? (
                    <img
                      className="w-9"
                      src="https://cdn-icons-png.flaticon.com/128/8841/8841245.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-10"
                      src="https://cdn-icons-png.flaticon.com/128/7144/7144320.png"
                      alt=""
                    />
                  )}
                </span>
              </div>
              {/* Show answer only when this FAQ item is open */}
              {openFAQ === index && (
                <p className="text-gray-600 dark:text-darkText mt-2">{faq.ans}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/*  Our Process */}
      <div className="mt-12 dark:bg-dark dark:text-darkText bg-base-200 py-10 rounded-xl mb-8 shadow-sm">
        <p className="text-3xl font-bold text-primary dark:text-darkHeadingTxt text-center">
          Our Process
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
          {[
            {
              id: 1,
              step: "Consultation",
              desc: "We assess your needs and create a customized plan.",
              bg: "bg-gradient-to-b from-blue-200 to-blue-100",
            },
            {
              id: 2,
              step: "Care Matching",
              desc: "We match you with a professional caregiver.",
              bg: "bg-gradient-to-b from-purple-200 to-purple-100",
            },
            {
              id: 3,
              step: "Ongoing Support",
              desc: "Regular check-ins ensure high-quality care.",
              bg: "bg-gradient-to-b from-pink-200 to-pink-100",
            },
          ].map((item) => (
            <div
              key={item.id}
              className={`bg-base-300 p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:text-darkText `}
            >
              <p className="text-xl font-semibold text-primary dark:text-darkText">{item.step}</p>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* get in tuch  */}
      <section className="mt-10 bg-base-200 dark:bg-dark dark:text-darkText p-6 rounded-lg shadow-sm text-center">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary dark:text-darkHeadingTxt  flex justify-center items-center"
        >
          <img
            className="w-10 mx-2"
            src="https://cdn-icons-png.flaticon.com/128/10439/10439810.png"
            alt=""
          />
          Get in Touch
        </motion.p>
        <p className="text-gray-500 dark:text-darkText mt-4">
          Need more information? Contact us today!
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={togglePopup}
          className="mt-4 bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-green-300 dark:bg-darkHeadingTxt dark:hover:bg-darkText transition duration-300"
        >
          Contact Us
        </motion.button>

        {/* Popup Contact Form */}
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[599] p-4"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-dark dark:text-darkText p-2 rounded-xl shadow-lg w-full md:max-w-md text-center"
            >
              <h2 className="text-2xl font-bold text-blue-900 dark:text-darkHeadingTxt">Contact Us</h2>
              <p className="text-gray-600 dark:text-darkText mt-2">
                Fill out the form and we’ll get back to you soon.
              </p>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="mt-4 w-full p-2 border rounded-md  dark:bg-dark dark:border-gray-100 dark:text-darkText"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="mt-2 w-full p-2 border rounded-md dark:bg-dark dark:border-gray-100 dark:text-darkText"
              />
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="mt-2 w-full p-2 border rounded-md h-24 dark:bg-dark dark:border-gray-100 dark:text-darkText"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 w-full dark:bg-darkHeadingTxt dark:hover:bg-darkText transition duration-300"
              >
               {loading? "Sending..." :"Send" } 
              </button>
              <button
                type="button"
                onClick={togglePopup}
                className="mt-2 border-rose-200 bg-rose-50 border py-2 px-3 rounded-md text-rose-500 block w-full"
              >
                Close
              </button>
            </form>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default OtherServices;
