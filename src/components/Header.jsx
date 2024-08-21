import { useContext, useState } from "react";
import { Todoapp } from "../store/store";

export default function Header() {
  const [search,setSearch] = useState('');
  const {searchTodo} = useContext(Todoapp);
  function handleSearch(event){
    setSearch(event.target.value);
    searchTodo(search);
  }
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#57ADBF",fontFamily: "sans-serif" }}
      >
        <div className="container-fluid">
          <a
            style={{
              fontWeight: "bold",
              color: "black"
            }}
            className="navbar-brand"
            href="http://localhost:5173/"
          >
          TASKIFY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  style={{
                    fontWeight: "bold",
                    color: "black"
                  }}
                  className="nav-link active"
                  aria-current="page"
                  href="http://localhost:5173/"
                >
                  HOME
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search your todo here.."
                style={{fontWeight:"bold",color:"black"}}
                aria-label="Search"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
