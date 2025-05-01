import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PricingCard from "../../components/PricingCard";
import Swal from "sweetalert2";
import ThemeContext from "../../Providers/ThemeContext";

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
  const axiosSecure = useAxiosSecure();

  const handlePayments = async (plan) => {
  
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

    Swal.fire({
      title: `Are you sure to Subscribe ${plan} ?`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Subscribe!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingButtons((prev) => ({ ...prev, [plan]: true }));

        try {
          const { data } = await axiosSecure.post(
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
      }
    });


  };


  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-500 dark:text-darkText">
          Simple,{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 dark:bg-gradient-to-r dark:from-violet-300 dark:to-blue-300">
            Transparent
          </span>{" "}
          Pricing
        </h2>
        <p className="mt-2 text-gray-500 dark:text-darkText">No contract. No surprise fees.</p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3 ">
        {plans.map((plan, index) => (
          <PricingCard
            loadingButtons={loadingButtons}
            handlePayments={handlePayments}
            key={index}
            type={plan.plan}
            title={plan.name}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
