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
    applyingFor: "",
    motherName: "",
    phone: "",
    photo: null,
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setStudent((prev) => ({ ...prev, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setStudent((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Certificate logic: ONLY Form One → Form Four
  const certificateRequiredForms = ["Form One", "Form Two", "Form Three", "Form Four"];
  const certificateRequired = certificateRequiredForms.includes(student.applyingFor);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.photo) {
      alert("Student photo is required");
      return;
    }

    if (certificateRequired && !student.certificate) {
      alert("Certificate is required for this admission");
      return;
    }

    addStudent({
      ...student,
      createdAt: new Date().toLocaleDateString(),
    });

    alert("Student Registered Successfully");
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

        {/* CURRENT CLASS */}
      

        {/* APPLYING FOR */}
        <select
          name="applyingFor"
          value={student.applyingFor}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        >
          <option value="">Applying For</option>
          <option value="Class One">Class One</option>
          <option value="Class Two">Class Two</option>
          <option value="Class Three">Class Three</option>
          <option value="Class Four">Class Four</option>
          <option value="Class Five">Class Five</option>
          <option value="Class Six">Class Six</option>
          <option value="Class Seven">Class Seven</option>
          <option value="Class Eight">Class Eight</option>
          <option value="Form One">Form One</option>
          <option value="Form Two">Form Two</option>
          <option value="Form Three">Form Three</option>
          <option value="Form Four">Form Four</option>
        </select>

        <input
          type="text"
          name="motherName"
          placeholder="Mother's Name (Three Names)"
          value={student.motherName}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Parent Phone Number"
          value={student.phone}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
          required
        />

        {/* PHOTO */}
        <div className="mb-4">
          <label className="block font-semibold mb-1 text-green-400">
            Student Photo
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* CERTIFICATE ONLY FOR FORM ONE → FORM FOUR */}
        {certificateRequired && (
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-green-400">
              Primary / Middle School Certificate
            </label>
            <input
              type="file"
              name="certificate"
              accept="image/*,.pdf"
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <button className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800">
          Register Student
        </button>
      </form>
    </div>
  );
}

export default StudentRegistration;
