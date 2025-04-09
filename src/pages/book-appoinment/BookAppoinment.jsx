import axios from "axios";
import { Loader } from "lucide-react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";

const BookAppointment = () => {
  const plans = [
    {
      name: "Basic Plan",
      plan: "basic",
      price: "$7,000",
      duration: "Per Month",
      features: [
        "Up to 5 online doctor consultations per month",
        "Discounts on diagnostic tests and pharmacy purchases",
        "Access to digital health reports and appointment reminders",
      ],
      button: "Get Started",
    },
    {
      name: "Premium Plan",
      plan: "premium",
      price: "$30,000",
      duration: "Per Year",
      features: [
        "Unlimited online doctor consultations",
        "Priority access to medical specialists",
        "Dedicated support and priority scheduling",
      ],
      button: "Subscribe Now",
    },
    {
      name: "Family Plan",
      plan: "family",
      price: "$120,000",
      duration: "Per Year",
      features: [
        "Unlimited consultations for up to 4 family members",
        "Comprehensive family health monitoring and reports",
        "Exclusive discounts on family health checkups",
        "Centralized plan management for dependents",
      ],
      button: "Subscribe Now",
    },
  ];

  const { userDatabaseInfo, user } = useContext(AuthContext);
  const [loadingButtons, setLoadingButtons] = useState({});

  const handlePayments = async (plan) => {
    setLoadingButtons((prev) => ({ ...prev, [plan]: true }));

    const paymentData = {
      plan,
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
      toast.success("Redirecting to the payment page...");
    } catch (error) {
      console.error(error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoadingButtons((prev) => ({ ...prev, [plan]: false }));
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Simple, <span className="text-[#1C5CBB]">Transparent</span> Pricing
        </h2>
        <p className="mt-2 text-gray-500">No contract. No surprise fees.</p>

        <div className="flex justify-center items-center gap-4 mt-4">
          <span className="text-sm font-medium text-gray-700">
            20% Discount – Yearly Plan
          </span>
          <input type="checkbox" className="toggle toggle-primary" />
          <span className="text-sm font-medium text-gray-700">Pay Monthly</span>
        </div>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="group relative p-8 bg-white rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C5CBB] to-[#39B5A4] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

            <div className="relative z-10 text-gray-800 group-hover:text-white">
              {/* Plan Title */}
              <h3 className="text-xl font-semibold mb-2 uppercase">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex justify-center items-center mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-2 text-lg font-medium opacity-80">
                  / {plan.duration}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>

              {/* Subscribe Button */}
              <button
                onClick={() => handlePayments(plan.plan)}
                disabled={loadingButtons[plan.plan]}
                className={`mt-6 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${
                  loadingButtons[plan.plan]
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#1C5CBB] text-white group-hover:bg-white group-hover:text-[#1C5CBB]"
                }`}
              >
                {loadingButtons[plan.plan] ? (
                  <div className="flex justify-center items-center gap-2 animate-pulse">
                    Processing <Loader className="animate-spin" size={18} />
                  </div>
                ) : (
                  plan.button
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
