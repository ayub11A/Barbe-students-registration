import React, { createContext, useState, useEffect } from "react";

export const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = useState(() => {
    const saved = localStorage.getItem("teachers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const addTeacher = (teacher) => {
    setTeachers(prev => [...prev, { ...teacher, id: Date.now() }]);
  };

  const editTeacher = (id, updatedTeacher) => {
    setTeachers(prev =>
      prev.map(t => (t.id === id ? { ...t, ...updatedTeacher } : t))
    );
  };

  const deleteTeacher = (id) => {
    setTeachers(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TeacherContext.Provider value={{ teachers, addTeacher, editTeacher, deleteTeacher }}>
      {children}
    </TeacherContext.Provider>
  );
};
