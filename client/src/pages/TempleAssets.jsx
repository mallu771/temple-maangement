// src/pages/TempleAssets.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Gem,
  Package,
  ShieldCheck,
  Plus,
  Trash2,
  Search,
  Boxes
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function TempleAssets() {

  // Assets Data
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: "Temple Bell",
      quantity: 2,
      condition: "Good",
      category: "Metal"
    },
    {
      id: 2,
      name: "Silver Lamp",
      quantity: 5,
      condition: "Excellent",
      category: "Silver"
    },
    {
      id: 3,
      name: "Wooden Chair",
      quantity: 10,
      condition: "Average",
      category: "Furniture"
    }
  ])

  // Form State
  const [form, setForm] = useState({
    name: "",
    quantity: "",
    condition: "",
    category: ""
  })

  // Add Asset
  const addAsset = () => {

    if (
      !form.name ||
      !form.quantity ||
      !form.condition ||
      !form.category
    ) {
      return
    }

    const newAsset = {
      id: assets.length + 1,
      ...form
    }

    setAssets([...assets, newAsset])

    setForm({
      name: "",
      quantity: "",
      condition: "",
      category: ""
    })
  }

  // Delete Asset
  const deleteAsset = (id) => {

    const updatedAssets =
      assets.filter(
        (asset) => asset.id !== id
      )

    setAssets(updatedAssets)
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
        header: "Asset Name"
      },
      {
        accessorKey: "category",
        header: "Category"
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        Cell: ({ cell }) => (
          <span className="font-semibold text-blue-600">
            {cell.getValue()}
          </span>
        )
      },
      {
        accessorKey: "condition",
        header: "Condition",
        Cell: ({ cell }) => (
          <span
            className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${
              cell.getValue() === "Excellent"
                ? "bg-green-500"
                : cell.getValue() === "Good"
                ? "bg-blue-500"
                : "bg-yellow-500"
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
              deleteAsset(row.original.id)
            }
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )
      }
    ],
    [assets]
  )

  // Material React Table
  const table = useMaterialReactTable({
    columns,
    data: assets,

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
      placeholder: "Search temple assets...",
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
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4">

            <Gem size={42} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Temple Assets Management
              </h1>

              <p className="text-orange-100 mt-2 text-lg">
                Manage temple assets, inventory,
                categories, and asset conditions efficiently.
              </p>

            </div>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Assets */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Boxes size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Assets
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {assets.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Excellent Condition */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Excellent Assets
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    assets.filter(
                      (a) => a.condition === "Excellent"
                    ).length
                  }
                </h2>

              </div>

            </div>

          </div>

          {/* Total Quantity */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Package size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Quantity
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    assets.reduce(
                      (acc, item) =>
                        acc + Number(item.quantity),
                      0
                    )
                  }
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Add Asset Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <Package
              className="text-orange-600"
              size={30}
            />

            <h2 className="text-3xl font-bold text-gray-800">
              Add New Asset
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* Asset Name */}
            <input
              type="text"
              placeholder="Asset Name"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            {/* Category */}
            <input
              type="text"
              placeholder="Category"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value
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

            {/* Condition */}
            <select
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.condition}
              onChange={(e) =>
                setForm({
                  ...form,
                  condition: e.target.value
                })
              }
            >
              <option value="">
                Select Condition
              </option>

              <option value="Excellent">
                Excellent
              </option>

              <option value="Good">
                Good
              </option>

              <option value="Average">
                Average
              </option>
            </select>

            {/* Add Button */}
            <button
              onClick={addAsset}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-5 py-3 flex items-center justify-center gap-2 font-semibold transition"
            >

              <Plus size={20} />

              Add Asset

            </button>

          </div>

        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Temple Assets Records
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, sort, paginate,
                reorder columns, and manage temple assets.
              </p>

            </div>

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