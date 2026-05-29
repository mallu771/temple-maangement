// src/pages/Festivals.jsx

function Festivals() {
  const festivals = [
    "Maha Shivaratri",
    "Ugadi",
    "Deepavali",
    "Navaratri",
    "Hanuman Jayanti"
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Festivals</h1>

      <div className="space-y-3">
        {festivals.map((festival, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow"
          >
            {festival}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Festivals