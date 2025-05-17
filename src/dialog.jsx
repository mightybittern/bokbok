// src/Dialog.jsx
import React, { useRef } from 'react';

const Dialog = () => {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <div>
      <dialog ref={dialogRef} className="dialog__open">
        <p>About us</p>
        <p>Our goals</p>
        <p>Yolo</p>
        <button onClick={closeDialog}>Close</button>
      </dialog>

      <button onClick={openDialog}>Menu</button>
    </div>
  );
};

export default Dialog;
