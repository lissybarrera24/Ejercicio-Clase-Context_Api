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