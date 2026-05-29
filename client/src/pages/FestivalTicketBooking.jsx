import { useState } from "react";

export default function FestivalTicketBooking() {
  const [ticket, setTicket] = useState({
    festival: "",
    tickets: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ticket);
    alert("Festival Tickets Booked");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Festival Ticket Booking
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <select
          className="w-full border p-2 rounded"
          onChange={(e) =>
            setTicket({
              ...ticket,
              festival: e.target.value
            })
          }
        >
          <option>Select Festival</option>
          <option>Rathotsava</option>
          <option>Deepotsava</option>
          <option>Navaratri</option>
        </select>

        <input
          type="number"
          min="1"
          className="w-full border p-2 rounded"
          placeholder="No of Tickets"
          onChange={(e) =>
            setTicket({
              ...ticket,
              tickets: e.target.value
            })
          }
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Book Tickets
        </button>
      </form>
    </div>
  );
}