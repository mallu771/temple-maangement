import { useState } from "react";

export default function TimeSlotManagement() {
  const [slots, setSlots] = useState([
    "6:00 AM",
    "8:00 AM",
    "10:00 AM"
  ]);

  const [newSlot, setNewSlot] = useState("");

  const addSlot = () => {
    if (!newSlot) return;

    setSlots([...slots, newSlot]);
    setNewSlot("");
  };

  const deleteSlot = (index) => {
    const updated = slots.filter((_, i) => i !== index);
    setSlots(updated);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">
        Time Slot Management
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add New Slot"
          className="border p-2 rounded w-full"
          value={newSlot}
          onChange={(e) =>
            setNewSlot(e.target.value)
          }
        />

        <button
          onClick={addSlot}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {slots.map((slot, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{slot}</span>

            <button
              onClick={() => deleteSlot(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}