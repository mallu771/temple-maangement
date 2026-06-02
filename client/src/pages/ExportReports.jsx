import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Breadcrumbs from "../components/layout/Breadcrumbs"
export default function ExportReports() {

  const reportData = [
    {
      month: "January",
      income: 50000,
      expense: 20000
    },
    {
      month: "February",
      income: 65000,
      expense: 25000
    }
  ];

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.text("Temple Monthly Report", 20, 20);

    reportData.forEach((item, index) => {
      doc.text(
        `${item.month} | Income: ₹${item.income} | Expense: ₹${item.expense}`,
        20,
        40 + index * 10
      );
    });

    doc.save("monthly-report.pdf");
  };

  const exportExcel = () => {
    const worksheet =
      XLSX.utils.json_to_sheet(reportData);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Reports"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const fileData = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }
    );

    saveAs(fileData, "monthly-report.xlsx");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <Breadcrumbs />
      <h2 className="text-2xl font-bold mb-6">
        Export Reports
      </h2>

      <div className="flex gap-4">
        <button
          onClick={exportPDF}
          className="bg-red-600 text-white px-5 py-2 rounded"
        >
          Export PDF
        </button>

        <button
          onClick={exportExcel}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Export Excel
        </button>
      </div>
    </div>
  );
}