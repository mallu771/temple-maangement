// src/pages/VolunteerTracking.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Users,
  ShieldCheck,
  Activity,
  Search,
  HeartHandshake
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function VolunteerTracking() {

  const [volunteers] = useState([
    {
      id: 1,
      name: "Mahesh",
      service: "Annadanam",
      status: "Active",
      mobile: "9876543210",
      village: "Katageri"
    },
    {
      id: 2,
      name: "Kiran",
      service: "Parking",
      status: "Inactive",
      mobile: "9988776655",
      village: "Nandagava"
    },
    {
      id: 3,
      name: "Ravi",
      service: "Temple Cleaning",
      status: "Active",
      mobile: "9123456789",
      village: "Chikkatti"
    },
    {
      id: 4,
      name: "Shivu",
      service: "Security",
      status: "Active",
      mobile: "9011223344",
      village: "Katageri"
    },
    {
      id: 5,
      name: "Ganesh",
      service: "Food Distribution",
      status: "Inactive",
      mobile: "9876500000",
      village: "Nandagava"
    }
  ])

  // Table Columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 80
      },
      {
        accessorKey: "name",
        header: "Volunteer Name"
      },
      {
        accessorKey: "service",
        header: "Service Area"
      },
      {
        accessorKey: "mobile",
        header: "Mobile Number"
      },
      {
        accessorKey: "village",
        header: "Village"
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => (
          <span
            className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${
              cell.getValue() === "Active"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {cell.getValue()}
          </span>
        )
      }
    ],
    []
  )

  // Data Grid
  const table = useMaterialReactTable({
    columns,
    data: volunteers,

    enableSorting: true,
    enablePagination: true,
    enableColumnOrdering: true,
    enableColumnDragging: true,
    enableColumnFilters: true,
    enableGlobalFilter: true,
    enableHiding: true,
    enableDensityToggle: true,
    enableFullScreenToggle: true,

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5
      },
      showGlobalFilter: true
    },

    muiSearchTextFieldProps: {
      placeholder: "Search volunteers...",
      variant: "outlined",
      size: "small"
    }
  })

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4 mb-4">

            <HeartHandshake size={42} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Volunteer Tracking
              </h1>

              <p className="text-green-100 mt-2 text-lg">
                Track volunteer activities, services,
                status, and temple support management.
              </p>

            </div>

          </div>

        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Volunteers */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <Users size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Volunteers
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {volunteers.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Active Volunteers */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Active Volunteers
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    volunteers.filter(
                      (v) => v.status === "Active"
                    ).length
                  }
                </h2>

              </div>

            </div>

          </div>

          {/* Services */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
                <Activity size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Service Areas
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  5
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Data Grid Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Volunteer Management
              </h2>

              <p className="text-gray-500 mt-2">
                Search, sort, paginate, filter,
                hide columns, and reorder volunteer data easily.
              </p>

            </div>

            <div className="hidden md:flex items-center gap-2 text-gray-400">

              <Search size={20} />

              <span>
                Advanced Search Enabled
              </span>

            </div>

          </div>

          {/* Data Table */}
          <MaterialReactTable table={table} />

        </div>

      </div>

    </div>
  )
}