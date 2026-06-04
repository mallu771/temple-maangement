// src/pages/FestivalTicketBooking.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Sparkles,
  Ticket,
  Users,
  CalendarDays,
  CheckCircle2,
  PartyPopper,
   Clock3
} from "lucide-react"

export default function FestivalTicketBooking() {

  const [ticket, setTicket] = useState({
    festival: "",
    tickets: 1,
     slot: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(ticket)

    alert("Festival Tickets Booked Successfully")
  }
// Add this slots array above return()

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
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">

            <PartyPopper size={38} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Festival Ticket Booking
            </h1>

          </div>

          <p className="text-lg text-green-100 max-w-3xl leading-8">
            Book festival entry tickets online for
            Shri Lakkavva Devi Temple celebrations and
            participate in spiritual events, cultural
            programs, and divine rituals.
          </p>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Festival Info */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Upcoming Temple Festivals
              </h2>

              <div className="space-y-5">

                {/* Festival Item */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                    <Sparkles size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Rathotsava
                    </h3>

                    <p className="text-gray-500">
                      Grand temple chariot festival celebration
                    </p>
                  </div>

                </div>

                {/* Festival Item */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Sparkles size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Deepotsava
                    </h3>

                    <p className="text-gray-500">
                      Festival of lights with temple decorations
                    </p>
                  </div>

                </div>

                {/* Festival Item */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Sparkles size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Navaratri
                    </h3>

                    <p className="text-gray-500">
                      Nine-day divine celebration of Goddess Devi
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Benefits */}
            <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-green-500">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Booking Benefits
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Fast and secure online booking
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Priority festival entry access
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Participate in temple celebrations easily
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Book Festival Tickets
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Festival Select */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Select Festival
                </label>

                <div className="relative">

                  <Sparkles
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <select
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none"
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

                </div>

              </div>

              {/* Ticket Count */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Number of Tickets
                </label>

                <div className="relative">

                  <Users
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="number"
                    min="1"
                    placeholder="Enter number of tickets"
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                    onChange={(e) =>
                      setTicket({
                        ...ticket,
                        tickets: e.target.value
                      })
                    }
                  />

                </div>

              </div>

              {/* Festival Date */}
              <div>

                <label className="block text-gray-700 font-medium mb-2">
                  Festival Date
                </label>

                <div className="relative">

                  <CalendarDays
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
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
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
              >

                <Ticket size={22} />

                Book Festival Tickets

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  )
}