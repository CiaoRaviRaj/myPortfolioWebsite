import React from "react";

import "./Header.css";

function Header() {
  return (
    <header >
      <h1>Hello World!</h1>

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#my__works">My Works</a>
        </li>

        <li>
          <a href="#footer">Contect</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
