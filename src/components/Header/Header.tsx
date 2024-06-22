import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="src\assets\images\lornaLogo.png" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
