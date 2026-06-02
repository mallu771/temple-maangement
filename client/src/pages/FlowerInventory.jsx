import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function FlowerInventory() {
  const [flowers, setFlowers] = useState([
    {
      id: 1,
      name: "Jasmine",
      quantity: "10 KG"
    },
    {
      id: 2,
      name: "Rose",
      quantity: "15 KG"
    }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-5">
        Flower Inventory
      </h2>

      <table className="w-full border">
        <thead className="bg-pink-500 text-white">
          <tr>
            <th className="border p-3">Flower</th>
            <th className="border p-3">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {flowers.map((flower) => (
            <tr key={flower.id}>
              <td className="border p-3">
                {flower.name}
              </td>

              <td className="border p-3">
                {flower.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}