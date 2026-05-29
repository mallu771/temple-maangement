// src/pages/DailyTimings.jsx

function DailyTimings() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Daily Timings
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span>Morning Opening</span>
          <span>6:00 AM</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>Morning Pooja</span>
          <span>7:30 AM</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>Afternoon Closing</span>
          <span>12:30 PM</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span>Evening Opening</span>
          <span>5:00 PM</span>
        </div>

        <div className="flex justify-between">
          <span>Night Closing</span>
          <span>9:00 PM</span>
        </div>
      </div>
    </div>
  )
}

export default DailyTimings