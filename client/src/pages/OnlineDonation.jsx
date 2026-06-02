import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function OnlineDonation() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    amount: ""
  });

  const handleDonate = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Donation Initiated");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-3xl font-bold mb-6">
        Online Donation
      </h2>

      <form
        onSubmit={handleDonate}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Devotee Name"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              mobile: e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Donation Amount"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({
              ...form,
              amount: e.target.value
            })
          }
        />

        <button className="bg-orange-500 text-white w-full py-3 rounded">
          Donate Now
        </button>
      </form>
    </div>
  );
}