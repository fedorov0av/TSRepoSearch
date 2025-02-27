import React from "react";
import viteLogo from "../assets/images/logo.png";
import "../styles/App.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <a
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={viteLogo}
          className="logo"
          alt="Vite logo"
        />
      </a>
      <h1>TSRepoSearch</h1>
    </div>
  );
};
export default Header;
