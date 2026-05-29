import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Breadcrumbs from "../components/layout/Breadcrumbs"

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6">
          <Breadcrumbs />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-gray-500 text-sm">
                Total Users
              </h2>

              <h1 className="text-3xl font-bold mt-2">
                1,250
              </h1>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-gray-500 text-sm">
                Revenue
              </h2>

              <h1 className="text-3xl font-bold mt-2">
                $12,500
              </h1>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-gray-500 text-sm">
                Orders
              </h2>

              <h1 className="text-3xl font-bold mt-2">
                320
              </h1>
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