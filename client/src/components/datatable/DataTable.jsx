import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table"

function DataTable({
  columns,
  data
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map(
            headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  header => (
                    <th
                      key={header.id}
                      className="text-left p-4 font-semibold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef
                              .header,
                            header.getContext()
                          )}
                    </th>
                  )
                )}
              </tr>
            )
          )}
        </thead>

        <tbody>
          {table.getRowModel().rows.length ? (
            table
              .getRowModel()
              .rows.map(row => (
                <tr
                  key={row.id}
                  className="border-t hover:bg-gray-50"
                >
                  {row
                    .getVisibleCells()
                    .map(cell => (
                      <td
                        key={cell.id}
                        className="p-4"
                      >
                        {flexRender(
                          cell.column.columnDef
                            .cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                </tr>
              ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center p-6"
              >
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable