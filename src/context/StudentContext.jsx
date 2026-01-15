import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  // 1. Ku soo celinta students-ka LocalStorage marka page la load gareeyo
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Markasta oo students update garayo, ku keydi localStorage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add new student
  const addStudent = (student) => {
    setStudents(prev => [
      ...prev,
      { ...student, createdAt: new Date().toLocaleString() }
    ]);
  };

  // Remove student by index
  const removeStudent = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
