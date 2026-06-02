import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function RazorpayPayment() {

  const handlePayment = async () => {

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: 500 * 100,
      currency: "INR",
      name: "Temple Donation",
      description: "Donation Payment",

      handler: function (response) {
        alert(
          "Payment Success: " +
            response.razorpay_payment_id
        );
      }
    };

    const rzp =
      new window.Razorpay(options);

    rzp.open();
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow text-center">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-6">
        Pay with Razorpay
      </h2>
    <button
      onClick={handlePayment}
      className="bg-blue-600 text-white px-5 py-3 rounded"
    >
      Pay with Razorpay
    </button>
    </div>

  );
}