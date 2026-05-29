import { useState } from "react";

export default function UpcomingFestivals() {
  const [festivals] = useState([
    {
      id: 1,
      name: "Rathotsava",
      date: "2026-06-15",
      location: "Main Temple"
    },
    {
      id: 2,
      name: "Navaratri",
      date: "2026-10-01",
      location: "Temple Hall"
    },
    {
      id: 3,
      name: "Deepotsava",
      date: "2026-11-12",
      location: "Temple Ground"
    }
  ]);

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-6">
        Upcoming Festivals
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {festivals.map((festival) => (
          <div
            key={festival.id}
            className="border rounded-xl p-5 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">
              {festival.name}
            </h3>

            <p className="text-gray-600">
              Date: {festival.date}
            </p>

            <p className="text-gray-600">
              Location: {festival.location}
            </p>

            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}