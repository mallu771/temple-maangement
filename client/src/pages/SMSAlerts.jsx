// src/pages/SMSAlerts.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Smartphone,
  Send,
  MessageSquare,
  BellRing,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from "lucide-react"

export default function SMSAlerts() {

  const [mobile, setMobile] = useState("")
  const [message, setMessage] = useState("")

  const sendSMS = () => {

    if (!mobile || !message) return

    alert(`SMS Sent to ${mobile}`)

    setMobile("")
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">

            <BellRing size={38} />

            <h1 className="text-4xl md:text-5xl font-bold">
              SMS Alerts
            </h1>

          </div>

          <p className="text-lg text-green-100 max-w-3xl leading-8">
            Send important SMS alerts and updates to devotees
            regarding temple events, poojas, festival timings,
            emergency notices, and announcements instantly.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Features Card */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                SMS Notification Features
              </h2>

              <div className="space-y-5">

                {/* Feature */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                    <Smartphone size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Instant SMS Delivery
                    </h3>

                    <p className="text-gray-500">
                      Send temple updates quickly to devotees
                    </p>
                  </div>

                </div>

                {/* Feature */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Sparkles size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Festival Announcements
                    </h3>

                    <p className="text-gray-500">
                      Share pooja and festival reminders
                    </p>
                  </div>

                </div>

                {/* Feature */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
                    <ShieldCheck size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Secure Communication
                    </h3>

                    <p className="text-gray-500">
                      Trusted SMS communication system
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Benefits */}
            <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-green-500">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Benefits
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Fast communication with devotees
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Festival & pooja reminders
                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <p className="text-gray-600">
                    Important temple alerts anytime
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send SMS Alert
            </h2>

            {/* Mobile Number */}
            <div className="mb-6">

              <label className="block text-gray-700 font-medium mb-3">
                Mobile Number
              </label>

              <div className="relative">

                <Smartphone
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value)
                  }
                />

              </div>

            </div>

            {/* SMS Message */}
            <div className="mb-6">

              <label className="block text-gray-700 font-medium mb-3">
                SMS Message
              </label>

              <div className="relative">

                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <textarea
                  rows="6"
                  placeholder="Enter SMS message..."
                  className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                />

              </div>

            </div>

            {/* SMS Preview */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">

              <h3 className="text-lg font-bold text-green-700 mb-3">
                SMS Preview
              </h3>

              <p className="text-gray-700 leading-7">
                {message || "Your SMS preview will appear here..."}
              </p>

            </div>

            {/* Send Button */}
            <button
              onClick={sendSMS}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
            >

              <Send size={22} />

              Send SMS Alert

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}