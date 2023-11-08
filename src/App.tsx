import { createRoot } from "react-dom/client";
import { useState } from "react";

import Definition from "./Definition";

const App = () => {
  const [word, setWord] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Look It Up!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://dictionaryapi.dev">
                  Our API
                </a>
              </li>
            </ul>
            <form
              className="d-flex"
              id="defineform"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                setWord(formData.get("defineword")?.toString() ?? "");
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                name="defineword"
                placeholder="What word?"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Define
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Definition word={word} />
    </div>
  );
};

const container = document.getElementById("root");

if (!container) {
  throw new Error("No container to render to.");
}

const root = createRoot(container);
root.render(<App />);
