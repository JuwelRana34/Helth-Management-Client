import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
function Payments() {
  const { userDatabaseInfo, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const paymentData = {
    cus_name: user?.displayName,
    cus_email: user?.email,
    cus_phone: "01870545645",
    amount: "100",
    currency: "BDT",
    userID: userDatabaseInfo?._id,
    fail_url: "https://healthcarebd2.netlify.app/paymentFailure",
    cancel_url: "https://healthcarebd2.netlify.app/paymentFailure",
  };
  const handelPayments = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <div>
      Payments
      <p>
        &quot;Dear{" "}
        <span className="text-green-500 font-semibold font-roboto">
          Ataur Rahman,{" "}
        </span>{" "}
        your payment of $500 for checkup on {new Date().toLocaleDateString()}{" "}
        has been successfully processed. Transaction ID: 4asf787f67df7. Thank
        you for choosing <span className="text-cyan-600"> Madicare</span>. For
        inquiries, contact +099605465246.&quot;
      </p>
      <button disabled={loading} onClick={handelPayments} className="btn btn-primary my-5 disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed">
       {loading?<div className=" animate-pulse"> 
       paying...
       <Loader className=" inline animate-spin" size={24} />
       </div>:"payment now!"} 
      </button>
    </div>
  );
}

export default Payments;
