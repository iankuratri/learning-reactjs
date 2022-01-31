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
          <NavLink to="/icons">Icons</NavLink>
        </li>
        <li>
          <NavLink to="/toast-notifications">Toast Notifications</NavLink>
        </li>
        <li>
          <NavLink to="/modal">Modal</NavLink>
        </li>
        <li>
          <NavLink to="/tooltip">Tooltip</NavLink>
        </li>
      </ul>
    </nav>
  );
};
