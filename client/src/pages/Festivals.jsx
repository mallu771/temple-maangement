// src/pages/Festivals.jsx

import Breadcrumbs from "../components/layout/Breadcrumbs"
import {
  Sparkles,
  CalendarDays,
  Star
} from "lucide-react"

function Festivals() {

  const festivals = [
    {
      name: "Maha Shivaratri",
      description:
        "Special poojas, night celebrations, and grand palanquin procession of Shri Lakkavva Devi.",
      image: "/src/Images/shivaratri.jpg"
    },
    {
      name: "Ugadi",
      description:
        "Traditional New Year festival celebrated with prayers and cultural programs.",
      image: "/src/Images/ugadi.jpg"
    },
    {
      name: "Deepavali",
      description:
        "Festival of lights celebrated with temple decorations and devotional activities.",
      image: "/src/Images/deepavali.jpg"
    },
    {
      name: "Navaratri",
      description:
        "Nine-day festival dedicated to Goddess Devi with special rituals and poojas.",
      image: "/src/Images/navaratri.jpg"
    },
    {
      name: "Hanuman Jayanti",
      description:
        "Devotional celebrations and special offerings dedicated to Lord Hanuman.",
      image: "/src/Images/hanuman.jpg"
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
              Temple Festivals
            </h1>
          </div>

          <p className="text-lg text-orange-100 max-w-3xl leading-8">
            Experience the spiritual celebrations, traditions,
            and cultural festivals of Shri Lakkavva Devi Temple.
            Devotees from nearby villages gather together with
            devotion and joy during these sacred occasions.
          </p>

        </div>

        {/* Festival Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {festivals.map((festival, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
            >

              {/* Festival Image */}
              <div className="overflow-hidden">
                <img
                  src={festival.image}
                  alt={festival.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center gap-2 text-orange-500 mb-3">
                  <CalendarDays size={18} />
                  <span className="text-sm font-semibold">
                    Temple Festival
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {festival.name}
                </h2>

                <p className="text-gray-600 leading-7 mb-5">
                  {festival.description}
                </p>

                {/* Button */}
                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl transition">
                  <Star size={16} />
                  View Celebration
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Festivals