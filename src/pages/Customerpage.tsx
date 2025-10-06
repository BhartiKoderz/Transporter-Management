import React, { useState } from "react";
import { Plus, Edit, Trash2, User } from "lucide-react";
//import Header from "../components/layout/Header";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Customerpage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      address: "Pune, Maharashtra",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "9123456789",
      address: "Nagpur, Maharashtra",
    },
  ]);

  const [newCustomer, setNewCustomer] = useState<Customer>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [showForm, setShowForm] = useState(false);

  // Handle Add Customer
  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email) return;
    setCustomers([...customers, { ...newCustomer, id: Date.now() }]);
    setNewCustomer({ id: 0, name: "", email: "", phone: "", address: "" });
    setShowForm(false);
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
   

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5 mr-2" /> Add Customer
          </button>
        </div>

        {/* Customer Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Phone</th>
                <th className="py-3 px-4">Address</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4 font-medium">{customer.name}</td>
                  <td className="py-3 px-4">{customer.email}</td>
                  <td className="py-3 px-4">{customer.phone}</td>
                  <td className="py-3 px-4">{customer.address}</td>
                  <td className="py-3 px-4 text-right space-x-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit className="w-5 h-5 inline" />
                    </button>
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5 inline" />
                    </button>
                  </td>
                </tr>
              ))}
              {customers.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-6 px-4 text-center text-gray-500 italic"
                  >
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <User className="w-6 h-6 text-blue-600 mr-2" /> Add New Customer
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newCustomer.name}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, name: e.target.value })
                }
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={newCustomer.email}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, email: e.target.value })
                }
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone"
                value={newCustomer.phone}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, phone: e.target.value })
                }
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Address"
                value={newCustomer.address}
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, address: e.target.value })
                }
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCustomer}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customerpage;
