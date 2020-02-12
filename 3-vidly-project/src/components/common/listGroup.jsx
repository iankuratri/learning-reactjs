import React from "react";

const ListGroup = props => {
  const { items, onGenreChange } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item._id}
          className="list-group-item"
          onClick={() => onGenreChange(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
