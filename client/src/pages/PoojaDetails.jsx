// src/pages/PoojaDetails.jsx

function PoojaDetails() {
  const poojas = [
    {
      name: "Morning Pooja",
      time: "7:00 AM",
      priest: "Sharma Guruji"
    },
    {
      name: "Maha Mangala Aarti",
      time: "12:00 PM",
      priest: "Ramesh Guruji"
    },
    {
      name: "Evening Deeparadhane",
      time: "6:30 PM",
      priest: "Suresh Guruji"
    },
    {
      name: "Special Abhisheka",
      time: "8:00 AM",
      priest: "Mahesh Guruji"
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Pooja Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {poojas.map((pooja, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-5 border"
          >
            <h2 className="text-xl font-semibold mb-3">
              {pooja.name}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">
                  Time:
                </span>{" "}
                {pooja.time}
              </p>

              <p>
                <span className="font-medium">
                  Priest:
                </span>{" "}
                {pooja.priest}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PoojaDetails