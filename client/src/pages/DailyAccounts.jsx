// src/pages/DailyAccounts.jsx

import { useMemo, useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  IndianRupee,
  Wallet,
  TrendingUp,
  TrendingDown,
  Plus,
  Trash2,
  Download,
  Search,
  ReceiptText
} from "lucide-react"

import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table"

import * as XLSX from "xlsx"

import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

export default function DailyAccounts() {

  // Transactions Data
  const [transactions, setTransactions] =
    useState([
      {
        id: 1,
        type: "Income",
        category: "Donation",
        amount: 5000,
        date: "2026-06-02"
      },
      {
        id: 2,
        type: "Expense",
        category: "Flowers",
        amount: 1200,
        date: "2026-06-02"
      },
      {
        id: 3,
        type: "Income",
        category: "Archana",
        amount: 3000,
        date: "2026-06-02"
      }
    ])

  // Form State
  const [form, setForm] = useState({
    type: "Income",
    category: "",
    amount: "",
    date: ""
  })

  // Add Transaction
  const addTransaction = () => {

    if (
      !form.category ||
      !form.amount ||
      !form.date
    ) {
      return
    }

    const newTransaction = {
      id: transactions.length + 1,
      ...form,
      amount: Number(form.amount)
    }

    setTransactions([
      ...transactions,
      newTransaction
    ])

    setForm({
      type: "Income",
      category: "",
      amount: "",
      date: ""
    })
  }

  // Delete Transaction
  const deleteTransaction = (id) => {

    const updatedTransactions =
      transactions.filter(
        (transaction) =>
          transaction.id !== id
      )

    setTransactions(updatedTransactions)
  }

  // Totals
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce(
      (acc, item) => acc + item.amount,
      0
    )

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce(
      (acc, item) => acc + item.amount,
      0
    )

  const balance =
    totalIncome - totalExpense

  // Export Excel
  const exportExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(
        transactions
      )

    const workbook =
      XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "DailyAccounts"
    )

    XLSX.writeFile(
      workbook,
      "daily_accounts.xlsx"
    )
  }

  // Export PDF
  const exportPDF = () => {

    const doc = new jsPDF()

    doc.setFontSize(18)

    doc.text(
      "Temple Daily Accounts Report",
      14,
      20
    )

    autoTable(doc, {
      startY: 30,

      head: [
        [
          "ID",
          "Type",
          "Category",
          "Amount",
          "Date"
        ]
      ],

      body: transactions.map(
        (transaction) => [
          transaction.id,
          transaction.type,
          transaction.category,
          `₹ ${transaction.amount}`,
          transaction.date
        ]
      )
    })

    doc.save("daily_accounts.pdf")
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
        header: "Transaction Type",
        Cell: ({ cell }) => (
          <span
            className={`px-4 py-1 rounded-full text-white text-sm font-semibold ${
              cell.getValue() === "Income"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {cell.getValue()}
          </span>
        )
      },
      {
        accessorKey: "category",
        header: "Category"
      },
      {
        accessorKey: "amount",
        header: "Amount",
        Cell: ({ cell }) => (
          <span className="font-bold text-blue-600">
            ₹ {cell.getValue()}
          </span>
        )
      },
      {
        accessorKey: "date",
        header: "Date"
      },
      {
        header: "Actions",
        Cell: ({ row }) => (
          <button
            onClick={() =>
              deleteTransaction(
                row.original.id
              )
            }
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        )
      }
    ],
    [transactions]
  )

  // Material Table
  const table = useMaterialReactTable({
    columns,
    data: transactions,

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
        "Search transactions...",
      variant: "outlined",
      size: "small"
    }
  })

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-8 text-white shadow-xl mb-10">

          <div className="flex items-center gap-4">

            <Wallet size={45} />

            <div>

              <h1 className="text-4xl md:text-5xl font-bold">
                Daily Accounts
              </h1>

              <p className="text-blue-100 mt-2 text-lg">
                Manage temple income,
                expenses, donations,
                and financial transactions.
              </p>

            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

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

                <h2 className="text-3xl font-bold text-green-600">
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

                <h2 className="text-3xl font-bold text-red-600">
                  ₹ {totalExpense}
                </h2>

              </div>

            </div>

          </div>

          {/* Balance */}
          <div className="bg-white rounded-3xl p-6 shadow-md">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <IndianRupee size={28} />
              </div>

              <div>

                <p className="text-gray-500">
                  Current Balance
                </p>

                <h2 className="text-3xl font-bold text-blue-600">
                  ₹ {balance}
                </h2>

              </div>

            </div>

          </div>

        </div>

        {/* Add Transaction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

          <div className="flex items-center gap-3 mb-8">

            <ReceiptText
              className="text-indigo-600"
              size={30}
            />

            <h2 className="text-3xl font-bold text-gray-800">
              Add Transaction
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">

            {/* Type */}
            <select
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value
                })
              }
            >
              <option value="Income">
                Income
              </option>

              <option value="Expense">
                Expense
              </option>
            </select>

            {/* Category */}
            <input
              type="text"
              placeholder="Category"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value
                })
              }
            />

            {/* Amount */}
            <input
              type="number"
              placeholder="Amount"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={form.amount}
              onChange={(e) =>
                setForm({
                  ...form,
                  amount: e.target.value
                })
              }
            />

            {/* Date */}
            <input
              type="date"
              className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={form.date}
              onChange={(e) =>
                setForm({
                  ...form,
                  date: e.target.value
                })
              }
            />

            {/* Add Button */}
            <button
              onClick={addTransaction}
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl px-5 py-3 flex items-center justify-center gap-2 font-semibold transition"
            >

              <Plus size={20} />

              Add Entry

            </button>

          </div>

        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-xl p-6">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                Financial Transactions
              </h2>

              <p className="text-gray-500 mt-2">
                Search, sort, paginate,
                filter, export PDF & Excel,
                and manage temple accounts.
              </p>

            </div>

            {/* Export Buttons */}
            <div className="flex gap-3">

              <button
                onClick={exportExcel}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl flex items-center gap-2 transition"
              >
                <Download size={18} />
                Export Excel
              </button>

              <button
                onClick={exportPDF}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-2xl flex items-center gap-2 transition"
              >
                <Download size={18} />
                Export PDF
              </button>

            </div>

          </div>

          {/* Search Label */}
          <div className="hidden md:flex items-center gap-2 text-gray-400 mb-4">

            <Search size={20} />

            <span>
              Smart Financial Search Enabled
            </span>

          </div>

          {/* Data Grid */}
          <MaterialReactTable table={table} />

        </div>

      </div>

    </div>
  )
}