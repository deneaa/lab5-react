import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Button from "./components/Button/Button";
import ColorPallete from "./components/Color-Palette/ColorPallete";
import colors from "./data/colors.json";

const App = () => {
  const length = 20;

  const [selectedColorId, setSelectedColorId] = useState(colors[0].id);

  const [squares, setSquares] = useState(
    Array.from({ length }, () =>
      Array.from({ length }, () => "rgb(240, 240, 240)"),
    ),
  );

  const [savedDraws, setSavedDraws] = useState([]);

  const saveDraw = () => {
    const isEmpty = squares.every((row) =>
      row.every((cell) => cell === "gray"),
    );

    if (isEmpty) return;
    const newSavedDraw = [...savedDraws, squares];
    setSavedDraws(newSavedDraw);
  };

  const resetDraw = () => {
    setSquares(
      Array.from({ length }, () => Array.from({ length }, () => "gray")),
    );
  };

  const loadDraw = (id) => {
    setSquares(savedDraws[id]);
  };

  const deleteDraw = (id) => {
    const newSavedDraws = savedDraws.filter((_, index) => index !== id);
    setSavedDraws(newSavedDraws);
  };

  return (
    <>
      <h1>Pixel Draw</h1>

      <div className="tool-bar">
        <ColorPallete
          colors={colors}
          selectedColorId={selectedColorId}
          setSelectedColorId={setSelectedColorId}
        />

        <Button text="Save Draw" color={"#4d96ff"} onClick={() => saveDraw()} />
        <Button text="Reset" color={"#4ECDC4"} onClick={() => resetDraw()} />
      </div>

      <div className="draws">
        <div className="board">
          <Board
            selectedColorId={selectedColorId}
            squares={squares}
            setSquares={setSquares}
            type={"mainBoard"}
          />
        </div>

        <div className="gallery">
          <h3>Saved draws: ({savedDraws.length})</h3>

          {savedDraws.map((draw, index) => (
            <div key={index}>
              <Board
                type="gallery"
                squares={draw}
                onGalleryClick={() => loadDraw(index)}
              />

              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Button
                  color="#f5f5f5"
                  text="Load"
                  onClick={() => loadDraw(index)}
                />

                <Button
                  color="#f5f5f5"
                  text="Delete"
                  onClick={() => deleteDraw(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
