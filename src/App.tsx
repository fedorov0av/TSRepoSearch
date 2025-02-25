import { useState } from "react";
import viteLogo from "./assets/images/ts.svg";
import "./styles/App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <>
      <div>
        <a target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>TSRepoSearch</h1>
      <div className="card">
        <p>Введите название репозитория и нажмите Enter</p>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <p>{firstName}</p>
      </div>
      <p className="read-the-docs">
        Поиск репозиториев на GitHub не был никогда таким легким, как сейчас...
      </p>
    </>
  );
}

export default App;
