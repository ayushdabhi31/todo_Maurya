import { useContext } from "react";
import { Todoapp } from "../store/store.jsx";
import "../css/Todo.css";
import Todo from "./Todo.jsx";

export default function Gettodos() {
  const {todos,deleteTodo,completedTodo} = useContext(Todoapp);
  let content;
  if (!todos || todos.length === 0) {
    content = (
      <center>
        <br />
        <pre style={{ fontSize: "20px", fontWeight: "bold" }}>
          No todo added!
        </pre>
      </center>
    );
  } else {
    content = todos.map((element, index) => (
      <Todo key={index} {...element} index={index} deleteTodo={deleteTodo} completedTodo={completedTodo}/>
    ));
  }
  return (
    <>
      <div className="container">
        <div className="row">{content}</div>
      </div>
    </>
  );
}
