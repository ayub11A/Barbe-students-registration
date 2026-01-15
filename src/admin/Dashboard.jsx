import React, { useContext, useState } from "react";
import AdminLayout from "./AdminLayout";
import { StudentContext } from "../context/StudentContext";
import { TeacherContext } from "../context/TeacherContext";
import { SubjectContext } from "../context/SubjectContext";

function Dashboard() {
  const { students, removeStudent } = useContext(StudentContext);
  const { teachers } = useContext(TeacherContext);
  const { subjects } = useContext(SubjectContext);

  const [showStudents, setShowStudents] = useState(false);
  const [showTeachers, setShowTeachers] = useState(false);
  const [showSubjects, setShowSubjects] = useState(false);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Admin Dashboard
      </h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Students */}
        <div
          className="bg-white p-6 rounded-xl shadow text-center cursor-pointer hover:bg-gray-50"
          onClick={() => setShowStudents(!showStudents)}
        >
          <h2 className="text-xl font-bold mb-2">Total Students</h2>
          <p className="text-3xl font-semibold text-blue-900">{students.length}</p>
          <p className="text-gray-500 mt-1">Click to view all students</p>
        </div>

        {/* Total Teachers */}
        <div
          className="bg-white p-6 rounded-xl shadow text-center cursor-pointer hover:bg-gray-50"
          onClick={() => setShowTeachers(!showTeachers)}
        >
          <h2 className="text-xl font-bold mb-2">Total Teachers</h2>
          <p className="text-3xl font-semibold text-blue-900">{teachers.length}</p>
          <p className="text-gray-500 mt-1">Click to view all teachers</p>
        </div>

        {/* Total Subjects */}
        <div
          className="bg-white p-6 rounded-xl shadow text-center cursor-pointer hover:bg-gray-50"
          onClick={() => setShowSubjects(!showSubjects)}
        >
          <h2 className="text-xl font-bold mb-2">Total Subjects</h2>
          <p className="text-3xl font-semibold text-blue-900">{subjects.length}</p>
          <p className="text-gray-500 mt-1">Click to view all subjects</p>
        </div>
      </div>

      {/* STUDENTS TABLE */}
      {showStudents && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-6">Registered Students</h2>
          {students.length === 0 ? (
            <p className="text-gray-500">No students registered yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Photo</th>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Grade</th>
                    <th className="p-3 border">Applying For</th>
                    <th className="p-3 border">Mother Name</th>
                    <th className="p-3 border">Phone</th>
                    <th className="p-3 border">Certificate</th>
                    <th className="p-3 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-3 border">
                        <img
                          src={s.photo}
                          alt={s.name}
                          className="w-24 h-24 object-cover border"
                        />
                      </td>
                      <td className="p-3 border font-semibold">{s.name}</td>
                      <td className="p-3 border">{s.grade}</td>
                      <td className="p-3 border">{s.applyingFor}</td>
                      <td className="p-3 border">{s.motherName}</td>
                      <td className="p-3 border">{s.phone}</td>
                      <td className="p-3 border">
                        {s.certificate ? (
                          <a
                            href={s.certificate}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                      <td className="p-3 border text-center">
                        <button
                          onClick={() => removeStudent(index)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* TEACHERS TABLE */}
      {showTeachers && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-6">Teachers</h2>
          {teachers.length === 0 ? (
            <p className="text-gray-500">No teachers registered yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Email</th>
                    <th className="p-3 border">Phone</th>
                    <th className="p-3 border">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((t, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3 border font-semibold">{t.name}</td>
                      <td className="p-3 border">{t.email}</td>
                      <td className="p-3 border">{t.phone}</td>
                      <td className="p-3 border">{t.subject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* SUBJECTS TABLE */}
      {showSubjects && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-6">Subjects</h2>
          {subjects.length === 0 ? (
            <p className="text-gray-500">No subjects added yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border">Subject Name</th>
                    <th className="p-3 border">Code</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((s, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-3 border font-semibold">{s.name}</td>
                      <td className="p-3 border">{s.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

export default Dashboard;
