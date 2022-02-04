import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const IdleTimerComponent = () => {
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onIdle = () => {
    console.log("User is idle");
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User has logged out");
  };

  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log("User is active");
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello Batman</h2> : <h2>Hello Guest</h2>}

      <Modal isOpen={modalIsOpen}>
        <h2>You have been idle for a while!</h2>
        <p>You will be logged out soon.</p>
        <button onClick={logOut}>Log me out</button>
        <button onClick={stayActive}>Keep me signed in</button>
      </Modal>

      {isLoggedIn && (
        <IdleTimer
          ref={idleTimerRef}
          timeout={1000 * 5}
          onIdle={onIdle}
        ></IdleTimer>
      )}
    </div>
  );
};
