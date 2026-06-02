import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function PaymentTracking() {
  const [payments] = useState([
    {
      id: 1,
      donor: "Ramesh",
      amount: 2000,
      status: "Success"
    },
    {
      id: 2,
      donor: "Mahesh",
      amount: 1500,
      status: "Pending"
    }
  ]);

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-3xl font-bold mb-6">
        Payment Tracking
      </h2>

      <table className="w-full border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border p-3">Donor</th>
            <th className="border p-3">Amount</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="border p-3">
                {payment.donor}
              </td>

              <td className="border p-3">
                ₹ {payment.amount}
              </td>

              <td className="border p-3">
                <span
                  className={`px-3 py-1 rounded text-white ${
                    payment.status === "Success"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}