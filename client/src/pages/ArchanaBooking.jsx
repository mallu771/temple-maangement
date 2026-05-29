import { useState } from "react";

export default function ArchanaBooking() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    date: "",
    slot: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Archana Booking Successful");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Archana Booking</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Devotee Name"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, mobile: e.target.value })
          }
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <select
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setForm({ ...form, slot: e.target.value })
          }
        >
          <option>Select Slot</option>
          <option>6:00 AM</option>
          <option>8:00 AM</option>
          <option>10:00 AM</option>
        </select>

        <button className="bg-orange-500 text-white px-4 py-2 rounded w-full">
          Book Archana
        </button>
      </form>
    </div>
  );
}