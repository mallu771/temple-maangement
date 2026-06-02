import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function MonthlyReports() {
  const [monthlyData] = useState([
    {
      month: "January",
      income: 50000,
      expense: 20000
    },
    {
      month: "February",
      income: 65000,
      expense: 25000
    }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-6">
        Monthly Reports
      </h2>

      <table className="w-full border">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="border p-3">Month</th>
            <th className="border p-3">Income</th>
            <th className="border p-3">Expense</th>
            <th className="border p-3">Balance</th>
          </tr>
        </thead>

        <tbody>
          {monthlyData.map((data, index) => (
            <tr key={index}>
              <td className="border p-3">
                {data.month}
              </td>

              <td className="border p-3">
                ₹ {data.income}
              </td>

              <td className="border p-3">
                ₹ {data.expense}
              </td>

              <td className="border p-3 font-bold">
                ₹ {data.income - data.expense}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}