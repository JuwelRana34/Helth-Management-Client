import { useContext, useEffect } from "react";
import PaymentTable from "../payments/PaymentTable";
import { AuthContext } from "../../Providers/AuthProvider";
import useFetchData from "../../utils/fetchGetFunction";
function Payments() {
  const {isAdmin} = useContext(AuthContext)

  const { data:AllPayment =[] , isLoading  }=useFetchData("AllPayments","payments")

  return (
    <div>
     {isAdmin ? <div className="overflow-x-auto rounded-xl shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Payment Transactions
      </h2>
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="text-xs text-gray-600 uppercase bg-gray-100">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Transaction ID</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Amount ($)</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Method</th>
            <th className="px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {AllPayment.map((item, index) => (
            <tr
              key={item._id}
              className="bg-white border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 py-3 font-medium">{index + 1}</td>
              <td className="px-4 py-3 font-mono text-blue-600">
                {item.tran_id}
              </td>
              <td className="px-4 py-3">{item.userInfo.name}</td>
              <td className="px-4 py-3">{item.userInfo.email}</td>
             
              <td className="px-4 py-3 text-green-600 font-semibold">
                ${item.amount}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.paymentStatus === "paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.paymentStatus}
                </span>
              </td>
              <td className="px-4 py-3">{item.paymentMethod}</td>
              <td className="px-4 py-3">
                {new Date(item.createdAt).toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> :<PaymentTable /> } 
       
    </div>
  );
}

export default Payments;
