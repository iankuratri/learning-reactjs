import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message = "";

  switch (props.status) {
    case "loading":
      message = "Loading...";
      break;

    case "success":
      message = "Data fetched successfuly!";
      break;

    case "error":
      message = "Error fetching data";
      break;

    default:
      break;
  }

  return (
    <div>
      <h3>Status - {message}</h3>
    </div>
  );
};
