import React from "react";

import styles from "./ModalWindow.module.css";

const ModalWindow = (props) => {
  console.log(props);
  return (
    <div>
      <div
        className={`${styles.modal} ${
          props.data.value === 1 ? styles.hidden : ""
        }`}
      >
        <h2>Invalid Output</h2>
        <p>lalala</p>
        <button>Okay</button>
      </div>
      <div
        className={`${styles.overlay} ${
          props.data.value === 1 ? styles.hidden : ""
        }`}
      ></div>
    </div>
  );
};

export default ModalWindow;
