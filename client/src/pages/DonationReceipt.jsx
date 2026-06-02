import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function DonationReceipt() {
  const receipt = {
    receiptNo: "TEMP001",
    name: "Ravi",
    amount: 5000,
    date: "2026-05-29"
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-3xl font-bold mb-6">
        Donation Receipt
      </h2>

      <div className="space-y-3 text-lg">
        <p>
          <strong>Receipt No:</strong>{" "}
          {receipt.receiptNo}
        </p>

        <p>
          <strong>Name:</strong> {receipt.name}
        </p>

        <p>
          <strong>Amount:</strong> ₹{" "}
          {receipt.amount}
        </p>

        <p>
          <strong>Date:</strong> {receipt.date}
        </p>
      </div>

      <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded">
        Download Receipt
      </button>
    </div>
  );
}