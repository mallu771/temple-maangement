import { useState } from "react";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Shankar",
      designation: "Priest",
      salary: 25000
    },
    {
      id: 2,
      name: "Ravi",
      designation: "Security",
      salary: 18000
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    salary: ""
  });

  const addEmployee = () => {
    if (!form.name || !form.designation || !form.salary)
      return;

    const newEmployee = {
      id: employees.length + 1,
      ...form
    };

    setEmployees([...employees, newEmployee]);

    setForm({
      name: "",
      designation: "",
      salary: ""
    });
  };

  const deleteEmployee = (id) => {
    const updated = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updated);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">
        Employee Management
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Employee Name"
          className="border p-2 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value
            })
          }
        />

        <input
          type="text"
          placeholder="Designation"
          className="border p-2 rounded"
          value={form.designation}
          onChange={(e) =>
            setForm({
              ...form,
              designation: e.target.value
            })
          }
        />

        <input
          type="number"
          placeholder="Salary"
          className="border p-2 rounded"
          value={form.salary}
          onChange={(e) =>
            setForm({
              ...form,
              salary: e.target.value
            })
          }
        />
      </div>

      <button
        onClick={addEmployee}
        className="bg-blue-600 text-white px-5 py-2 rounded mb-6"
      >
        Add Employee
      </button>

      <table className="w-full border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">
              Designation
            </th>
            <th className="p-3 border">Salary</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="p-3 border">{employee.id}</td>
              <td className="p-3 border">{employee.name}</td>
              <td className="p-3 border">
                {employee.designation}
              </td>
              <td className="p-3 border">
                ₹ {employee.salary}
              </td>
              <td className="p-3 border">
                <button
                  onClick={() =>
                    deleteEmployee(employee.id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}