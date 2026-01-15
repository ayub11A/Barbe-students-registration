import React from "react";
import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="flex flex-col space-y-3">
          <Link to="/admin/dashboard" className="hover:bg-blue-800 p-2 rounded">
            Dashboard
          </Link>
          <Link to="/student-registration" className="hover:bg-blue-800 p-2 rounded">
            Students
          </Link>
          <Link to="/admin/AdminTeachers" className="hover:bg-blue-800 p-2 rounded">
            Teachers
          </Link>
          <Link to="/admin/adminSubjects" className="hover:bg-blue-800 p-2 rounded">
            Subjects
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

export default AdminLayout;