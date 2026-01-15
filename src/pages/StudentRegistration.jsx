// src/components/StudentRegistration.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function StudentRegistration() {
  const { addStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    age: "",
    gender: "",
    grade: "",
    email: "",
    phone: "",
    parentName: "",
    previousSchool: "",
    photo: null,
  });

  // Preview image
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent((prev) => ({ ...prev, photo: reader.result })); // Save base64
        setPreview(reader.result); // Preview image
      };
      reader.readAsDataURL(file);
    } else {
      setStudent((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.photo) {
      alert("Please upload a student photo!");
      return;
    }

    addStudent(student);

    alert("Student Registered Successfully!");

    setStudent({
      name: "",
      age: "",
      gender: "",
      grade: "",
      email: "",
      phone: "",
      parentName: "",
      previousSchool: "",
      photo: null,
    });
    setPreview(null);

    navigate("/admin/dashboard");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-8 rounded-xl shadow"
      >
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Student Registration
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Student Full Name"
          value={student.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <select
          name="gender"
          value={student.gender}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="grade"
          placeholder="Grade / Class"
          value={student.grade}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="text"
          name="parentName"
          placeholder="Parent Name"
          value={student.parentName}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Parent phone number"
          value={student.phone}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />

        {/* Photo upload */}
        <div className="mb-4">
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-full border"
            />
          )}
        </div>

        <button className="w-full bg-blue-900 text-white py-3 rounded">
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentRegistration;
