import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  // Los datos
  useEffect(() => {
    setTimeout(() => {
      setStudents([
        { id: "1", name: "Juan" },
        { id: "2", name: "María" },
        { id: "3", name: "Carlos" },
        { id: "4", name: "Ana" },
        { id: "5", name: "Pedro" },
        { id: "6", name: "Lucía" },
        { id: "7", name: "José" },
        { id: "8", name: "Elena" },
        { id: "9", name: "Miguel" },
        { id: "10", name: "Sofía" },
      ]);
    }, 5000);
  }, []);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now().toString(),
      name,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};