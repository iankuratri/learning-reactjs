import React from "react";
import { toast } from "react-toastify";

export const ToastNotifications = () => {
  const basicNotify = () => {
    toast("Wow so easy!");
  };

  const errorNotify = () => {
    toast.error("Something went wrong.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const successNotify = () => {
    toast.success("Request submitted successfully.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const infoNotify = () => {
    toast.info("heyaaaaa", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <button onClick={basicNotify}>Basic Notification</button>
      <button onClick={successNotify}>Success Notification</button>
      <button onClick={errorNotify}>Error Notification</button>
      <button onClick={infoNotify}>Info Notification</button>
    </div>
  );
};
