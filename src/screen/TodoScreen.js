import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

console.log(Date.now().toString());

const TodoScreen = () => {
  // Initialize local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  // Handle Add Todo
  const handleAddTodo = () => {
    // structure of a single todo item
    // {
    // id:
    // title:
    // }

    if (todo === "") {
      return; // early return
    }

    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  // Handle Delete Todo
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(updatedTodoList);
  };

  // Handle Edit Todo
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  // Handle Update Todo
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }

      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  // Render Todo
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#0C4271",
          borderRadius: 10,
          paddingHorizontal: 12,
          paddingVertical: 20,
          marginBottom: 8,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
          elevation: 4,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: 700, flex: 1 }}>
          {item.title}
        </Text>

        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
          style={{
            backgroundColor: "#0A81AB",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 4,
          }}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDeleteTodo(item.id)}
          style={{
            backgroundColor: "#0A81AB",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 4,
          }}
        />
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 25, marginTop: 75 }}>
      <Text
        style={{
          fontSize: 59,
          fontWeight: 900,
          color: "#0C4271",
        }}
      >
        To Do App
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: 400,
          marginBottom: 36,
          color: "#2c2c2c",
        }}
      >
        Productivity is just a click away.
      </Text>

      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#0A81AB",
          borderRadius: 20,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#0A81AB",
            borderRadius: 30,
            paddingVertical: 10,
            alignItems: "center",
            marginTop: 14,
            marginBottom: 44,
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#0A81AB",
            borderRadius: 30,
            paddingVertical: 10,
            alignItems: "center",
            marginTop: 14,
            marginBottom: 44,
          }}
          onPress={() => handleAddTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
            Add
          </Text>
        </TouchableOpacity>
      )}

      {/* Render TodoList */}
      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
