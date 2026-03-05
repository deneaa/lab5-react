import React from "react";
import styles from "./Button.module.css";
const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
