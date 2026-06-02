import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function PrasadaMaterials() {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      item: "Rice",
      quantity: "100 KG"
    },
    {
      id: 2,
      item: "Jaggery",
      quantity: "40 KG"
    }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-5">
        Prasada Materials
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {materials.map((material) => (
          <div
            key={material.id}
            className="border rounded-lg p-4"
          >
            <h3 className="font-semibold text-lg">
              {material.item}
            </h3>

            <p className="text-gray-600">
              Quantity: {material.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}