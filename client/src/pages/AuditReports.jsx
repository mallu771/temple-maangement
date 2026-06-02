import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function AuditReports() {
  const [reports] = useState([
    {
      id: 1,
      month: "January",
      auditor: "Ramesh",
      status: "Completed"
    },
    {
      id: 2,
      month: "February",
      auditor: "Mahesh",
      status: "Pending"
    }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-6">
        Audit Reports
      </h2>

      <table className="w-full border">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="border p-3">Month</th>
            <th className="border p-3">Auditor</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="border p-3">
                {report.month}
              </td>

              <td className="border p-3">
                {report.auditor}
              </td>

              <td className="border p-3">
                <span
                  className={`px-3 py-1 rounded text-white ${
                    report.status === "Completed"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {report.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}