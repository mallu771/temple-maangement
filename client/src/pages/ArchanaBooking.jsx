// src/pages/ArchanaBooking.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  User,
  Phone,
  CalendarDays,
  Clock3,
  Sparkles
} from "lucide-react"

export default function ArchanaBooking() {

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    date: "",
    slot: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(form)

    alert("Archana Booking Successful")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">

            <Sparkles size={36} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Archana Booking
            </h1>

          </div>

          <p className="text-lg text-orange-100 max-w-3xl leading-8">
            Book your sacred Archana seva online for
            Shri Lakkavva Devi Temple and receive
            divine blessings with devotion and faith.
          </p>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side Info */}
          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-md p-6">

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Temple Archana Information
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                Devotees can book Archana seva online
                and participate in temple rituals peacefully.
                Please provide accurate details while booking.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Available Timings
                    </h3>

                    <p className="text-gray-500">
                      6:00 AM to 10:00 AM
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    <CalendarDays size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Booking Days
                    </h3>

                    <p className="text-gray-500">
                      All Days Available
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Important Note */}
            <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-orange-500">

              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Important Note
              </h2>

              <p className="text-gray-600 leading-7">
                Devotees are requested to arrive
                15 minutes before the selected slot.
                During festivals and special poojas,
                timings may change.
              </p>

            </div>

          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Book Your Archana
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-2"
            >

              {/* Name */}
              <div>

                <label className="text-gray-700 font-medium mb-2">
                  Devotee Name
                </label>

                <div className="relative">

                  <User
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value
                      })
                    }
                  />

                </div>

              </div>

              {/* Mobile */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number
                </label>

                <div className="relative">

                  <Phone
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        mobile: e.target.value
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
                      setForm({
                        ...form,
                        date: e.target.value
                      })
                    }
                  />

                </div>

              </div>

              {/* Slot */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Select Slot
                </label>

                <div className="relative">

                  <Clock3
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <select
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        slot: e.target.value
                      })
                    }
                  >
                    <option>Select Slot</option>
                    <option>6:00 AM</option>
                    <option>8:00 AM</option>
                    <option>10:00 AM</option>
                  </select>

                </div>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-md hover:shadow-xl"
              >
                Book Archana
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}