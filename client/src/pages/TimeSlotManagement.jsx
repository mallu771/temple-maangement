// src/pages/TimeSlotManagement.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Clock3,
  Plus,
  Trash2,
  Sparkles,
  CalendarClock,
  CheckCircle2
} from "lucide-react"

export default function TimeSlotManagement() {

  const [slots, setSlots] = useState([
    "6:00 AM",
    "8:00 AM",
    "10:00 AM"
  ])

  const [newSlot, setNewSlot] = useState("")

  // Add Slot
  const addSlot = () => {

    if (!newSlot.trim()) return

    setSlots([...slots, newSlot])

    setNewSlot("")
  }

  // Delete Slot
  const deleteSlot = (index) => {

    const updated = slots.filter(
      (_, i) => i !== index
    )

    setSlots(updated)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">

            <CalendarClock size={38} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Time Slot Management
            </h1>

          </div>

          <p className="text-lg text-blue-100 max-w-3xl leading-8">
            Manage temple pooja and seva timings easily.
            Add, update, and organize available time slots
            for devotees and temple activities.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Section */}
          <div className="space-y-6">

            {/* Information Card */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Temple Slot Information
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Clock3 size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Pooja Slots
                    </h3>

                    <p className="text-gray-500">
                      Manage daily pooja timings
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Sparkles size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Festival Timings
                    </h3>

                    <p className="text-gray-500">
                      Add special festival slots
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-blue-500">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Features
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Easy slot management
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Real-time slot updates
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Festival special timing support
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Manage Time Slots
            </h2>

            {/* Add Slot */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">

              <div className="relative flex-1">

                <Clock3
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Enter New Slot (Example: 4:00 PM)"
                  className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={newSlot}
                  onChange={(e) =>
                    setNewSlot(e.target.value)
                  }
                />

              </div>

              <button
                onClick={addSlot}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition duration-300 shadow-md hover:shadow-xl"
              >

                <Plus size={20} />

                Add Slot

              </button>

            </div>

            {/* Slot List */}
            <div className="space-y-4">

              {slots.map((slot, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl p-5 transition duration-300"
                >

                  {/* Slot Info */}
                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Clock3 size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {slot}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        Temple Time Slot
                      </p>
                    </div>

                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteSlot(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition duration-300"
                  >

                    <Trash2 size={18} />

                    Delete

                  </button>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}