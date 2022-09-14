import React from "react";

import styles from "./ModalWindow.module.css";

const ModalWindow = (props) => {
  console.log(props.status);
  //console.log(props.textToShow);

  const CloseWindowHandler = (event) => {
    event.preventDefault();

    return props.updatedModal(0);
  };

  const closeOverlayFn = () => {
    return props.updatedModal(0);
  };

  return (
    <div>
      <div
        className={`${styles.modal} ${props.status === 1 ? styles.hidden : ""}`}
      >
        <h2>Invalid Output</h2>
        <p>{props.textToShow}</p>
        <button
          onClick={CloseWindowHandler}
          className={styles["modal__button"]}
        >
          Okay
        </button>
      </div>
      <div
        onClick={closeOverlayFn}
        className={`${styles.overlay} ${
          props.status === 1 ? styles.hidden : ""
        }`}
      ></div>
    </div>
  );
};

export default ModalWindow;
