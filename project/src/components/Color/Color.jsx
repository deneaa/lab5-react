import React from "react";
import styles from "./Color.module.css";

const Color = ({ rgb, hex, name, onClick, type }) => {
  const title = `${name} - ${hex}`;

  const className = `${styles.colors} ${
    type === "selected" ? styles.colorSelected : ""
  }`;

  return (
    <div
      className={className}
      style={{ backgroundColor: rgb }}
      onClick={onClick}
      title={title}
    ></div>
  );
};

export default Color;
