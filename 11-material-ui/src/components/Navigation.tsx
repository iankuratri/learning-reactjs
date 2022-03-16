import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/typography">Typography</NavLink>
        </li>
        <li>
          <NavLink to="/button">Button</NavLink>
        </li>
        <li>
          <NavLink to="/input">Input</NavLink>
        </li>
      </ul>
    </nav>
  );
};
