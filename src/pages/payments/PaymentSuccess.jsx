import axios from "axios";
import { Loader } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
function PaymentSuccess() {
  const {userDatabaseInfo}= useContext(AuthContext)
  const [status, setStatus] = useState(true);
  const [verified, setVerified] = useState(false);
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure()
  const userID = userDatabaseInfo?._id;
  useEffect(() => {
    const tran_id = searchParams.get("tran_id");
    if (!tran_id) {
      return toast.error("Transaction ID not found!");
    }

    if (!userID) return;

    const verifyPayment = async () => {
      try {
        const {data} = await axiosSecure.get(
          `${import.meta.env.VITE_Url}/api/verify-payment/${tran_id}/${userID}`
        );

        if (data.status === true) {
          setVerified(true);
          toast.success("Payment Successful! Thank you.");       
        } 
      } catch (error) {
        console.error("Error verifying payment:", error);
        toast.error("Failed to verify payment. Please try again.");
    } finally{
      setStatus(false);
    }
  }
    verifyPayment();
  }, [searchParams, userID]);

  if (status) {
    return (
      <h2 className=" my-5 text-center animate-pulse text-orange-600 font-semibold">
        Checking... <Loader className="inline animate-spin" size={24} />{" "}
      </h2>
    );
  }
  return verified ? (
    <div className="w-11/12 mx-auto min-h-80 text-center">
      <h2 className="text-green-500 font-semibold flex justify-center items-center my-5">
        <img
          className=" w-10 mx-2"
          src="https://cdn-icons-gif.flaticon.com/7920/7920940.gif"
          alt="paymentIcon"
        />
        Payment Successful! 🎉
      </h2>
      <div className="flex justify-center items-center my-5">
        <Link
          to={"/Dashboard/payments"}
          className="btn btn-primary text-center"
        >
          Check Payment History
        </Link>
      </div>
    </div>
  ) : (
    <h2>Payment Failed!</h2>
  );
}

export default PaymentSuccess;
