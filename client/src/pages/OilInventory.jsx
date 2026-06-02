import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function OilInventory() {
  const [oilStock, setOilStock] = useState([
    {
      id: 1,
      type: "Sesame Oil",
      quantity: "50 Liters"
    },
    {
      id: 2,
      type: "Ghee",
      quantity: "20 Liters"
    }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-5">
        Oil Inventory
      </h2>

      <div className="space-y-4">
        {oilStock.map((oil) => (
          <div
            key={oil.id}
            className="border p-4 rounded flex justify-between"
          >
            <div>
              <h3 className="font-semibold">
                {oil.type}
              </h3>
            </div>

            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
              {oil.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}