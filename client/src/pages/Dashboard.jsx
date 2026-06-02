import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Breadcrumbs from "../components/layout/Breadcrumbs"
import {
  Users,
  IndianRupee,
  CalendarDays,
  Bell,
  Package,
  ShieldCheck,
  BookOpen,
  Ticket,
  Flower2,
  TrendingUp
} from "lucide-react"
     
  const stats = [
    {
      title: "Total Donations",
      value: "₹ 2,45,000",
      icon: IndianRupee,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Today Bookings",
      value: "125",
      icon: Ticket,
      color: "bg-orange-100 text-orange-700"
    },
    {
      title: "Temple Members",
      value: "58",
      icon: Users,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Upcoming Events",
      value: "6",
      icon: CalendarDays,
      color: "bg-purple-100 text-purple-700"
    }
  ]

  const recentDonations = [
    {
      id: 1,
      name: "Ramesh",
      amount: 5000,
      status: "Success"
    },
    {
      id: 2,
      name: "Mahesh",
      amount: 2500,
      status: "Pending"
    },
    {
      id: 3,
      name: "Suresh",
      amount: 1000,
      status: "Success"
    }
  ]

  const events = [
    {
      id: 1,
      name: "Rathotsava",
      date: "15 June 2026"
    },
    {
      id: 2,
      name: "Deepotsava",
      date: "10 July 2026"
    },
    {
      id: 3,
      name: "Navaratri",
      date: "01 Oct 2026"
    }
  ]

  const inventory = [
    {
      item: "Flowers",
      stock: "120 KG"
    },
    {
      item: "Oil",
      stock: "60 Liters"
    },
    {
      item: "Prasada Rice",
      stock: "250 KG"
    }
  ]

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6">
          <Breadcrumbs />

    
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        {stats.map((stat, index) => {
          const Icon = stat.icon

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {stat.value}
                  </h2>
                </div>

                <div
                  className={`p-4 rounded-xl ${stat.color}`}
                >
                  <Icon size={28} />
                </div>

              </div>
            </div>
          )
        })}

      </div>

      {/* Middle Section */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        {/* Donations */}
        <div className="bg-white rounded-2xl shadow p-6 lg:col-span-2">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">
              Recent Donations
            </h2>

            <TrendingUp className="text-green-600" />
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">Donor</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {recentDonations.map((donation) => (
                <tr
                  key={donation.id}
                  className="border-b"
                >
                  <td className="py-4">
                    {donation.name}
                  </td>

                  <td className="py-4">
                    ₹ {donation.amount}
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        donation.status === "Success"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {donation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">
              Upcoming Festivals
            </h2>

            <CalendarDays className="text-orange-500" />
          </div>

          <div className="space-y-4">

            {events.map((event) => (
              <div
                key={event.id}
                className="border rounded-xl p-4"
              >
                <h3 className="font-semibold">
                  {event.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {event.date}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Inventory */}
        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">
              Inventory
            </h2>

            <Package className="text-blue-600" />
          </div>

          <div className="space-y-4">

            {inventory.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-3"
              >
                <div className="flex items-center gap-3">
                  <Flower2
                    size={18}
                    className="text-pink-500"
                  />

                  <span>{item.item}</span>
                </div>

                <span className="font-semibold">
                  {item.stock}
                </span>
              </div>
            ))}

          </div>

        </div>

        

           {/* Temple Gold Information */}
<div className="bg-white rounded-2xl shadow p-6">

  <div className="flex items-center justify-between mb-5">
    <h2 className="text-xl font-bold">
      Temple Gold Information
    </h2>

    <IndianRupee className="text-yellow-600" />
  </div>

  <div className="space-y-4">

    <div className="border rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="text-gray-500">
          Gold Ornaments
        </p>

        <h3 className="text-lg font-bold">
          12 Items
        </h3>
      </div>

      <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-semibold">
        2.5 KG
      </div>
    </div>

    <div className="border rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="text-gray-500">
          Silver Items
        </p>

        <h3 className="text-lg font-bold">
          28 Items
        </h3>
      </div>

      <div className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold">
        18 KG
      </div>
    </div>

    <div className="border rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="text-gray-500">
          Gold Donations
        </p>

        <h3 className="text-lg font-bold">
          This Month
        </h3>
      </div>

      <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-xl font-semibold">
        350 Grams
      </div>
    </div>

    <div className="border rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="text-gray-500">
          Locker Status
        </p>

        <h3 className="text-lg font-bold">
          Security Vault
        </h3>
      </div>

      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
        Secured
      </div>
    </div>

  </div>

</div>

        {/* Security */}
        <div className="bg-white rounded-2xl shadow p-6">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">
              Security Status
            </h2>

            <ShieldCheck className="text-green-600" />
          </div>

          <div className="space-y-4">

            <div className="border rounded-xl p-4">
              <p className="font-semibold">
                Last Backup
              </p>

              <p className="text-gray-500 text-sm">
                Today 08:30 AM
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="font-semibold">
                Active Users
              </p>

              <p className="text-gray-500 text-sm">
                12 Users Online
              </p>
            </div>

            <div className="border rounded-xl p-4">
              <p className="font-semibold">
                System Status
              </p>

              <p className="text-green-600 text-sm">
                Running Normally
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

          <div className="bg-white mt-6 rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Dashboard Overview
            </h2>

            <p className="text-gray-600">
              Welcome to your admin dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard