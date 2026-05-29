import { useState } from "react";

export default function VolunteerTracking() {
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: "Mahesh",
      service: "Annadanam",
      status: "Active"
    },
    {
      id: 2,
      name: "Kiran",
      service: "Parking",
      status: "Inactive"
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        Volunteer Tracking
      </h2>

      <table className="w-full border">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Service</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>

        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td className="p-3 border">{volunteer.id}</td>
              <td className="p-3 border">{volunteer.name}</td>
              <td className="p-3 border">
                {volunteer.service}
              </td>
              <td className="p-3 border">
                <span
                  className={`px-3 py-1 rounded text-white ${
                    volunteer.status === "Active"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {volunteer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}