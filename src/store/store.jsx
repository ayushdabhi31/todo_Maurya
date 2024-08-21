import { createContext, useReducer } from "react";
import colorGenerator from "../colorGenerator";
import Swal from "sweetalert2";

export const Todoapp = createContext({
  todos: [],
  addTodo() {},
  deleteTodo() {},
  completedTodo() {},
  updateTodo() {},
  searchTodo() {},
});

const todos = JSON.parse(localStorage.getItem("todos") ?? "[]");

function reducerFunction(state, action) {
  if (action.type === "add") {
    if (action.payload.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid input",
        text: "Please enter valid input!",
      });
      return state;
    } else {
      const updated = [...state];
      const todo = {
        task: action.payload,
        completed: false,
        button: false,
        color: colorGenerator(),
      };
      updated.push(todo);
      Swal.fire({
        title: "Added!",
        text: "Todo added successfully!",
        icon: "success",
      });
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      return updated;
    }
  }
  if (action.type === "delete") {
    Swal.fire({
      title: "Deleted!",
      text: "Todo deleted successfully!",
      icon: "success",
    });
    let updated = [...state];
    updated = updated.filter((element, index) => index != action.payload);
    localStorage.setItem("todos", JSON.stringify(updated));
    return updated;
  }
  if (action.type === "complete") {
    Swal.fire({
      title: "Completed!",
      text: "Todo Completed!",
      icon: "success",
    });
    let updated = [...state];
    updated[action.payload].button = true;
    updated[action.payload].completed = true;
    localStorage.setItem("todos", JSON.stringify(updated));
    return updated;
  }
  if (action.type === "update") {
    Swal.fire({
      title: "Updated!",
      text: "Todo Updated!",
      icon: "success",
    });
    let updated = [...state];
    updated[action.payload.index].task = action.payload.task;
    localStorage.setItem("todos", JSON.stringify(updated));
    return updated;
  }
  if (action.type === "search") {
    let updated = [...state];
    updated = updated.filter((element) =>
      element.task.toLowerCase().includes(action.payload.toLowerCase())
    );
    if (updated.length === 0) {
      Swal.fire({
        title: "No such results found!",
        icon: "error",
      });
      return (updated = todos);
    }
    return updated;
  }
}

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, todos);
  function handleAdd(value) {
    dispatch({
      type: "add",
      payload: value,
    });
  }
  function handleDelete(index) {
    dispatch({
      type: "delete",
      payload: index,
    });
  }
  function handleComplete(index) {
    dispatch({
      type: "complete",
      payload: index,
    });
  }
  function handleUpdate(data) {
    dispatch({
      type: "update",
      payload: data,
    });
  }
  function handleSearch(search) {
    dispatch({
      type: "search",
      payload: search,
    });
  }
  const values = {
    todos: state,
    addTodo: handleAdd,
    deleteTodo: handleDelete,
    completedTodo: handleComplete,
    updateTodo: handleUpdate,
    searchTodo: handleSearch,
  };
  return (
    <>
      <Todoapp.Provider value={values}>{children}</Todoapp.Provider>
    </>
  );
}
