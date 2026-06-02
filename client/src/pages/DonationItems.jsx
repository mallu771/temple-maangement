import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function DonationItems() {
  const [items, setItems] = useState([
    {
      id: 1,
      donor: "Ravi",
      item: "Coconut",
      quantity: 50
    },
    {
      id: 2,
      donor: "Mahesh",
      item: "Banana",
      quantity: 100
    }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-5">
        Donation Items
      </h2>

      <table className="w-full border">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="border p-3">Donor</th>
            <th className="border p-3">Item</th>
            <th className="border p-3">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {items.map((donation) => (
            <tr key={donation.id}>
              <td className="border p-3">
                {donation.donor}
              </td>

              <td className="border p-3">
                {donation.item}
              </td>

              <td className="border p-3">
                {donation.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}