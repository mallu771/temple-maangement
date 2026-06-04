import { useState, useEffect } from "react"

import Sidebar from "../components/layout/Sidebar"
import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Moon,
  Sun,
  Save,
  Bell,
  Globe
} from "lucide-react"

function Settings() {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

  }, [darkMode])

  return (
    <div className="flex dark:bg-gray-950">

      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-100 dark:bg-gray-950">

        <div className="p-6">

          <Breadcrumbs />

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Settings
            </h2>

            <div className="space-y-6">

              <div>
                <label className="block mb-2 font-medium dark:text-gray-200">
                  Full Name
                </label>

                <input
                  type="text"
                  defaultValue="Temple Admin"
                  className="w-full border rounded-xl px-4 py-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium dark:text-gray-200">
                  Email
                </label>

                <input
                  type="email"
                  defaultValue="admin@temple.com"
                  className="w-full border rounded-xl px-4 py-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div className="flex items-center justify-between border dark:border-gray-700 rounded-2xl p-5">

                <div className="flex items-center gap-4">

                  {darkMode ? (
                    <Moon className="text-indigo-500" />
                  ) : (
                    <Sun className="text-yellow-500" />
                  )}

                  <div>
                    <h3 className="font-semibold dark:text-white">
                      Dark Mode
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Enable dark theme
                    </p>
                  </div>

                </div>

                <button
                  onClick={() =>
                    setDarkMode(!darkMode)
                  }
                  className={`w-14 h-7 rounded-full flex items-center px-1 transition ${
                    darkMode
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition ${
                      darkMode
                        ? "translate-x-7"
                        : ""
                    }`}
                  />
                </button>

              </div>

              <div className="border dark:border-gray-700 rounded-2xl p-5 flex items-center gap-4">

                <Bell className="text-orange-500" />

                <div>
                  <h3 className="font-semibold dark:text-white">
                    Notifications
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Receive temple alerts
                  </p>
                </div>

              </div>

              <div className="border dark:border-gray-700 rounded-2xl p-5 flex items-center gap-4">

                <Globe className="text-blue-500" />

                <div>
                  <h3 className="font-semibold dark:text-white">
                    Language
                  </h3>

                  <p className="text-gray-500 text-sm">
                    English / Kannada
                  </p>
                </div>

              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">

                <Save size={18} />

                Save Changes

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Settings