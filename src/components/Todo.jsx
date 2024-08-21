import { useContext, useState } from "react";
import { Todoapp } from "../store/store.jsx";

export default function Todo({ task, completed, button, color, index }) {
  const { deleteTodo, completedTodo, updateTodo } = useContext(Todoapp);
  const [update, setUpdate] = useState(false);
  const [value, setValue] = useState(task);

  function handleData(index) {
    setUpdate(false);
    const updated = {
      index: index,
      task: value
    };
    updateTodo(updated);
  }

  return (
    <>
      <div className="col-3" key={index}>
        <div className="card" style={{ backgroundColor: color }}>
          <div className="card-body">
            {update ? (
              <center>
                <input
                  style={{ width: "200px", border: "1px solid rgb(79, 79, 79)" }}
                  placeholder="Edit your todo"
                  type="text"
                  className="form-control"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </center>
            ) : (
              <h5 className="card-title">{task}</h5>
            )}
            {completed ? "Completed" : "Pending"}:
            {completed ? (
              <input
                style={{ position: "relative", top: "2px" }}
                type="checkbox"
                defaultChecked={completed}
              />
            ) : (
              <input
                type="checkbox"
                onClick={() => completedTodo(index)}
                defaultChecked={completed}
              />
            )}
            <br />
            {update ? (
              <button
                style={{ marginRight: "10px", marginTop: "10px" }}
                className="btn btn-primary"
                onClick={() => handleData(index)}
              >
                Edit
              </button>
            ) : (
              <button
                style={{ marginRight: "10px", marginTop: "10px" }}
                className="btn btn-primary"
                disabled={button}
                onClick={() => setUpdate(true)}
              >
                Update
              </button>
            )}
            <button
              style={{ marginTop: "10px" }}
              onClick={() => deleteTodo(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}