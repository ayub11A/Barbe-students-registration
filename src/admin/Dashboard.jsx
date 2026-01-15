import React, { useContext } from "react";
import AdminLayout from "../admin/AdminLayout";
import { StudentContext } from "../context/StudentContext";

function Dashboard() {
  const { students } = useContext(StudentContext);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-2">Total Students</h2>
          <p className="text-gray-700 text-2xl font-semibold">{students.length}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-2">Total Teachers</h2>
          <p className="text-gray-700 text-2xl font-semibold">—</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-bold mb-2">Total Subjects</h2>
          <p className="text-gray-700 text-2xl font-semibold">—</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Recent Registrations</h2>
        {students.length === 0 ? (
          <p>No students registered yet</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {students.map((s, idx) => (
              <li key={idx} className="py-2">
                <strong>{s.name}</strong> – {s.grade}
                <div className="text-sm text-gray-500">{s.createdAt}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
