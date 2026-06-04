// src/pages/FlowerInventory.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Flower2,
  Plus,
  Trash2,
  Search,
  Package,
  Warehouse,
  ShieldCheck
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function FlowerInventory() {

  // Flower Inventory Data
  const [flowers, setFlowers] = useState([
    {
      id: 1,
      name: "Jasmine",
      quantity: 10,
      unit: "KG",
      supplier: "Temple Garden",
      freshness: "Fresh"
    },
    {
      id: 2,
      name: "Rose",
      quantity: 15,
      unit: "KG",
      supplier: "Local Vendor",
      freshness: "Fresh"
    },
    {
      id: 3,
      name: "Marigold",
      quantity: 8,
      unit: "KG",
      supplier: "Devotee Donation",
      freshness: "Limited"
    }
  ])

  // Form State
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    unit: "KG",
    supplier: "",
    freshness: "Fresh"
  })

  // Add Flower
  const addFlower = () => {

    if (
      !form.name ||
      !form.quantity ||
      !form.supplier
    ) {
      return
    }

    const newFlower = {
      id: flowers.length + 1,
      ...form
    }

    setFlowers([...flowers, newFlower])

    setForm({
      name: "",
      quantity: "",
      unit: "KG",
      supplier: "",
      freshness: "Fresh"
    })
  }

  // Delete Flower
  const deleteFlower = (id) => {

    const updatedFlowers =
      flowers.filter(
        (flower) => flower.id !== id
      )

    setFlowers(updatedFlowers)
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
        accessorKey: "name",
        header: "Flower Name"
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        Cell: ({ row }) => (
          <span className="font-semibold text-pink-600">
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
        accessorKey: "freshness",
        header: "Freshness",
        Cell: ({ cell }) => (
          <span
            className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${
              cell.getValue() === "Fresh"
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
              deleteFlower(row.original.id)
            }
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )
      }
    ],
    [flowers]
  )

  // Material React Table
  const table = useMaterialReactTable({
    columns,
    data: flowers,

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
      placeholder: "Search flower inventory...",
      variant: "outlined",
      size: "small"
    }
  })

  return (
    <div className="min-h-screen bg-pink-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4">

            <Flower2 size={42} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Flower Inventory
              </h1>

              <p className="text-pink-100 mt-2 text-lg">
                Manage temple flower stock,
                freshness, suppliers, and daily pooja flower inventory.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Flowers */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <Warehouse size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Flower Types
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {flowers.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Fresh Flowers */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Fresh Flowers
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    flowers.filter(
                      (flower) =>
                        flower.freshness === "Fresh"
                    ).length
                  }
                </h2>

              </div>

            </div>

          </div>

          {/* Total Quantity */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Package size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Quantity
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    flowers.reduce(
                      (acc, item) =>
                        acc + Number(item.quantity),
                      0
                    )
                  }{" "}
                  KG
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Add Flower Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <Flower2
              className="text-pink-600"
              size={30}
            />

            <h2 className="text-3xl font-bold text-gray-800">
              Add Flower Stock
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* Flower Name */}
            <input
              type="text"
              placeholder="Flower Name"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            {/* Quantity */}
            <input
              type="number"
              placeholder="Quantity"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
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
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.supplier}
              onChange={(e) =>
                setForm({
                  ...form,
                  supplier: e.target.value
                })
              }
            />

            {/* Freshness */}
            <select
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.freshness}
              onChange={(e) =>
                setForm({
                  ...form,
                  freshness: e.target.value
                })
              }
            >
              <option value="Fresh">
                Fresh
              </option>

              <option value="Limited">
                Limited
              </option>
            </select>

            {/* Add Button */}
            <button
              onClick={addFlower}
              className="bg-pink-500 hover:bg-pink-600 text-white rounded-2xl px-5 py-3 flex items-center justify-center gap-2 font-semibold transition"
            >

              <Plus size={20} />

              Add Flower

            </button>

          </div>

        </div>

        {/* Data Grid Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Flower Inventory Records
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, paginate,
                reorder columns, and manage flower inventory records.
              </p>

            </div>

            <div className="hidden md:flex items-center gap-2 text-gray-400">

              <Search size={20} />

              <span>
                Advanced Flower Search
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