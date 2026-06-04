// src/pages/MonthlyReports.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  IndianRupee,
  Wallet,
  TrendingUp,
  TrendingDown,
  CalendarDays,
  Download,
  FileSpreadsheet,
  Search
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

import * as XLSX from "xlsx"

export default function MonthlyReports() {

  // Monthly Report Data
  const [monthlyData] = useState([
    {
      month: "January",
      income: 50000,
      expense: 20000
    },
    {
      month: "February",
      income: 65000,
      expense: 25000
    },
    {
      month: "March",
      income: 72000,
      expense: 30000
    },
    {
      month: "April",
      income: 80000,
      expense: 40000
    },
    {
      month: "May",
      income: 90000,
      expense: 35000
    }
  ])

  // Total Calculations
  const totalIncome =
    monthlyData.reduce(
      (acc, item) => acc + item.income,
      0
    )

  const totalExpense =
    monthlyData.reduce(
      (acc, item) => acc + item.expense,
      0
    )

  const totalBalance =
    totalIncome - totalExpense

  // Export Excel
  const exportExcel = () => {

    const excelData = monthlyData.map(
      (item) => ({
        Month: item.month,
        Income: item.income,
        Expense: item.expense,
        Balance:
          item.income - item.expense
      })
    )

    const worksheet =
      XLSX.utils.json_to_sheet(excelData)

    const workbook =
      XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Monthly Reports"
    )

    XLSX.writeFile(
      workbook,
      "Temple_Monthly_Reports.xlsx"
    )
  }

  // Export PDF
  const exportPDF = () => {

    const doc = new jsPDF()

    doc.setFontSize(18)

    doc.text(
      "Temple Monthly Reports",
      14,
      20
    )

    autoTable(doc, {
      startY: 30,

      head: [[
        "Month",
        "Income",
        "Expense",
        "Balance"
      ]],

      body: monthlyData.map(
        (item) => [
          item.month,
          `₹ ${item.income}`,
          `₹ ${item.expense}`,
          `₹ ${
            item.income - item.expense
          }`
        ]
      )
    })

    doc.save(
      "Temple_Monthly_Reports.pdf"
    )
  }

  // Table Columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "month",
        header: "Month"
      },

      {
        accessorKey: "income",
        header: "Income",

        Cell: ({ cell }) => (
          <span className="font-bold text-green-600">
            ₹ {cell.getValue()}
          </span>
        )
      },

      {
        accessorKey: "expense",
        header: "Expense",

        Cell: ({ cell }) => (
          <span className="font-bold text-red-600">
            ₹ {cell.getValue()}
          </span>
        )
      },

      {
        header: "Balance",

        Cell: ({ row }) => {

          const balance =
            row.original.income -
            row.original.expense

          return (
            <span className="font-bold text-blue-600">
              ₹ {balance}
            </span>
          )
        }
      }
    ],
    []
  )

  // Material Table
  const table = useMaterialReactTable({
    columns,
    data: monthlyData,

    enableSorting: true,
    enablePagination: true,
    enableGlobalFilter: true,
    enableColumnFilters: true,
    enableHiding: true,
    enableDensityToggle: true,
    enableFullScreenToggle: true,
    enableColumnOrdering: true,
    enableColumnDragging: true,

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5
      },

      showGlobalFilter: true
    },

    muiSearchTextFieldProps: {
      placeholder:
        "Search monthly reports...",
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
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">

              <CalendarDays size={42} />

            </div>

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Monthly Reports
              </h1>

              <p className="text-purple-100 mt-3 text-lg">
                Track temple monthly income,
                expenses, balances, and
                financial performance reports.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">

          {/* Income */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

                <TrendingUp size={28} />

              </div>

              <div>

                <p className="text-gray-500">
                  Total Income
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  ₹ {totalIncome}
                </h2>

              </div>

            </div>

          </div>

          {/* Expense */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">

                <TrendingDown size={28} />

              </div>

              <div>

                <p className="text-gray-500">
                  Total Expense
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  ₹ {totalExpense}
                </h2>

              </div>

            </div>

          </div>

          {/* Balance */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">

                <Wallet size={28} />

              </div>

              <div>

                <p className="text-gray-500">
                  Total Balance
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  ₹ {totalBalance}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Export Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">

          <button
            onClick={exportExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl flex items-center gap-3 font-semibold transition"
          >

            <FileSpreadsheet size={20} />

            Export Excel

          </button>

          <button
            onClick={exportPDF}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl flex items-center gap-3 font-semibold transition"
          >

            <Download size={20} />

            Export PDF

          </button>

        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Monthly Financial Reports
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, paginate,
                reorder columns, and manage
                temple monthly reports easily.
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