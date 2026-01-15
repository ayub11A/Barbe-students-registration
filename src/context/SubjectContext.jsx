// src/context/SubjectContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
  const defaultSubjects = [
    { name: "Science", items: ["Physics", "Chemistry", "Biology"], id: 1 },
    { name: "Languages", items: ["English", "Somali", "Arabic"], id: 2 },
    { name: "Social Studies", items: ["History", "Geography"], id: 3 },
    { name: "Islamic Studies", items: ["Islamic Subject", "Fiqh", "Prophet SW Stories"], id: 4 },
  ];

  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem("subjects");
    return saved ? JSON.parse(saved) : defaultSubjects;
  });

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (subject) => {
    setSubjects((prev) => [...prev, { ...subject, id: Date.now() }]);
  };

  const editSubject = (id, updatedSubject) => {
    setSubjects((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedSubject } : s))
    );
  };

  const deleteSubject = (id) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <SubjectContext.Provider value={{ subjects, addSubject, editSubject, deleteSubject }}>
      {children}
    </SubjectContext.Provider>
  );
};
