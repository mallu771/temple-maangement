// src/pages/PushNotification.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  BellRing,
  Send,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  ShieldAlert,
  Megaphone
} from "lucide-react"

export default function PushNotification() {

  const [message, setMessage] = useState("")

  const sendNotification = () => {

    if (!message.trim()) return

    alert(`Push Notification Sent:\n${message}`)

    setMessage("")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-3 mb-4">

            <BellRing size={38} />

            <h1 className="text-4xl md:text-5xl font-bold">
              Push Notifications
            </h1>

          </div>

          <p className="text-lg text-blue-100 max-w-3xl leading-8">
            Send instant notifications and important temple
            updates to devotees regarding poojas, festivals,
            special events, announcements, and emergency alerts.
          </p>

        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Notification Info */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Notification Features
              </h2>

              <div className="space-y-5">

                {/* Feature */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Megaphone size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Instant Announcements
                    </h3>

                    <p className="text-gray-500">
                      Send updates instantly to devotees
                    </p>
                  </div>

                </div>

                {/* Feature */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Sparkles size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Festival Notifications
                    </h3>

                    <p className="text-gray-500">
                      Notify upcoming temple festivals
                    </p>
                  </div>

                </div>

                {/* Feature */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <ShieldAlert size={26} />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800">
                      Emergency Alerts
                    </h3>

                    <p className="text-gray-500">
                      Share urgent temple notices quickly
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-blue-500">

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
                    Real-time devotee communication
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
                    Quick announcement delivery
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send Notification
            </h2>

            {/* Message Box */}
            <div className="mb-6">

              <label className="block text-gray-700 font-medium mb-3">
                Notification Message
              </label>

              <div className="relative">

                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />

                <textarea
                  rows="6"
                  placeholder="Enter notification message..."
                  className="w-full border border-gray-300 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  value={message}
                  onChange={(e) =>
                    setMessage(e.target.value)
                  }
                />

              </div>

            </div>

            {/* Notification Preview */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">

              <h3 className="text-lg font-bold text-blue-700 mb-3">
                Notification Preview
              </h3>

              <p className="text-gray-700 leading-7">
                {message || "Your notification message preview will appear here..."}
              </p>

            </div>

            {/* Send Button */}
            <button
              onClick={sendNotification}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2"
            >

              <Send size={22} />

              Send Notification

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}