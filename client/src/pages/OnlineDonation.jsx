// src/pages/OnlineDonation.jsx

import { useState } from "react"

import Breadcrumbs from "../components/layout/Breadcrumbs"

import {
  HeartHandshake,
  IndianRupee,
  Smartphone,
  Receipt,
  ShieldCheck,
  Download,
  CheckCircle2
} from "lucide-react"

export default function OnlineDonation() {

  // Donation Form
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    amount: "",
    paymentMethod: "UPI"
  })

  // Payment Status
  const [paymentSuccess, setPaymentSuccess] =
    useState(false)

  // Transaction Details
  const [transactionId, setTransactionId] =
    useState("")

  // Handle Payment
  const handleDonate = (e) => {

    e.preventDefault()

    if (
      !form.name ||
      !form.mobile ||
      !form.amount
    ) {
      alert("Please fill all fields")
      return
    }

    // Fake Transaction ID
    const txn =
      "TXN" +
      Math.floor(Math.random() * 100000000)

    setTransactionId(txn)

    // Simulate Payment Success
    setTimeout(() => {
      setPaymentSuccess(true)
    }, 1200)
  }

  // Download Receipt
  const downloadReceipt = () => {

    const receiptContent = `
Temple Donation Receipt

Temple Name:
Shri Lakkavva Devi Temple

Transaction ID:
${transactionId}

Devotee Name:
${form.name}

Mobile:
${form.mobile}

Amount:
₹ ${form.amount}

Payment Method:
${form.paymentMethod}

Status:
SUCCESS

Thank You For Your Donation 🙏
    `

    const blob = new Blob(
      [receiptContent],
      {
        type: "text/pdf"
      }
    )

    const url =
      window.URL.createObjectURL(blob)

    const link =
      document.createElement("a")

    link.href = url

    link.download =
      `${form.name}-donation-receipt.txt`

    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 p-6">

      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-3xl p-8 md:p-10 shadow-2xl text-white mb-10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div>

              <div className="flex items-center gap-4 mb-4">

                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <HeartHandshake size={34} />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold">
                  Online Donation
                </h1>

              </div>

              <p className="text-orange-100 text-lg max-w-2xl leading-8">

                Support Shri Lakkavva Devi Temple
                through secure online donations
                using UPI, Google Pay, PhonePe,
                Paytm, and more.

              </p>

            </div>

            {/* Hero Card */}
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 min-w-[260px]">

              <div className="space-y-4">

                <div className="flex items-center gap-3">

                  <ShieldCheck size={24} />

                  <span className="font-semibold">
                    100% Secure Payments
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Receipt size={24} />

                  <span className="font-semibold">
                    Instant Receipt Download
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Smartphone size={24} />

                  <span className="font-semibold">
                    UPI Supported
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Donation Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">

              <IndianRupee
                size={30}
                className="text-orange-500"
              />

              <h2 className="text-3xl font-bold text-gray-800">
                Donate to Temple
              </h2>

            </div>

            <form
              onSubmit={handleDonate}
              className="space-y-6"
            >

              {/* Name */}
              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Devotee Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value
                    })
                  }
                />

              </div>

              {/* Mobile */}
              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  value={form.mobile}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mobile: e.target.value
                    })
                  }
                />

              </div>

              {/* Amount */}
              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Donation Amount
                </label>

                <input
                  type="number"
                  placeholder="Enter donation amount"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  value={form.amount}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      amount: e.target.value
                    })
                  }
                />

              </div>

              {/* Payment Methods */}
              <div>

                <label className="block mb-3 font-semibold text-gray-700">
                  Payment Method
                </label>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                  {[
                    "UPI",
                    "PhonePe",
                    "Google Pay",
                    "Paytm",
                    "ATM Card"
                  ].map((method) => (

                    <button
                      type="button"
                      key={method}
                      onClick={() =>
                        setForm({
                          ...form,
                          paymentMethod: method
                        })
                      }
                      className={`border rounded-2xl p-4 font-semibold transition ${
                        form.paymentMethod ===
                        method
                          ? "bg-orange-500 text-white border-orange-500"
                          : "bg-white hover:bg-orange-50"
                      }`}
                    >
                      {method}
                    </button>

                  ))}

                </div>

              </div>


{
  form.paymentMethod === "ATM Card" && (

    <div className="bg-gray-50 border rounded-3xl p-6 space-y-5">

      <h3 className="text-2xl font-bold text-gray-800">
        ATM / Debit / Credit Card Details
      </h3>

      {/* Card Number */}
      <div>

        <label className="block mb-2 font-semibold text-gray-700">
          Card Number
        </label>

        <input
          type="text"
          maxLength="16"
          placeholder="1234 5678 9012 3456"
          className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

      </div>

      {/* Card Holder */}
      <div>

        <label className="block mb-2 font-semibold text-gray-700">
          Card Holder Name
        </label>

        <input
          type="text"
          placeholder="Enter card holder name"
          className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

      </div>

      {/* Expiry + CVV */}
      <div className="grid grid-cols-2 gap-4">

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            Expiry Date
          </label>

          <input
            type="text"
            placeholder="MM/YY"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold text-gray-700">
            CVV
          </label>

          <input
            type="password"
            maxLength="3"
            placeholder="123"
            className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

        </div>

      </div>

      {/* Security Info */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-4">

        <p className="text-green-700 text-sm leading-6">

          🔒 Your card payment is secured with
          encrypted payment gateway protection.

        </p>

      </div>

    </div>

  )
}
              {/* Donate Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transition"
              >
                Donate Now
              </button>

            </form>

          </div>

          {/* Payment Info */}
          <div className="space-y-6">

            {/* QR Code */}
            <div className="bg-white rounded-3xl shadow-xl p-6">

              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Scan & Pay
              </h3>

              <div className="flex justify-center mb-5">

                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=temple@upi"
                  alt="Temple QR"
                  className="rounded-2xl border p-3"
                />

              </div>

              <p className="text-center text-gray-600 leading-7">

                Scan using any UPI app like
                PhonePe, Google Pay, Paytm, or
                BHIM.

              </p>

            </div>

            {/* Payment Tracking */}
            <div className="bg-white rounded-3xl shadow-xl p-6">

              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Payment Tracking
              </h3>

              {!paymentSuccess ? (

                <div className="space-y-3">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-600">
                      Status
                    </span>

                    <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-semibold">
                      Pending
                    </span>

                  </div>

                  <p className="text-gray-500 text-sm leading-6">
                    Complete the payment using
                    selected payment method.
                  </p>

                </div>

              ) : (

                <div className="space-y-4">

                  <div className="flex items-center gap-3 text-green-600">

                    <CheckCircle2 size={28} />

                    <span className="font-bold text-lg">
                      Payment Successful
                    </span>

                  </div>

                  <div className="bg-green-50 rounded-2xl p-4 space-y-2">

                    <p>
                      <span className="font-semibold">
                        Transaction ID:
                      </span>{" "}
                      {transactionId}
                    </p>

                    <p>
                      <span className="font-semibold">
                        Amount:
                      </span>{" "}
                      ₹ {form.amount}
                    </p>

                    <p>
                      <span className="font-semibold">
                        Method:
                      </span>{" "}
                      {form.paymentMethod}
                    </p>

                  </div>

                  {/* Download Receipt */}
                  <button
                    onClick={downloadReceipt}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
                  >

                    <Download size={20} />

                    Download Receipt

                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}