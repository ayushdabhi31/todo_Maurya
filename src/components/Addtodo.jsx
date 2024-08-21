import { useContext, useRef } from "react";
import styles from "../css/Addform.module.css";
import { Todoapp } from "../store/store";

export default function Addtodo() {
  const todo = useRef();
  const { addTodo } = useContext(Todoapp);
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className="mb-3">
          <input
            ref={todo}
            style={{ width: "340px", border: "1px solid rgb(79, 79, 79)" }}
            placeholder="Enter your todo here"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="button"
          onClick={() => {addTodo(todo.current.value);
          todo.current.value="";}}
          className="btn btn-success"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
