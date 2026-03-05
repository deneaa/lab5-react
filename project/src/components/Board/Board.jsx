import Square from "../Square/Square";
import colors from "../../data/colors.json";
import { useState } from "react";

const Board = ({
  selectedColorId,
  squares,
  setSquares,
  type,
  onGalleryClick,
}) => {
  const [isDrawing, setIsDrawing] = useState(false);

  const handlePaint = (row, col) => {
    if (type !== "mainBoard") return;
    const newSquares = squares.map((r) => [...r]);
    const colorObj = colors.find((c) => c.id === selectedColorId);
    newSquares[row][col] = colorObj.hex;
    setSquares(newSquares);
  };

  const handleMouseDown = (row, col) => {
    setIsDrawing(true);
    handlePaint(row, col);
  };

  const handleMouseEnter = (row, col) => {
    if (!isDrawing) return;
    handlePaint(row, col);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const isGallery = type === "gallery";

  return (
    <div
      className={isGallery ? "gallery" : "mainBoard"}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={isGallery ? onGalleryClick : undefined}
      style={{
        display: "inline-block",
        cursor: isGallery ? "pointer" : "default",
      }}
    >
      {squares.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Square
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              color={cell}
              type={type}
              onMouseDown={handleMouseDown}
              onMouseEnter={handleMouseEnter}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
