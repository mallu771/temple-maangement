// src/pages/DailyTimings.jsx

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Clock3,
  Sunrise,
  Sun,
  Sunset,
  MoonStar
} from "lucide-react"

function DailyTimings() {

  const timings = [
    {
      title: "Morning Opening",
      time: "6:00 AM",
      icon: <Sunrise size={24} />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Morning Pooja",
      time: "7:30 AM",
      icon: <Sun size={24} />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Afternoon Closing",
      time: "12:30 PM",
      icon: <Sun size={24} />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Evening Opening",
      time: "5:00 PM",
      icon: <Sunset size={24} />,
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Night Closing",
      time: "9:00 PM",
      icon: <MoonStar size={24} />,
      color: "bg-indigo-100 text-indigo-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">
            <Clock3 size={38} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Temple Daily Timings
            </h1>
          </div>

          <p className="text-lg text-orange-100 max-w-3xl leading-8">
            Check the daily opening hours, pooja schedules,
            and temple timings of Shri Lakkavva Devi Temple.
            Devotees are welcome to visit and participate
            in the sacred rituals.
          </p>

        </div>

        {/* Timings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {timings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
            >

              <div className="flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-4">

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Temple Schedule
                    </p>
                  </div>

                </div>

                {/* Right */}
                <div>
                  <span className="text-2xl font-bold text-orange-500">
                    {item.time}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Important Notice */}
        <div className="mt-10 bg-white rounded-3xl shadow-md p-6 border-l-4 border-orange-500">

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Important Note
          </h2>

          <p className="text-gray-600 leading-7">
            Temple timings may vary during festivals,
            special poojas, and religious events.
            Devotees are requested to arrive early
            during Mahashivaratri and Navaratri celebrations.
          </p>

        </div>

      </div>

    </div>
  )
}

export default DailyTimings