// src/pages/UpcomingFestivals.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Sparkles,
  CalendarDays,
  MapPin,
  ArrowRight,
  PartyPopper,
  Clock3
} from "lucide-react"

export default function UpcomingFestivals() {

  const [festivals] = useState([
    {
      id: 1,
      name: "Rathotsava",
      date: "15 June 2026",
      location: "Main Temple",
      image: "/src/Images/rathotsava.jpg",
      description:
        "Grand temple chariot festival with devotional celebrations."
    },
    {
      id: 2,
      name: "Navaratri",
      date: "01 October 2026",
      location: "Temple Hall",
      image: "/src/Images/navaratri.jpg",
      description:
        "Nine-day spiritual celebration dedicated to Goddess Devi."
    },
    {
      id: 3,
      name: "Deepotsava",
      date: "12 November 2026",
      location: "Temple Ground",
      image: "/src/Images/deepotsava.jpg",
      description:
        "Festival of lights with temple decorations and poojas."
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">

            <PartyPopper size={38} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Upcoming Festivals
            </h1>

          </div>

          <p className="text-lg text-orange-100 max-w-3xl leading-8">
            Explore upcoming spiritual festivals,
            celebrations, temple rituals, and divine
            cultural events at Shri Lakkavva Devi Temple.
          </p>

        </div>

        {/* Festival Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {festivals.map((festival) => (
            <div
              key={festival.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
            >

              {/* Festival Image */}
              <div className="overflow-hidden relative">

                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Upcoming Event
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Festival Name */}
                <div className="flex items-center gap-2 mb-3 text-orange-500">

                  <Sparkles size={18} />

                  <span className="text-sm font-semibold">
                    Temple Festival
                  </span>

                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {festival.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-7 mb-5">
                  {festival.description}
                </p>

                {/* Date */}
                <div className="flex items-center gap-3 mb-4">

                  <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Festival Date
                    </p>

                    <h3 className="font-semibold text-gray-800">
                      {festival.date}
                    </h3>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-center gap-3 mb-6">

                  <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Festival Location
                    </p>

                    <h3 className="font-semibold text-gray-800">
                      {festival.location}
                    </h3>
                  </div>

                </div>

                {/* Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl">

                  View Details

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Notice */}
        <div className="mt-12 bg-white rounded-3xl shadow-md p-6 border-l-4 border-orange-500">

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Clock3 size={28} />
            </div>

            <div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Festival Information
              </h2>

              <p className="text-gray-600 leading-7">
                Festival timings and celebrations may change
                during special temple events. Devotees are
                requested to arrive early and participate
                in poojas and cultural programs peacefully.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}