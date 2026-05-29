export const columns = [
  {
    accessorKey: "id",
    header: "ID"
  },

  {
    accessorKey: "name",
    header: "Name"
  },

  {
    accessorKey: "email",
    header: "Email"
  },

  {
    accessorKey: "role",
    header: "Role"
  },

  {
    accessorKey: "status",
    header: "Status",

    cell: ({ row }) => {
      const status =
        row.original.status

      return (
        <span
          className={`px-3 py-1 rounded-full text-sm
          ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      )
    }
  },

  // CRUD BUTTONS
  {
    id: "actions",
    header: "Actions",

    cell: ({ row }) => {
      const user = row.original

      const handleEdit = () => {
        alert(
          `Edit User: ${user.name}`
        )
      }

      const handleDelete = () => {
        alert(
          `Delete User: ${user.name}`
        )
      }

      return (
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
          >
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
          >
            Delete
          </button>
        </div>
      )
    }
  }
]