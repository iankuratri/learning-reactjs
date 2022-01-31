import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "lightgrey" },
          content: { color: "blue" },
        }}
      >
        <h1>React heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque
          consequuntur maiores iste optio molestiae pariatur ab ipsam vel et
          labore ipsa at placeat dolores, repellat earum voluptates dicta eius.
        </p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};
