# Ejercicio-Clase-Context_Api
App.js
import React from "react";
import { View } from "react-native";
import { StudentProvider } from "./context/StudentContext";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

export default function App() {
  return (
    <StudentProvider>
      <View style={{ padding: 20, marginTop: 50 }}>
        <StudentList />
        <AddStudentForm />
      </View>
    </StudentProvider>
  );
}

StudentContext.js
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

StudentList.js
import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { StudentContext } from "../context/StudentContext";

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Lista de Estudiantes
      </Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 16, marginVertical: 5 }}>
            {item.id}. {item.name}
          </Text>
        )}
      />
    </View>
  );
};

export default StudentList;

StudentForm.js
import React, { useState, useContext } from "react";
import { View, TextInput, Button } from "react-native";
import { StudentContext } from "../context/StudentContext";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const { addStudent } = useContext(StudentContext);

  const handleAdd = () => {
    if (name.trim() === "") return;
    addStudent(name);
    setName("");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <TextInput
        placeholder="Nombre del estudiante"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
        }}
      />
      <Button title="Agregar estudiante" onPress={handleAdd} />
    </View>
  );
};

export default AddStudentForm;

Package.json
{
  "name": "student-context-app",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~51.0.28",
    "react": "18.2.0",
    "react-native": "0.74.5"
  },
  "private": true
}
