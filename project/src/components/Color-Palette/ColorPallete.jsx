import React from "react";
import Color from "../Color/Color";
import styles from "./ColorPalette.module.css";

const ColorPalette = ({ colors, selectedColorId, setSelectedColorId }) => {
  const handleClick = (id) => {
    setSelectedColorId(id);
  };

  return (
    <div className={styles.palette}>
      {colors.map((color) => (
        <Color
          key={color.id}
          name={color.name}
          rgb={color.rgb}
          hex={color.hex}
          onClick={() => handleClick(color.id)}
          type={selectedColorId === color.id ? "selected" : "gallery"}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
