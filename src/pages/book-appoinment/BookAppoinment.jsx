import axios from "axios";
import { Loader } from "lucide-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";

const BookAppointment = () => {
  const plans = [
    {
      name: "Basic",
      plan: "basic",
      price: "$100",
      duration: "Month",
      features: ["3 tickets", "7 days", "Doctor support"],
      button: "Get Started",
    },
    {
      name: "Starter",
      plan: "starter",
      price: "$200",
      duration: "Month",
      features: [
        "7 tickets",
        "25 days",
        "Email support",
      ],
      button: "subscribe now",
    },
    {
      name: "Premium",
      plan: "premium",
      price: "$300",
      duration: "Month",
      features: [
        "13 tickets",
        "30 days",
        "Email & Chat support",
      ],
      button: " unsubscribe now",
    },
    // {
    //   name: "Enterprise",
    //   price: "Custom",
    //   duration: "",
    //   features: [
    //     "Dedicated account manager",
    //     "Integration support",
    //     "Email & Chat support",
    //   ],
    //   button: "Contact us",
    // },
  ];

  const { userDatabaseInfo, user } = useContext(AuthContext);
  const [loadingButtons, setLoadingButtons] = useState({});
  

  const handelPayments = async (plan) => {
    setLoadingButtons((prev) => ({ ...prev, [plan]: true }));

    const paymentData = {
      plan: plan ,
      cus_name: user?.displayName,
      cus_email: user?.email,
      cus_phone: "018******",
      currency: "BDT",
      userID: userDatabaseInfo?._id,
      fail_url: "https://healthcarebd2.netlify.app/paymentFailure",
      cancel_url: "https://healthcarebd2.netlify.app/paymentFailure",
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_Url}/api/payment`,
        paymentData
      );

      window.location.href = data?.payment_url;
      toast.success("now you will redirect to the payment page")
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingButtons((prev) => ({ ...prev, [plan]: false }));
    }
  };


  return (
    <div className="w-11/12 mx-auto py-16 text-center">
      {/* Header Section */}
      <h2 className="text-4xl font-bold text-gray-800">
        Simple, <span className="text-[#1C5CBB]">Transparent</span> Pricing
      </h2>
      <p className="text-gray-500 mt-2">No contract. No surprise fees.</p>

      {/* Toggle Option */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <span className="text-sm font-medium text-gray-700">
          20% Discount - Per Yearly
        </span>
        <input type="checkbox" className="toggle toggle-primary" />
        <span className="text-sm font-medium text-gray-700">Pay Monthly</span>
      </div>

      {/* Pricing Cards */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative p-8 h-[370px] rounded-2xl shadow-lg border border-gray-200 transition-all overflow-hidden group"
          >
            {/* Background Gradient - Only Visible on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C5CBB] to-[#39B5A4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 text-gray-800 group-hover:text-white transition-all duration-300">
              {/* Plan Name */}
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                {plan.name}
              </h3>

              {/* Price Styling */}
              <div className="flex items-center justify-center">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.duration && (
                  <span className="text-lg font-medium ml-2 opacity-70">
                    / {plan.duration}
                  </span>
                )}
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-2 text-sm text-gray-700 group-hover:text-white">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
 
              <button
                onClick={() => handelPayments(plan.plan)}
                disabled={loadingButtons[plan.plan]}
                className={`mt-6 px-6 py-3 w-full rounded-lg text-sm font-medium transition-all ${
                  loadingButtons[plan.plan]
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1C5CBB] text-white group-hover:bg-white group-hover:text-[#1C5CBB]"
                } shadow-md`}
              >
                {loadingButtons[plan.plan] ? (
                  <div className="animate-pulse flex justify-center items-center gap-2">
                    Paying... <Loader className="animate-spin" size={20} />
                  </div>
                ) : (
                  plan.button
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
