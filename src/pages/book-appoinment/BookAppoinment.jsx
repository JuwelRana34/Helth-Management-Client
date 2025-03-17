import React from "react";

const BookAppointment = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      duration: "Month",
      features: ["Full Text log search", "Basic alarms", "Community support"],
      button: "Get Started",
    },
    {
      name: "Starter",
      price: "$48",
      duration: "Month",
      features: [
        "Unlimited AWS accounts",
        "Unlimited invocations",
        "Advanced Alarms",
        "Email support",
      ],
      button: "Try Free for 14 days",
    },
    {
      name: "Pro",
      price: "$250",
      duration: "Month",
      features: [
        "Smart Insights",
        "Premium notification channels",
        "Email & Chat support",
      ],
      button: "Try Free for 14 days",
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "",
      features: [
        "Dedicated account manager",
        "Integration support",
        "Email & Chat support",
      ],
      button: "Contact Sales",
    },
  ];

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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
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
              <button className="mt-6 px-6 py-3 w-full rounded-lg text-sm font-medium transition-all bg-[#1C5CBB] text-white group-hover:bg-white group-hover:text-[#1C5CBB] shadow-md">
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookAppointment;
