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
        <li>
          <NavLink to="/countup">CountUp</NavLink>
        </li>
        <li>
          <NavLink to="/idle-timer">Idle Timer</NavLink>
        </li>
        <li>
          <NavLink to="/color-picker">Color Picker</NavLink>
        </li>
        <li>
          <NavLink to="/credit-cards">Credit Cards</NavLink>
        </li>
        <li>
          <NavLink to="/date-picker">Date Picker</NavLink>
        </li>
        <li>
          <NavLink to="/video-player">Video Player</NavLink>
        </li>
        <li>
          <NavLink to="/loading-indicators">Loading Indicators</NavLink>
        </li>
      </ul>
    </nav>
  );
};
