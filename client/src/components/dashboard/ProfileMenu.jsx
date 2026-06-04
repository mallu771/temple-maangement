// src/components/dashboard/ProfileMenu.jsx

import { useState, useEffect } from "react"

import {
  User,
  Settings,
  ShieldCheck,
  Moon,
  Sun,
  LogOut,
  ChevronDown
} from "lucide-react"

export default function ProfileMenu() {

  const [open, setOpen] = useState(false)

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

  }, [darkMode])

  const handleLogout = () => {

    localStorage.removeItem("token")

    window.location.href = "/login"
  }

  return (
    <div className="relative">

      {/* PROFILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-2xl shadow-sm hover:shadow-lg transition"
      >

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-11 h-11 rounded-full object-cover"
        />

        <div className="hidden md:block text-left">

          <h3 className="font-bold text-gray-800 dark:text-white">
            Admin
          </h3>

          <p className="text-sm text-gray-500">
            Temple Manager
          </p>

        </div>

        <ChevronDown
          size={18}
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>

      {/* DROPDOWN */}
      {open && (

        <div className="absolute right-0 mt-4 w-72 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50">

          {/* TOP */}
          <div className="p-5 border-b border-gray-100 dark:border-gray-700">

            <div className="flex items-center gap-4">

              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-14 h-14 rounded-full"
              />

              <div>

                <h2 className="font-bold text-lg text-gray-800 dark:text-white">
                  Mallikarjun
                </h2>

                <p className="text-sm text-gray-500">
                  Temple Admin
                </p>

              </div>

            </div>

          </div>

          {/* MENU */}
          <div className="p-3 space-y-2">

            <a
              href="/profile"
              className="flex items-center gap-3 p-4 rounded-2xl hover:bg-orange-50 dark:hover:bg-gray-800 transition"
            >

              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <User size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  My Profile
                </h3>

                <p className="text-sm text-gray-500">
                  Manage account profile
                </p>
              </div>

            </a>

            <a
              href="/settings"
              className="flex items-center gap-3 p-4 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >

              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Settings size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Settings
                </h3>

                <p className="text-sm text-gray-500">
                  App preferences
                </p>
              </div>

            </a>

            <a
              href="/security"
              className="flex items-center gap-3 p-4 rounded-2xl hover:bg-green-50 dark:hover:bg-gray-800 transition"
            >

              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Security
                </h3>

                <p className="text-sm text-gray-500">
                  Password & authentication
                </p>
              </div>

            </a>

            {/* DARK MODE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">

                  {darkMode ? (
                    <Sun size={20} />
                  ) : (
                    <Moon size={20} />
                  )}

                </div>

                <div className="text-left">

                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Dark Mode
                  </h3>

                  <p className="text-sm text-gray-500">
                    Change dashboard theme
                  </p>

                </div>

              </div>

              <div
                className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
                  darkMode
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >

                <div
                  className={`w-4 h-4 rounded-full bg-white transition ${
                    darkMode
                      ? "translate-x-6"
                      : ""
                  }`}
                />

              </div>

            </button>

          </div>

          {/* LOGOUT */}
          <div className="p-3 border-t border-gray-100 dark:border-gray-700">

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition"
            >

              <LogOut size={20} />

              Logout

            </button>

          </div>

        </div>

      )}

    </div>
  )
}