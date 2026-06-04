// src/pages/EmployeeManagement.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  Users,
  BadgeIndianRupee,
  Briefcase,
  Plus,
  Trash2,
  Search,
  ShieldCheck
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

export default function EmployeeManagement() {

  // Employee Data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Shankar",
      designation: "Priest",
      salary: 25000,
      department: "Temple",
      status: "Active"
    },
    {
      id: 2,
      name: "Ravi",
      designation: "Security",
      salary: 18000,
      department: "Security",
      status: "Active"
    },
    {
      id: 3,
      name: "Mahesh",
      designation: "Accountant",
      salary: 22000,
      department: "Finance",
      status: "Inactive"
    }
  ])

  // Form State
  const [form, setForm] = useState({
    name: "",
    designation: "",
    salary: "",
    department: "",
    status: "Active"
  })

  // Add Employee
  const addEmployee = () => {

    if (
      !form.name ||
      !form.designation ||
      !form.salary ||
      !form.department
    ) {
      return
    }

    const newEmployee = {
      id: employees.length + 1,
      ...form
    }

    setEmployees([...employees, newEmployee])

    setForm({
      name: "",
      designation: "",
      salary: "",
      department: "",
      status: "Active"
    })
  }

  // Delete Employee
  const deleteEmployee = (id) => {

    const updatedEmployees =
      employees.filter(
        (employee) => employee.id !== id
      )

    setEmployees(updatedEmployees)
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
        header: "Employee Name"
      },
      {
        accessorKey: "designation",
        header: "Designation"
      },
      {
        accessorKey: "department",
        header: "Department"
      },
      {
        accessorKey: "salary",
        header: "Salary",
        Cell: ({ cell }) => (
          <span className="font-semibold text-green-600">
            ₹ {cell.getValue()}
          </span>
        )
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
      },
      {
        header: "Actions",
        Cell: ({ row }) => (
          <button
            onClick={() =>
              deleteEmployee(row.original.id)
            }
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )
      }
    ],
    [employees]
  )

  // Material Table
  const table = useMaterialReactTable({
    columns,
    data: employees,

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
      placeholder: "Search employees...",
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
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4">

            <Users size={42} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Employee Management
              </h1>

              <p className="text-blue-100 mt-2 text-lg">
                Manage temple employees, salaries,
                departments, and workforce operations.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Total Employees */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Users size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Total Employees
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {employees.length}
                </h2>

              </div>

            </div>

          </div>

          {/* Active Employees */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Active Employees
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {
                    employees.filter(
                      (e) => e.status === "Active"
                    ).length
                  }
                </h2>

              </div>

            </div>

          </div>

          {/* Monthly Salary */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <BadgeIndianRupee size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Monthly Salary
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  ₹{" "}
                  {employees.reduce(
                    (acc, item) =>
                      acc + Number(item.salary),
                    0
                  )}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Add Employee Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <Briefcase
              className="text-blue-600"
              size={30}
            />

            <h2 className="text-3xl font-bold text-gray-800">
              Add New Employee
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* Name */}
            <input
              type="text"
              placeholder="Employee Name"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            {/* Designation */}
            <input
              type="text"
              placeholder="Designation"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.designation}
              onChange={(e) =>
                setForm({
                  ...form,
                  designation: e.target.value
                })
              }
            />

            {/* Department */}
            <input
              type="text"
              placeholder="Department"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value
                })
              }
            />

            {/* Salary */}
            <input
              type="number"
              placeholder="Salary"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.salary}
              onChange={(e) =>
                setForm({
                  ...form,
                  salary: e.target.value
                })
              }
            />

            {/* Add Button */}
            <button
              onClick={addEmployee}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-5 py-3 flex items-center justify-center gap-2 font-semibold transition"
            >

              <Plus size={20} />

              Add Employee

            </button>

          </div>

        </div>

        {/* Employee Table */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Employee Records
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, sort, paginate,
                reorder columns, and manage employee data.
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