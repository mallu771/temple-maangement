import { useState } from "react";

export default function PushNotification() {
  const [message, setMessage] = useState("");

  const sendNotification = () => {
    if (!message) return;

    alert(`Push Notification Sent:\n${message}`);

    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Push Notifications
      </h2>

      <textarea
        rows="4"
        placeholder="Enter notification message..."
        className="w-full border rounded p-3 mb-4"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button
        onClick={sendNotification}
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Send Notification
      </button>
    </div>
  );
}