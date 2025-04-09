import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentTable = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userDatabaseInfo } = useContext(AuthContext);
  const userID = userDatabaseInfo?._id;
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    if (!userID) return;

    const fetchPayments = async () => {
      try {
        const { data } = await axiosSecure.get(
          `${import.meta.env.VITE_Url}/api/payments/${userID}`
        );
        setPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, [userID]);

  const tableHeaders = [
    "User",
    "Transaction ID",
    "Amount",
    "Method",
    "Status",
    "Date",
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      {loading ? (
        <p className="text-center text-gray-600">Loading payments...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full min-h-40 bg-white shadow-md rounded-lg relative">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                {tableHeaders.map((header, index) => (
                  <th key={index} className="py-3 px-6 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700  text-sm font-light relative">
            {payments.length === 0 ?<>
            <h1 className="text-center text-yellow-500 font-semibold md:text-xl my-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">


            You have no payment history.
            </h1>
            </>:<>
            
            {payments.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  {[
                    payment.userId?.name || "N/A",
                    payment.tran_id,
                    `$${payment.amount.toFixed(2)}`,
                    payment.paymentMethod,
                    payment.paymentStatus === "paid" ? <> 
                     <FaCheckCircle className="text-green-500 inline" /> <span className=" capitalize "> {payment.paymentStatus}</span>
                    </> 
                     
                    : <>
                    <FaTimesCircle className="text-red-500 inline" />
                      <span className=" capitalize "> {payment.paymentStatus}</span>
                    </>
                      
                    ,
                    new Date(payment.createdAt).toLocaleDateString(),
                  ].map((item, index) => (
                    <td key={index} className="py-3 px-6 text-left">
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </>}
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentTable;
