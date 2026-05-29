import { useState } from "react";

export default function PoojaBooking() {
  const [booking, setBooking] = useState({
    pooja: "",
    devotees: 1,
    date: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(booking);
    alert("Pooja Booked Successfully");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Pooja Booking
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <select
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setBooking({
              ...booking,
              pooja: e.target.value
            })
          }
        >
          <option>Select Pooja</option>
          <option>Ganapathi Pooja</option>
          <option>Satyanarayana Pooja</option>
          <option>Rudrabhisheka</option>
        </select>

        <input
          type="number"
          min="1"
          placeholder="Number of Devotees"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setBooking({
              ...booking,
              devotees: e.target.value
            })
          }
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setBooking({
              ...booking,
              date: e.target.value
            })
          }
        />

        <button className="bg-red-500 text-white px-4 py-2 rounded w-full">
          Book Pooja
        </button>
      </form>
    </div>
  );
}