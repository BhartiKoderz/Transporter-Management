
import  { useState } from "react";
import { FileText, Download, Trash2, Upload, Search, Eye } from "lucide-react";
 
export default function Documentpage() {
  // Sample data – replace with data from your API or backend
  const documents = [
    {
      id: 1,
      name: "Invoice_Sept2025.pdf",
      type: "Invoice",
      size: "1.2 MB",
      uploadedBy: "RK Truck",
      date: "2025-09-20",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // sample file
    },
    {
      id: 2,
      name: "Bill_of_Lading_1023.pdf",
      type: "BOL",
      size: "800 KB",
      uploadedBy: "Rajendra patil",
      date: "2025-09-21",
      url: "https://file-examples.com/storage/fe7f85b68ec/pdf.pdf", // sample file
    },
  ];
 
  const [previewDoc, setPreviewDoc] = useState(null);
 
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="h-6 w-6 text-blue-600" />
          Documents Management
        </h1>
 
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-orange-600 transition">
            <Upload className="h-4 w-4" />
            Upload Document
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search documents..."
              className="pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>
      </div>
 
      {/* Documents Table */}
      <div className="overflow-x-auto bg-white shadow rounded-2xl">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Size</th>
              <th className="px-6 py-3">Uploaded By</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {doc.name}
                </td>
                <td className="px-6 py-4">{doc.type}</td>
                <td className="px-6 py-4">{doc.size}</td>
                <td className="px-6 py-4">{doc.uploadedBy}</td>
                <td className="px-6 py-4">{doc.date}</td>
                <td className="px-6 py-4 text-right space-x-3">
                  {/* Preview Button */}
                  <button
                    className="text-green-600 hover:text-green-800"
                    onClick={() => setPreviewDoc(doc)}
                  >
                    <Eye className="h-5 w-5 inline" />
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Download className="h-5 w-5 inline" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="h-5 w-5 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
      {/* Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
            <h2 className="text-lg font-bold mb-4">
              Preview: {previewDoc.name}
            </h2>
            <iframe
              src={previewDoc.url}
              title="Document Preview"
              className="w-full h-[400px] border rounded-lg"
            ></iframe>
            <button
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              onClick={() => setPreviewDoc(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
 
 