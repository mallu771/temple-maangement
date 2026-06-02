// src/pages/TempleHistory.jsx

import Breadcrumbs from "../components/layout/Breadcrumbs"
import {
  Landmark,
  MapPin,
  Sparkles,
  Users,
  ScrollText,
  Mountain
} from "lucide-react"

function TempleHistory() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-sm border p-8 mt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Landmark className="text-orange-600" size={30} />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Shri Lakkavva Devi Temple
              </h1>

              <p className="text-gray-500 mt-1">
                Sacred History & Spiritual Heritage
              </p>
            </div>
          </div>

          <img
            src="../src/Images/maxresdefault.jpg"
            alt="Temple"
            className="w-full h-[350px] object-cover rounded-2xl mt-6"
          />
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <MapPin className="text-red-500 mb-3" size={28} />
            <h2 className="text-xl font-semibold mb-2">
              Location
            </h2>

            <p className="text-gray-600 leading-7">
              The temple is located nearly 2 kilometers from
              Katageri village in a beautiful hilly region.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <Users className="text-blue-500 mb-3" size={28} />
            <h2 className="text-xl font-semibold mb-2">
              Connected Villages
            </h2>

            <p className="text-gray-600 leading-7">
              Katageri, Nandagava, and Chikkatti villages
              together maintain the traditions and rituals
              of the temple.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <Sparkles className="text-yellow-500 mb-3" size={28} />
            <h2 className="text-xl font-semibold mb-2">
              Spiritual Importance
            </h2>

            <p className="text-gray-600 leading-7">
              Devotees worship Goddess Lakkavva Devi as
              the protector and guardian deity of the village.
            </p>
          </div>
        </div>

        {/* Main History Section */}
        <div className="bg-white rounded-3xl shadow-sm border p-8 mt-8">

          <div className="flex items-center gap-3 mb-6">
            <ScrollText className="text-orange-500" size={30} />

            <h2 className="text-3xl font-bold text-gray-900">
              Temple History
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-8 text-[17px]">

            <p>
              The village goddess is Shri Lakkavva Devi.
              The temple of Shri Lakkavva Devi is located
              about two kilometers away from Katageri village
              in a hilly area.
            </p>

            <p>
              The villagers worship Goddess Lakkavva Devi as
              their protector and guardian deity. The people
              strongly believe that the goddess protects and
              blesses them.
            </p>

            <p>
              The temple is believed to have been built many
              years ago and is associated with three villages:
              Katageri, Nandagava, and Chikkatti. Temple
              rituals and administration are connected with
              these villages.
            </p>

            <p>
              One unique tradition of the temple is that
              priests from all three villages perform the
              poojas together. Daily worship is conducted
              three times a day.
            </p>

            <p>
              Another special tradition is that three times
              every year, the goddess is ceremonially taken
              to the Krishna River for a sacred bath.
            </p>

            <p>
              The goddess’s Pallakki (palanquin) is kept in
              the village and carried in a grand procession
              during festivals and important occasions.
            </p>

            <p>
              Devotees believe in the miracles of the goddess.
              Childless couples visit the temple, pray for
              children, and later return to offer prayers
              after their wishes are fulfilled.
            </p>

          </div>
        </div>

        {/* Sacred Place */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 mt-8 text-white">

          <div className="flex items-center gap-3 mb-4">
            <Mountain size={32} />

            <h2 className="text-3xl font-bold">
              Aakasu Gunda
            </h2>
          </div>

          <p className="leading-8 text-lg">
            Near the temple, there is a sacred place called
            “Aakasu Gunda.” According to local belief,
            during a drought an elderly woman had taken
            cattle for grazing. When the cattle scratched
            the ground searching for water, a spring of
            water suddenly appeared.
          </p>

          <p className="leading-8 text-lg mt-4">
            Since then, water has continuously remained
            there and is used for the worship of
            Goddess Lakkavva Devi.
          </p>
        </div>

        {/* Festival Section */}
        <div className="bg-white rounded-3xl shadow-sm border p-8 mt-8 mb-10">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Festivals & Rituals
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-2xl font-semibold text-orange-700 mb-3">
                Mahashivaratri
              </h3>

              <p className="text-gray-700 leading-7">
                During Mahashivaratri, the goddess’s
                palanquin is taken in a grand procession
                from the village to the temple with
                devotion and celebration.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
              <h3 className="text-2xl font-semibold text-yellow-700 mb-3">
                Special Poojas
              </h3>

              <p className="text-gray-700 leading-7">
                On Mahashivaratri, special worship is
                performed 11 times in one day. Devotees
                exchange sacred leaves and blessings.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TempleHistory