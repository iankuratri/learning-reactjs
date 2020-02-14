import React from "react";

const Like = ({ isLiked, onClick }) => {
  let classes = "clickable fa fa-heart";
  if (!isLiked) classes += "-o";

  return <i className={classes} aria-hidden="true" onClick={onClick}></i>;
};

export default Like;
