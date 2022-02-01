import React, { forwardRef } from "react";
import "tippy.js/dist/tippy.css";
import Tippy from "@tippyjs/react";

const ColoredComponent = () => {
  return <div style={{ color: "gold" }}>Component Tooltip</div>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Heading 1</h1>
      <p>Paragraph</p>
    </div>
  );
});

export const Tooltip = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Tippy arrow={false} delay={1000} content="Basic Tooltip">
        <button>Tootip - text</button>
      </Tippy>

      <Tippy
        placement="right"
        content={<h2 style={{ color: "dodgerblue" }}>This is heading 2</h2>}
      >
        <button>Tooltip - h2</button>
      </Tippy>

      <Tippy content={<ColoredComponent />}>
        <button>Tooltip - component</button>
      </Tippy>

      <Tippy content="Tooltip - custom child">
        <CustomChild />
      </Tippy>
    </div>
  );
};
