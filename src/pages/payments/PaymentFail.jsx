import React from "react";

const PaymentFail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Payment Failed ☹</h2>
        <p className="text-gray-600 mt-2">
          Unfortunately, your payment could not be processed. Please try again or contact support.
        </p>
      </div>
    </div>
  );
};

export default PaymentFail;
