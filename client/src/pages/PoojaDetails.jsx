// src/pages/PoojaDetails.jsx

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Sparkles,
  Clock3,
  User,
  Flower2
} from "lucide-react"

function PoojaDetails() {

  const poojas = [
    {
      name: "Morning Pooja",
      time: "7:00 AM",
      priest: "Sharma Guruji",
      description:
        "Daily morning prayers and offerings to Shri Lakkavva Devi."
    },
    {
      name: "Maha Mangala Aarti",
      time: "12:00 PM",
      priest: "Ramesh Guruji",
      description:
        "Special afternoon aarti with devotional songs and blessings."
    },
    {
      name: "Evening Deeparadhane",
      time: "6:30 PM",
      priest: "Suresh Guruji",
      description:
        "Sacred evening lamp worship performed with devotion."
    },
    {
      name: "Special Abhisheka",
      time: "8:00 AM",
      priest: "Mahesh Guruji",
      description:
        "Holy abhisheka ritual using sacred water and offerings."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={36} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Temple Pooja Details
            </h1>
          </div>

          <p className="text-lg text-orange-100 max-w-3xl leading-8">
            Explore the daily poojas, sacred rituals,
            and spiritual ceremonies performed at
            Shri Lakkavva Devi Temple.
          </p>

        </div>

        {/* Pooja Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {poojas.map((pooja, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group"
            >

              {/* Top Banner */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 text-white">

                <div className="flex items-center gap-3">

                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Flower2 size={28} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      {pooja.name}
                    </h2>

                    <p className="text-orange-100">
                      Sacred Temple Ritual
                    </p>
                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Time */}
                <div className="flex items-center gap-3 mb-4">

                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Pooja Time
                    </p>

                    <h3 className="text-lg font-bold text-gray-800">
                      {pooja.time}
                    </h3>
                  </div>

                </div>

                {/* Priest */}
                <div className="flex items-center gap-3 mb-5">

                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    <User size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Priest
                    </p>

                    <h3 className="text-lg font-bold text-gray-800">
                      {pooja.priest}
                    </h3>
                  </div>

                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7 mb-6">
                  {pooja.description}
                </p>

                {/* Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold transition">
                  View Pooja Details
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div className="mt-10 bg-white rounded-3xl shadow-md p-6 border-l-4 border-orange-500">

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Important Information
          </h2>

          <p className="text-gray-600 leading-7">
            Special poojas and festival rituals may have
            different timings during Mahashivaratri,
            Navaratri, and temple celebrations.
            Devotees are requested to arrive early
            for darshan and participation.
          </p>

        </div>

      </div>

    </div>
  )
}

export default PoojaDetails