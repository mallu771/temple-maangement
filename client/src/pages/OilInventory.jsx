// src/pages/OilInventory.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Droplets,
  Plus,
  Trash2,
  Search,
  Package,
  ShieldCheck,
  Warehouse
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function OilInventory() {

  // Oil Inventory Data
  const [oilStock, setOilStock] = useState([
    {
      id: 1,
      type: "Sesame Oil",
      quantity: 50,
      unit: "Liters",
      supplier: "Temple Store",
      status: "Available"
    },
    {
      id: 2,
      type: "Ghee",
      quantity: 20,
      unit: "Liters",
      supplier: "Local Vendor",
      status: "Low Stock"
    },
    {
      id: 3,
      type: "Coconut Oil",
      quantity: 35,
      unit: "Liters",
      supplier: "Devotee Donation",
      status: "Available"
    }
  ])

  // Form State
  const [form, setForm] = useState({
    type: "",
    quantity: "",
    unit: "Liters",
    supplier: "",
    status: "Available"
  })

  // Add Oil Stock
  const addOilStock = () => {

    if (
      !form.type ||
      !form.quantity ||
      !form.supplier
    ) {
      return
    }

    const newStock = {
      id: oilStock.length + 1,
      ...form
    }

    setOilStock([...oilStock, newStock])

    setForm({
      type: "",
      quantity: "",
      unit: "Liters",
      supplier: "",
      status: "Available"
    })
  }

  // Delete Oil Stock
  const deleteOilStock = (id) => {

    const updatedStock =
      oilStock.filter(
        (oil) => oil.id !== id
      )

    setOilStock(updatedStock)
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
        accessorKey: "type",
        header: "Oil Type"
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        Cell: ({ row }) => (
          <span className="font-semibold text-orange-600">
            {row.original.quantity}{" "}
            {row.original.unit}
          </span>
        )
      },
      {
        accessorKey: "supplier",
        header: "Supplier"
      },
      {
        accessorKey: "status",
        header: "Stock Status",
        Cell: ({ cell }) => (
          <span
            className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${
              cell.getValue() === "Available"
                ? "bg-green-500"
                : "bg-red-500"
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
              deleteOilStock(row.original.id)
            }
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )
      }
    ],
    [oilStock]
  )

  // Material React Table
  const table = useMaterialReactTable({
    columns,
    data: oilStock,

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
      placeholder: "Search oil inventory...",
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
        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4">

            <Droplets size={42} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Oil Inventory Management
              </h1>

              <p className="text-orange-100 mt-2 text-lg">
                Manage temple oil stock, ghee,
                suppliers, and inventory records efficiently.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Items */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Warehouse size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Inventory Items
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {oilStock.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Available Stock */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Available Stock
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    oilStock.filter(
                      (oil) =>
                        oil.status === "Available"
                    ).length
                  }
                </h2>

              </div>

            </div>

          </div>

          {/* Total Quantity */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <Package size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Liters
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    oilStock.reduce(
                      (acc, item) =>
                        acc + Number(item.quantity),
                      0
                    )
                  }{" "}
                  L
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Add Inventory Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <Droplets
              className="text-orange-600"
              size={30}
            />

            <h2 className="text-3xl font-bold text-gray-800">
              Add Oil Stock
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* Oil Type */}
            <input
              type="text"
              placeholder="Oil Type"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value
                })
              }
            />

            {/* Quantity */}
            <input
              type="number"
              placeholder="Quantity"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.quantity}
              onChange={(e) =>
                setForm({
                  ...form,
                  quantity: e.target.value
                })
              }
            />

            {/* Supplier */}
            <input
              type="text"
              placeholder="Supplier"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.supplier}
              onChange={(e) =>
                setForm({
                  ...form,
                  supplier: e.target.value
                })
              }
            />

            {/* Status */}
            <select
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value
                })
              }
            >
              <option value="Available">
                Available
              </option>

              <option value="Low Stock">
                Low Stock
              </option>
            </select>

            {/* Add Button */}
            <button
              onClick={addOilStock}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-5 py-3 flex items-center justify-center gap-2 font-semibold transition"
            >

              <Plus size={20} />

              Add Stock

            </button>

          </div>

        </div>

        {/* Data Grid Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Oil Inventory Records
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, paginate,
                reorder columns, and manage temple oil inventory.
              </p>

            </div>

            <div className="hidden md:flex items-center gap-2 text-gray-400">

              <Search size={20} />

              <span>
                Advanced Inventory Search
              </span>

            </div>

          </div>

          {/* Material Table */}
          <MaterialReactTable table={table} />

        </div>

      </div>

    </div>
  )
}