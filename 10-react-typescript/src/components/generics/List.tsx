import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>

      <ul>
        {items.map((item, index) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => onClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
