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