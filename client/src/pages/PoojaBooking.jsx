// src/pages/PoojaBooking.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

// Import Clock3 icon

import {
  Sparkles,
  CalendarDays,
  Users,
  Flower2,
  CheckCircle2,
  Clock3
} from "lucide-react"

export default function PoojaBooking() {

 // Add this inside useState

const [booking, setBooking] = useState({
  pooja: "",
  devotees: 1,
  date: "",
  slot: ""
})

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(booking)

    alert("Pooja Booked Successfully")
  }

const timeSlots = [
  "06:00 AM - 07:00 AM",
  "07:00 AM - 08:00 AM",
  "08:00 AM - 09:00 AM",
  "10:00 AM - 11:00 AM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM"
]
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">

            <Sparkles size={36} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Temple Pooja Booking
            </h1>

          </div>

          <p className="text-lg text-orange-100 max-w-3xl leading-8">
            Book sacred poojas online at Shri Lakkavva Devi Temple
            and participate in divine rituals with devotion,
            peace, and spiritual blessings.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Information Section */}
          <div className="space-y-6">

            {/* Info Card */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Available Temple Poojas
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Flower2 size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Ganapathi Pooja
                    </h3>

                    <p className="text-gray-500">
                      Blessings for success and prosperity
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                    <Flower2 size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Satyanarayana Pooja
                    </h3>

                    <p className="text-gray-500">
                      Sacred pooja for peace and happiness
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                    <Flower2 size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Rudrabhisheka
                    </h3>

                    <p className="text-gray-500">
                      Powerful Shiva ritual for divine blessings
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-orange-500">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Devotee Benefits
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Easy online booking process
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Festival special poojas available
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Receive divine blessings and prasada
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Book Your Pooja
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Select Pooja */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Select Pooja
                </label>

                <div className="relative">

                  <Flower2
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <select
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
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

                </div>

              </div>

              {/* Devotees */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Number of Devotees
                </label>

                <div className="relative">

                  <Users
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="number"
                    min="1"
                    placeholder="Enter devotees count"
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        devotees: e.target.value
                      })
                    }
                  />

                </div>

              </div>

              {/* Date */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Booking Date
                </label>

                <div className="relative">

                  <CalendarDays
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onChange={(e) =>
                      setBooking({
                        ...booking,
                        date: e.target.value
                      })
                    }
                  />

                </div>

              </div>

{/* Time Slot */}
<div>

  <label className="block text-gray-700 font-medium mb-2">
    Select Time Slot
  </label>

  <div className="relative">

    <Clock3
      className="absolute left-4 top-4 text-gray-400"
      size={20}
    />

    <select
      className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
      onChange={(e) =>
        setBooking({
          ...booking,
          slot: e.target.value
        })
      }
    >

      <option value="">
        Select Time Slot
      </option>

      {timeSlots.map((slot, index) => (

        <option
          key={index}
          value={slot}
        >
          {slot}
        </option>

      ))}

    </select>

  </div>

</div>
              {/* Button */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-md hover:shadow-xl"
              >
                Book Pooja
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}