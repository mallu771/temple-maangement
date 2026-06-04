// src/pages/AuditReports.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  Clock3,
  Search,
  Download,
  FileSpreadsheet
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

import * as XLSX from "xlsx"

export default function AuditReports() {

  // Reports Data
  const [reports] = useState([
    {
      id: 1,
      month: "January",
      auditor: "Ramesh",
      year: 2026,
      amount: 25000,
      status: "Completed"
    },
    {
      id: 2,
      month: "February",
      auditor: "Mahesh",
      year: 2026,
      amount: 18000,
      status: "Pending"
    },
    {
      id: 3,
      month: "March",
      auditor: "Suresh",
      year: 2026,
      amount: 32000,
      status: "Completed"
    },
    {
      id: 4,
      month: "April",
      auditor: "Kiran",
      year: 2026,
      amount: 21000,
      status: "Pending"
    }
  ])

  // Total Reports
  const totalReports = reports.length

  // Completed Reports
  const completedReports =
    reports.filter(
      (report) => report.status === "Completed"
    ).length

  // Pending Reports
  const pendingReports =
    reports.filter(
      (report) => report.status === "Pending"
    ).length

  // Total Audit Amount
  const totalAmount =
    reports.reduce(
      (acc, item) => acc + item.amount,
      0
    )

  // Export Excel
  const exportExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(reports)

    const workbook =
      XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Audit Reports"
    )

    XLSX.writeFile(
      workbook,
      "Temple_Audit_Reports.xlsx"
    )
  }

  // Export PDF
  const exportPDF = () => {

    const doc = new jsPDF()

    doc.setFontSize(18)

    doc.text(
      "Temple Audit Reports",
      14,
      20
    )

    autoTable(doc, {
      startY: 30,

      head: [[
        "ID",
        "Month",
        "Auditor",
        "Year",
        "Amount",
        "Status"
      ]],

      body: reports.map((report) => [
        report.id,
        report.month,
        report.auditor,
        report.year,
        `₹ ${report.amount}`,
        report.status
      ])
    })

    doc.save("Temple_Audit_Reports.pdf")
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
        accessorKey: "month",
        header: "Month"
      },
      {
        accessorKey: "auditor",
        header: "Auditor"
      },
      {
        accessorKey: "year",
        header: "Year"
      },
      {
        accessorKey: "amount",
        header: "Audit Amount",

        Cell: ({ cell }) => (
          <span className="font-bold text-green-600">
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
              cell.getValue() === "Completed"
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

  // Material React Table
  const table = useMaterialReactTable({
    columns,
    data: reports,

    enablePagination: true,
    enableSorting: true,
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
      placeholder: "Search audit reports...",
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

          <div className="flex items-center gap-5">

            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">

              <ShieldCheck size={42} />

            </div>

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Audit Reports
              </h1>

              <p className="text-orange-100 mt-3 text-lg">
                Manage temple audit reports,
                financial reviews, and yearly records.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* Total Reports */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">

                <FileText size={28} />

              </div>

              <div>

                <p className="text-gray-500">
                  Total Reports
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {totalReports}
                </h2>

              </div>

            </div>

          </div>

          {/* Completed */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

                <CheckCircle2 size={28} />

              </div>

              <div>

                <p className="text-gray-500">
                  Completed
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {completedReports}
                </h2>

              </div>

            </div>

          </div>

          {/* Pending */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center">

                <Clock3 size={28} />

              </div>

              <div>

                <p className="text-gray-500">
                  Pending
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  {pendingReports}
                </h2>

              </div>

            </div>

          </div>

          {/* Total Amount */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">

                ₹

              </div>

              <div>

                <p className="text-gray-500">
                  Total Amount
                </p>

                <h2 className="text-3xl font-bold text-gray-800">
                  ₹ {totalAmount}
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
                Audit Report Records
              </h2>

              <p className="text-gray-500 mt-2">
                Search, filter, paginate, reorder
                columns, and manage audit reports easily.
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