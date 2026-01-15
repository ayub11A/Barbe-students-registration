import React, { useContext, useState } from "react";
import { SubjectContext } from "../context/SubjectContext";

const branches = ["Science", "Languages", "Social Studies", "Islamic Studies"];

function AdminSubjects() {
  const { subjects, addSubject, editSubject, deleteSubject } = useContext(SubjectContext);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState(branches[0]);
  const [editingId, setEditingId] = useState(null);

  // Add or update subject
  const handleAddOrEdit = () => {
    if (!name.trim()) return;

    if (editingId) {
      editSubject(editingId, { name, branch });
      setEditingId(null);
    } else {
      addSubject({ name, branch, items: [] }); // important: include branch + empty items
    }

    setName("");
    setBranch(branches[0]);
  };

  const handleEditClick = (subject) => {
    setName(subject.name);
    setBranch(subject.branch);
    setEditingId(subject.id);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Subjects (Admin)</h1>

      {/* Add / Edit Form */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="border p-2 rounded"
        >
          {branches.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <button
          onClick={handleAddOrEdit}
          className="bg-blue-900 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Subjects List */}
      {subjects.length === 0 ? (
        <p className="text-gray-500">No subjects available</p>
      ) : (
        <ul className="divide-y">
          {subjects.map((s) => (
            <li key={s.id} className="flex justify-between items-center py-2">
              <div>
                <strong>{s.name}</strong> <span className="text-gray-500">({s.branch})</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditClick(s)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteSubject(s.id)}
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

export default AdminSubjects;
