// src/pages/DonationItems.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  HandCoins,
  Gift,
  Plus,
  Trash2,
  Search,
  Users,
  PackageCheck,
  HeartHandshake
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function DonationItems() {

  // Donation Data
  const [items, setItems] = useState([
    {
      id: 1,
      donor: "Ravi",
      item: "Coconut",
      quantity: 50,
      category: "Pooja Items",
      status: "Received"
    },
    {
      id: 2,
      donor: "Mahesh",
      item: "Banana",
      quantity: 100,
      category: "Fruits",
      status: "Distributed"
    },
    {
      id: 3,
      donor: "Suresh",
      item: "Rice Bags",
      quantity: 25,
      category: "Annadanam",
      status: "Received"
    }
  ])

  // Form State
  const [form, setForm] = useState({
    donor: "",
    item: "",
    quantity: "",
    category: "",
    status: "Received"
  })

  // Add Donation
  const addDonation = () => {

    if (
      !form.donor ||
      !form.item ||
      !form.quantity ||
      !form.category
    ) {
      return
    }

    const newDonation = {
      id: items.length + 1,
      ...form
    }

    setItems([...items, newDonation])

    setForm({
      donor: "",
      item: "",
      quantity: "",
      category: "",
      status: "Received"
    })
  }

  // Delete Donation
  const deleteDonation = (id) => {

    const updatedItems =
      items.filter(
        (donation) => donation.id !== id
      )

    setItems(updatedItems)
  }

  // Table Columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 70
      },
      {
        accessorKey: "donor",
        header: "Donor Name"
      },
      {
        accessorKey: "item",
        header: "Donation Item"
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        Cell: ({ cell }) => (
          <span className="font-semibold text-green-600">
            {cell.getValue()}
          </span>
        )
      },
      {
        accessorKey: "category",
        header: "Category"
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => (
          <span
            className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${
              cell.getValue() === "Received"
                ? "bg-green-500"
                : "bg-orange-500"
            }`}
          >
            {cell.getValue()}
          </span>
        )
      },
      {
        header: "Actions",
        Cell: ({ row }) => (
          <button
            onClick={() =>
              deleteDonation(row.original.id)
            }
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )
      }
    ],
    [items]
  )

  // Material Table
  const table = useMaterialReactTable({
    columns,
    data: items,

    enableSorting: true,
    enablePagination: true,
    enableGlobalFilter: true,
    enableColumnFilters: true,
    enableHiding: true,
    enableColumnOrdering: true,
    enableColumnDragging: true,
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
      placeholder:
        "Search donation items...",
      variant: "outlined",
      size: "small"
    }
  })

  return (
    <div className="min-h-screen bg-green-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4">

            <HandCoins size={42} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Donation Items
              </h1>

              <p className="text-green-100 mt-2 text-lg">
                Manage temple donation items,
                donor records, quantity tracking,
                and distribution management.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Donations */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <Gift size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Donations
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {items.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Total Donors */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Users size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Donors
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    new Set(
                      items.map(
                        (item) => item.donor
                      )
                    ).size
                  }
                </h2>

              </div>

            </div>

          </div>

          {/* Received Donations */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <PackageCheck size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Received Items
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    items.filter(
                      (item) =>
                        item.status ===
                        "Received"
                    ).length
                  }
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Add Donation Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <HeartHandshake
              className="text-green-600"
              size={30}
            />

            <h2 className="text-3xl font-bold text-gray-800">
              Add Donation Item
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* Donor Name */}
            <input
              type="text"
              placeholder="Donor Name"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.donor}
              onChange={(e) =>
                setForm({
                  ...form,
                  donor: e.target.value
                })
              }
            />

            {/* Item */}
            <input
              type="text"
              placeholder="Donation Item"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.item}
              onChange={(e) =>
                setForm({
                  ...form,
                  item: e.target.value
                })
              }
            />

            {/* Quantity */}
            <input
              type="number"
              placeholder="Quantity"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.quantity}
              onChange={(e) =>
                setForm({
                  ...form,
                  quantity: e.target.value
                })
              }
            />

            {/* Category */}
            <input
              type="text"
              placeholder="Category"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value
                })
              }
            />

            {/* Add Button */}
            <button
              onClick={addDonation}
              className="bg-green-600 hover:bg-green-700 text-white rounded-2xl px-5 py-3 flex items-center justify-center gap-2 font-semibold transition"
            >

              <Plus size={20} />

              Add Donation

            </button>

          </div>

        </div>

        {/* Donation Table */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Donation Records
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, sort,
                paginate, reorder columns,
                and manage donation inventory.
              </p>

            </div>

            <div className="hidden md:flex items-center gap-2 text-gray-400">

              <Search size={20} />

              <span>
                Smart Donation Search
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