import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function DailyAccounts() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "Income",
      category: "Donation",
      amount: 5000
    },
    {
      id: 2,
      type: "Expense",
      category: "Flowers",
      amount: 1200
    }
  ]);

  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, item) => acc + item.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-6">
        Daily Income & Expense
      </h2>

      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <div className="bg-green-100 p-5 rounded">
          <h3 className="text-lg font-semibold">
            Total Income
          </h3>

          <p className="text-2xl font-bold text-green-700">
            ₹ {totalIncome}
          </p>
        </div>

        <div className="bg-red-100 p-5 rounded">
          <h3 className="text-lg font-semibold">
            Total Expense
          </h3>

          <p className="text-2xl font-bold text-red-700">
            ₹ {totalExpense}
          </p>
        </div>
      </div>

      <table className="w-full border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border p-3">Type</th>
            <th className="border p-3">Category</th>
            <th className="border p-3">Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border p-3">
                {transaction.type}
              </td>

              <td className="border p-3">
                {transaction.category}
              </td>

              <td className="border p-3">
                ₹ {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}