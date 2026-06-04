import {
  Bell,
  ChevronDown,
  UserCircle,
  User,
  Settings ,
  ShieldCheck ,
  Moon ,
  LogOut 
} from "lucide-react"
import { useState } from "react"

function Header() {
  const [profileOpen, setProfileOpen] =useState(false)
  return (
    
 <div className="flex items-center gap-5">

              {/* Notification */}
              <button className="relative bg-gray-100 hover:bg-gray-200 transition w-12 h-12 rounded-2xl flex items-center justify-center">

                <Bell size={22} />

                <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full" />

              </button>

{/* PROFILE MENU */}
<div className="relative">

  <button
    onClick={() =>
      setProfileOpen(!profileOpen)
    }
    className="flex items-center gap-4 bg-white hover:shadow-xl transition duration-300 px-4 py-2 rounded-2xl border border-gray-100"
  >

    <img
      src="https://i.pravatar.cc/100"
      alt="profile"
      className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
    />

    <div className="hidden md:block text-left">
      <h3 className="font-bold text-gray-800">
        Admin
      </h3>

      <p className="text-sm text-gray-500">
        Temple Administrator
      </p>
    </div>

    <ChevronDown
      size={20}
      className={`transition duration-300 ${
        profileOpen
          ? "rotate-180"
          : ""
      }`}
    />

  </button>

  {/* DROPDOWN */}
  {profileOpen && (

    <div className="absolute right-0 mt-4 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300">

      {/* TOP PROFILE */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">

        <div className="flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-16 h-16 rounded-full border-4 border-white/40"
          />

          <div>
            <h2 className="text-xl font-bold">
              Mallikarjun
            </h2>

            <p className="text-orange-100">
              Super Admin
            </p>
          </div>

        </div>

      </div>

      {/* MENU ITEMS */}
      <div className="p-4 space-y-2">

        {/* Profile */}
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-100 transition text-left">

          <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <User size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              My Profile
            </h3>

            <p className="text-sm text-gray-500">
              View profile details
            </p>
          </div>

        </button>

        {/* Settings */}
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-100 transition text-left">

          <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <Settings size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Settings
            </h3>

            <p className="text-sm text-gray-500">
              Dashboard preferences
            </p>
          </div>

        </button>

        {/* Security */}
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-100 transition text-left">

          <div className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Security
            </h3>

            <p className="text-sm text-gray-500">
              Password & access
            </p>
          </div>

        </button>

        {/* Dark Mode */}
        <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-100 transition text-left">

          <div className="w-11 h-11 rounded-xl bg-gray-200 text-gray-700 flex items-center justify-center">
            <Moon size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Dark Mode
            </h3>

            <p className="text-sm text-gray-500">
              Switch appearance
            </p>
          </div>

        </button>

      </div>

      {/* FOOTER */}
      <div className="border-t border-gray-100 p-4">

        <button
          onClick={() => {

            localStorage.removeItem("token")

            window.location.href =
              "/login"
          }}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold transition duration-300 flex items-center justify-center gap-3"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </div>

  )}

</div>
            </div>

  )
}

export default Header