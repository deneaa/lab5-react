import React from "react";
import styles from "./Square.module.css";

const Square = ({ row, col, color, onMouseDown, onMouseEnter, type }) => {
  return (
    <div
      className={type === "gallery" ? styles.gallery : styles.mainBoard}
      style={{ backgroundColor: color }}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
    ></div>
  );
};

export default Square;
