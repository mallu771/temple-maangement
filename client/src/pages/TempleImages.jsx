// src/pages/TempleImages.jsx

import Breadcrumbs from "../components/layout/Breadcrumbs"
import { Camera, ImageIcon } from "lucide-react"

const templeImages = [
  {
    id: 1,
    image: "/src/Images/laxmi1.jfif",
    title: "Shri Lakkavva Devi Temple",
    description: "Front view of the temple"
  },
  {
    id: 2,
    image: "/src/Images/laxmi2.jfif",
    title: "Temple Festival",
    description: "Devotees celebrating festival"
  },
  {
    id: 3,
    image: "/src/Images/laxmi3.jfif",
    title: "Temple Entrance",
    description: "Beautiful entrance view"
  }
]

function TempleImages() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 mb-8 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Camera size={32} />
            <h1 className="text-4xl font-bold">
              Temple Images Gallery
            </h1>
          </div>

          <p className="text-lg text-orange-100 max-w-3xl">
            Explore the divine beauty of Shri Lakkavva Devi Temple,
            festivals, rituals, and sacred places through these images.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {templeImages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-orange-500">
                  <ImageIcon size={18} />
                  <span className="text-sm font-medium">
                    Temple Gallery
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-6">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default TempleImages