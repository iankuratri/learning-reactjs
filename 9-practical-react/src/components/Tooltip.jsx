import React from "react";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";

const ColoredComponent = () => {
  return <div style={{ color: "gold" }}>Component Tooltip</div>;
};

export const Tooltip = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Tippy content="Basic Tooltip">
        <button>Toottip - text</button>
      </Tippy>

      <Tippy
        content={<h2 style={{ color: "dodgerblue" }}>This is heading 2</h2>}
      >
        <button>Tooltip - h2</button>
      </Tippy>

      <Tippy content={<ColoredComponent />}>
        <button>Tooltip - component</button>
      </Tippy>
    </div>
  );
};
