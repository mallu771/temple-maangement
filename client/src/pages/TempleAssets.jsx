import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function TempleAssets() {
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: "Temple Bell",
      quantity: 2,
      condition: "Good"
    },
    {
      id: 2,
      name: "Silver Lamp",
      quantity: 5,
      condition: "Excellent"
    }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-5">
        Temple Assets
      </h2>

      <table className="w-full border">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="border p-3">ID</th>
            <th className="border p-3">Asset Name</th>
            <th className="border p-3">Quantity</th>
            <th className="border p-3">Condition</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td className="border p-3">{asset.id}</td>
              <td className="border p-3">{asset.name}</td>
              <td className="border p-3">
                {asset.quantity}
              </td>
              <td className="border p-3">
                {asset.condition}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}