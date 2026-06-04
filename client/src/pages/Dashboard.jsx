
import Sidebar from "../components/layout/Sidebar"
import Breadcrumbs from "../components/layout/Breadcrumbs"
import ProfileMenu from "../components/dashboard/ProfileMenu"
import {
  Users,
  IndianRupee,
  CalendarDays,
  Package,
  ShieldCheck,
  Ticket,
  Flower2,
  TrendingUp,
  BellRing,
  Sparkles,
  ArrowUpRight,
  Wallet,
  Activity,
  Star,
  UserCircle,
  Bell,
  ChevronRight,
  CircleDollarSign,
  Clock3,
   LogOut,
   ChevronDown,
  Settings,
  User,
  Moon,
} from "lucide-react"
import { useState } from "react"

const stats = [
  {
    title: "Total Donations",
    value: "₹ 2,45,000",
    growth: "+12%",
    icon: IndianRupee,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Today Bookings",
    value: "125",
    growth: "+8%",
    icon: Ticket,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Temple Members",
    value: "58",
    growth: "+4%",
    icon: Users,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Upcoming Events",
    value: "6",
    growth: "+2%",
    icon: CalendarDays,
    color: "from-purple-500 to-pink-500"
  }
]

const quickActions = [
  {
    title: "Book Pooja",
    icon: Sparkles,
    color: "bg-orange-500"
  },
  {
    title: "Add Donation",
    icon: CircleDollarSign,
    color: "bg-green-500"
  },
  {
    title: "Manage Inventory",
    icon: Package,
    color: "bg-blue-500"
  },
  {
    title: "Temple Events",
    icon: CalendarDays,
    color: "bg-purple-500"
  }
]

function Dashboard() {
  
  return (
    
    <div className="flex bg-[#f4f7fb] dark:bg-gray-950">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 min-h-screen">


        {/* PAGE CONTENT */}
        <div className="p-8 ">
       <div className="flex items-center justify-between mb-10">

  <Breadcrumbs />

<div className="flex items-center gap-5">

  {/* Notification */}
  <button className="relative bg-gray-100 hover:bg-gray-200 transition w-12 h-12 rounded-2xl flex items-center justify-center">

    <Bell size={22} />

    <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full" />

  </button>

  <ProfileMenu />

</div>
</div>
          {/* HERO SECTION */}
          <div className="relative overflow-hidden rounded-[40px] mb-10 shadow-2xl">

            {/* Background */}
            <img
              src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1800&auto=format&fit=crop"
              alt="Temple"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-orange-900/70" />

            {/* Blur Effects */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16 text-white">

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-white dark:bg-gray-900 dark:bg-gray-900/20 backdrop-blur-md p-4 rounded-3xl">
                  <Sparkles size={34} />
                </div>

                <div className="bg-orange-500/20 border border-orange-300/30 px-5 py-2 rounded-full backdrop-blur-md">
                  Temple Management System
                </div>

              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
                Shri Lakkavva Devi
                <span className="text-orange-300">
                  {" "}Temple Dashboard
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-3xl leading-9">
                Smart digital platform to manage poojas,
                donations, devotees, inventory, reports,
                festivals, and temple administration.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <button className="bg-orange-500 hover:bg-orange-600 transition px-7 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 flex items-center gap-3">

                  <Activity size={22} />

                  Live Dashboard

                </button>

                <button className="bg-gray-500 dark:bg-gray-900/10 hover:bg-gray-600 dark:hover:bg-gray-800 border border-white/20 backdrop-blur-md transition px-7 py-4 rounded-2xl font-semibold">
                  View Reports
                </button>

              </div>

            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 mb-10">

            {stats.map((stat, index) => {

              const Icon = stat.icon

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-[30px] p-7 shadow-sm hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-gray-100"
                >

                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-3xl`} />

                  <div className="flex items-center justify-between relative z-10">

                    <div>

                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        {stat.title}
                      </p>

                      <h2 className="text-4xl font-black text-gray-800 dark:text-white mt-3">
                        {stat.value}
                      </h2>

                      <div className="flex items-center gap-2 mt-5 text-green-600 font-semibold">
                        <ArrowUpRight size={18} />
                        {stat.growth}
                      </div>

                    </div>

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition`}>

                      <Icon size={30} />

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white dark:bg-gray-900 rounded-[35px] p-8 shadow-sm border border-gray-100 mb-10">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-3xl font-black text-gray-800 dark:text-white">
                  Quick Actions
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Frequently used temple operations
                </p>
              </div>

              <button className="text-orange-500 font-semibold flex items-center gap-2">
                View All
                <ChevronRight size={18} />
              </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {quickActions.map((action, index) => {

                const Icon = action.icon

                return (
                  <button
                    key={index}
                    className="group p-7 rounded-3xl border border-gray-100 hover:border-orange-200   hover:shadow-xl transition duration-500 text-left"
                  >

                    <div className={`w-16 h-16 rounded-2xl ${action.color} text-white flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition`}>

                      <Icon size={28} />

                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {action.title}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      Manage temple operations quickly
                    </p>

                  </button>
                )
              })}

            </div>

          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ACTIVITY */}
            <div className="bg-white dark:bg-gray-900 rounded-[35px] p-8 shadow-sm border border-gray-100 lg:col-span-2">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <h2 className="text-3xl font-black text-gray-800 dark:text-white">
                    Recent Activity
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Temple latest activities & updates
                  </p>
                </div>

                <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
                  <TrendingUp size={28} />
                </div>

              </div>

              <div className="space-y-6">

                {[1, 2, 3, 4].map((item) => (

                  <div
                    key={item}
                    className="flex items-center justify-between p-5 border border-gray-100 rounded-3xl hover:shadow-lg transition"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                        <BellRing size={24} />
                      </div>

                      <div>

                        <h3 className="font-bold text-gray-800 dark:text-white">
                          New Donation Received
                        </h3>

                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                          ₹ 5,000 donated by Ramesh
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">

                      <Clock3 size={16} />

                      <span>2 mins ago</span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* SECURITY */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[35px] p-8 shadow-2xl text-white overflow-hidden relative">

              <div className="absolute top-0 right-0 w-48 h-48 bg-white dark:bg-gray-900/10 rounded-full blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center justify-between mb-8">

                  <div>
                    <h2 className="text-3xl font-black">
                      Security
                    </h2>

                    <p className="text-indigo-100 mt-2">
                      System monitoring
                    </p>
                  </div>

                  <ShieldCheck size={34} />

                </div>

                <div className="space-y-5">

                  <div className="bg-white dark:bg-gray-900/10 backdrop-blur-md rounded-3xl p-5">
                    <p className="text-indigo-100">
                      Last Backup
                    </p>

                    <h3 className="text-2xl font-black mt-2">
                      Today 08:30 AM
                    </h3>
                  </div>

                  <div className="bg-white dark:bg-gray-900/10 backdrop-blur-md rounded-3xl p-5">
                    <p className="text-indigo-100">
                      Active Users
                    </p>

                    <h3 className="text-2xl font-black mt-2">
                      12 Users Online
                    </h3>
                  </div>

                  <div className="bg-white dark:bg-gray-900/10 backdrop-blur-md rounded-3xl p-5">
                    <p className="text-indigo-100">
                      System Status
                    </p>

                    <h3 className="text-2xl font-black mt-2 text-green-300">
                      Running Normally
                    </h3>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard

