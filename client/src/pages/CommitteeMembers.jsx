// src/pages/CommitteeMembers.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Crown,
  Users,
  Phone,
  ShieldCheck,
  Search
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function CommitteeMembers() {

  const [members] = useState([
    {
      id: 1,
      name: "Ramesh",
      role: "President",
      mobile: "9876543210",
      village: "Katageri"
    },
    {
      id: 2,
      name: "Suresh",
      role: "Secretary",
      mobile: "9876500000",
      village: "Nandagava"
    },
    {
      id: 3,
      name: "Mahesh",
      role: "Treasurer",
      mobile: "9988776655",
      village: "Chikkatti"
    },
    {
      id: 4,
      name: "Ganesh",
      role: "Member",
      mobile: "9123456780",
      village: "Katageri"
    },
    {
      id: 5,
      name: "Shivappa",
      role: "Volunteer",
      mobile: "9011223344",
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
        header: "Member Name"
      },
      {
        accessorKey: "role",
        header: "Role"
      },
      {
        accessorKey: "mobile",
        header: "Mobile Number"
      },
      {
        accessorKey: "village",
        header: "Village"
      }
    ],
    []
  )

  // Material React Table
  const table = useMaterialReactTable({
    columns,
    data: members,

    enableColumnOrdering: true,
    enableColumnDragging: true,
    enableColumnFilters: true,
    enableSorting: true,
    enablePagination: true,
    enableHiding: true,
    enableDensityToggle: true,
    enableFullScreenToggle: true,
    enableGlobalFilter: true,

    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0
      },
      showGlobalFilter: true
    },

    muiSearchTextFieldProps: {
      placeholder: "Search committee members...",
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
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4 mb-4">

            <Users size={40} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Temple Committee Members
              </h1>

              <p className="text-orange-100 mt-2 text-lg">
                Manage temple committee members,
                roles, and responsibilities efficiently.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Card */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Users size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Members
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {members.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">
                <Crown size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Leadership Roles
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  3
                </h2>

              </div>

            </div>

          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Active Members
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  5
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Committee Member List
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, sort, hide columns,
                reorder columns, and paginate data easily.
              </p>

            </div>

            {/* Search Icon */}
            <div className="hidden md:flex items-center gap-2 text-gray-400">

              <Search size={20} />

              <span>
                Advanced Search Enabled
              </span>

            </div>

          </div>

          {/* Data Grid */}
          <MaterialReactTable table={table} />

        </div>

      </div>

    </div>
  )
}