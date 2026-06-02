import { useState } from "react";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function CommitteeMembers() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Ramesh",
      role: "President",
      mobile: "9876543210"
    },
    {
      id: 2,
      name: "Suresh",
      role: "Secretary",
      mobile: "9876500000"
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-6">
        Temple Committee Members
      </h2>

      <table className="w-full border">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Mobile</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="p-3 border">{member.id}</td>
              <td className="p-3 border">{member.name}</td>
              <td className="p-3 border">{member.role}</td>
              <td className="p-3 border">{member.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}