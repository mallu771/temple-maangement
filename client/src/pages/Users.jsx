import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Breadcrumbs from "../components/layout/Breadcrumbs"

import DataTable from "../components/datatable/DataTable"
import { columns } from "../components/datatable/columns"

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin"
  },
  {
    id: 2,
    name: "David",
    email: "david@gmail.com",
    role: "User"
  },
  {
    id: 3,
    name: "Smith",
    email: "smith@gmail.com",
    role: "Manager"
  }
]

function Users() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-6">
          <Breadcrumbs />

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-semibold">
                Users List
              </h2>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                Add User
              </button>
            </div>

            <DataTable
              columns={columns}
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users