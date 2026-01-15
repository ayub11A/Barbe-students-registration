// src/admin/AdminTeachers.jsx
import React, { useContext, useState } from "react";
import { TeacherContext } from "../context/TeacherContext";

function AdminTeachers() {
  const { teachers, addTeacher, editTeacher, deleteTeacher } = useContext(TeacherContext);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Add / Edit Teacher
  const handleAddOrEdit = () => {
    if (!name.trim() || !subject.trim()) return;

    const newTeacher = { name, subject, description, image };

    if (editingId) {
      editTeacher(editingId, newTeacher);
      setEditingId(null);
    } else {
      addTeacher(newTeacher);
    }

    // Reset form
    setName("");
    setSubject("");
    setDescription("");
    setImage(null);
  };

  // Fill form for editing
  const handleEditClick = (teacher) => {
    setName(teacher.name);
    setSubject(teacher.subject);
    setDescription(teacher.description || "");
    setImage(teacher.image || null);
    setEditingId(teacher.id);
  };

  // Handle image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Teachers (Admin)</h1>

      {/* Add / Edit Form */}
      <div className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          rows={3}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddOrEdit}
          className="bg-blue-900 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Teachers List */}
      {teachers.length === 0 ? (
        <p className="text-gray-500">No teachers available</p>
      ) : (
        <ul className="divide-y">
          {teachers.map((t) => (
            <li key={t.id} className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <img
                  src={t.image || "https://via.placeholder.com/60"}
                  alt={t.name}
                  className="w-16 h-16 object-cover rounded-full border"
                />
                <div>
                  <strong className="text-blue-900">{t.name}</strong> - {t.subject}
                  {t.description && (
                    <p className="text-gray-600 text-sm">{t.description}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditClick(t)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTeacher(t.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminTeachers;
