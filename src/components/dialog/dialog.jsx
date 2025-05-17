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
      <dialog ref={dialogRef} className="dialog-open">
        <ul className="dialog-open__list">
          <li className="dialog-open__item">
            {' '}
            <a className="dialog-open__link" href="#about" target="_self">
              <p className="dialog-open__text">About us</p>
            </a>
          </li>
          <li className="dialog-open__item">
            {' '}
            <a className="dialog-open__link" href="#goals" target="_self">
              <p className="dialog-open__text">Our goals</p>
            </a>
          </li>
          <li className="dialog-open__item">
            {' '}
            <a className="dialog-open__link" href="#yolo" target="_self">
              <p className="dialog-open__text">Yolo</p>
            </a>
          </li>
        </ul>
        <button onClick={closeDialog}>Close</button>
      </dialog>

      <button className="dialog__button" onClick={openDialog}>
        Menu
      </button>
    </div>
  );
};

export default Dialog;
