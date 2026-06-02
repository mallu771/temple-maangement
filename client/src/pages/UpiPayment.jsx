import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function UpiPayment() {

  const upiLink =
    "upi://pay?pa=temple@upi&pn=TempleDonation";

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">
<Breadcrumbs />
      <h2 className="text-2xl font-bold mb-5">
        UPI Payment
      </h2>

      <a
        href={upiLink}
        className="bg-green-600 text-white px-5 py-3 rounded inline-block"
      >
        Pay via UPI
      </a>
    </div>
  );
}