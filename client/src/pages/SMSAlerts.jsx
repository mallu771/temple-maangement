import { useState } from "react";

export default function SMSAlerts() {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = () => {
    if (!mobile || !message) return;

    alert(`SMS Sent to ${mobile}`);

    setMobile("");
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        SMS Alerts
      </h2>

      <input
        type="tel"
        placeholder="Enter Mobile Number"
        className="w-full border rounded p-3 mb-4"
        value={mobile}
        onChange={(e) =>
          setMobile(e.target.value)
        }
      />

      <textarea
        rows="4"
        placeholder="Enter SMS Message"
        className="w-full border rounded p-3 mb-4"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button
        onClick={sendSMS}
        className="bg-green-600 text-white px-5 py-2 rounded"
      >
        Send SMS
      </button>
    </div>
  );
}