import QRCode from "react-qr-code";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function QRPayment() {

  const upiLink =
    "upi://pay?pa=temple@upi&pn=TempleDonation&am=500";

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow text-center">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-6">
        Scan & Pay
      </h2>

      <QRCode value={upiLink} size={220} />

      <p className="mt-5 text-gray-600">
        UPI ID: temple@upi
      </p>
    </div>
  );
}