// src/pages/PrasadaMaterials.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  UtensilsCrossed,
  Package,
  Plus,
  Trash2,
  Search,
  ShoppingBasket,
  Warehouse,
  ShieldCheck
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function PrasadaMaterials() {

  // Materials Data
  const [materials, setMaterials] = useState([
    {
      id: 1,
      item: "Rice",
      quantity: 100,
      unit: "KG",
      category: "Grains",
      status: "Available"
    },
    {
      id: 2,
      item: "Jaggery",
      quantity: 40,
      unit: "KG",
      category: "Sweeteners",
      status: "Available"
    },
    {
      id: 3,
      item: "Ghee",
      quantity: 25,
      unit: "Liters",
      category: "Dairy",
      status: "Low Stock"
    }
  ])

  // Form State
  const [form, setForm] = useState({
    item: "",
    quantity: "",
    unit: "KG",
    category: "",
    status: "Available"
  })

  // Add Material
  const addMaterial = () => {

    if (
      !form.item ||
      !form.quantity ||
      !form.category
    ) {
      return
    }

    const newMaterial = {
      id: materials.length + 1,
      ...form
    }

    setMaterials([
      ...materials,
      newMaterial
    ])

    setForm({
      item: "",
      quantity: "",
      unit: "KG",
      category: "",
      status: "Available"
    })
  }

  // Delete Material
  const deleteMaterial = (id) => {

    const updatedMaterials =
      materials.filter(
        (material) => material.id !== id
      )

    setMaterials(updatedMaterials)
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
        accessorKey: "item",
        header: "Material Name"
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
        accessorKey: "category",
        header: "Category"
      },
      {
        accessorKey: "status",
        header: "Status",
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
              deleteMaterial(row.original.id)
            }
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )
      }
    ],
    [materials]
  )

  // Material React Table
  const table = useMaterialReactTable({
    columns,
    data: materials,

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
        "Search prasada materials...",
      variant: "outlined",
      size: "small"
    }
  })

  return (
    <div className="min-h-screen bg-orange-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4">

            <UtensilsCrossed size={42} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Prasada Materials
              </h1>

              <p className="text-orange-100 mt-2 text-lg">
                Manage temple prasada ingredients,
                stock inventory, categories,
                and material availability.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Materials */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Warehouse size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Materials
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {materials.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Available Materials */}
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
                    materials.filter(
                      (material) =>
                        material.status ===
                        "Available"
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
                  Total Quantity
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    materials.reduce(
                      (acc, item) =>
                        acc +
                        Number(item.quantity),
                      0
                    )
                  }
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Add Material Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <ShoppingBasket
              className="text-orange-600"
              size={30}
            />

            <h2 className="text-3xl font-bold text-gray-800">
              Add Prasada Material
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* Material Name */}
            <input
              type="text"
              placeholder="Material Name"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value
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
              onClick={addMaterial}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-2xl px-5 py-3 flex items-center justify-center gap-2 font-semibold transition"
            >

              <Plus size={20} />

              Add Material

            </button>

          </div>

        </div>

        {/* Data Grid */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Prasada Materials Inventory
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, paginate,
                reorder columns, and manage prasada materials inventory.
              </p>

            </div>

            <div className="hidden md:flex items-center gap-2 text-gray-400">

              <Search size={20} />

              <span>
                Advanced Inventory Search
              </span>

            </div>

          </div>

          {/* Table */}
          <MaterialReactTable table={table} />

        </div>

      </div>

    </div>
  )
}