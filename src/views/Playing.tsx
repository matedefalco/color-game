import React, { useEffect, useState } from "react";
import { useGameContext } from "../GameContext";
import colorsData from "../colors";
import { Colors } from "../types";

export default function Playing() {
  const { setStatus, time, setTime, score, setScore } = useGameContext();

  const [color, setColor] = useState<Colors>(colorsData[0]);
  const [wrongColor, setWrongColor] = useState<Colors>(colorsData[1]);

  function handleClick(clickedColorName: string) {
    const [selectedColor, selectedWrongColor] = colorsData
      .slice()
      .sort(() => Math.random() - 0.5);

    setColor(selectedColor);
    setWrongColor(selectedWrongColor);

    if (clickedColorName === color.name) {
      setScore(score + 1);
    } else {
      setScore(score);
    }
  }

  return (
    <>
      {colorsData.length !== 0 && (
        <div className="container">
          {/* HEADER */}
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <div>{time}</div>
            <div>{score}</div>
          </div>
          {/* COLOR NAME */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <p style={{ fontSize: 40 }}>{color.name.toUpperCase()}</p>
          </div>
          {/* COLOR OPTIONS */}
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            {Math.random() < 0.5 ? (
              <>
                <button
                  style={{ width: 128, height: 128 }}
                  onClick={() => handleClick(color.name)}
                >
                  {color.name.toUpperCase()}
                </button>
                <button
                  style={{ width: 128, height: 128 }}
                  onClick={() => handleClick(wrongColor.name)}
                >
                  {wrongColor.name.toUpperCase()}
                </button>
              </>
            ) : (
              <>
                <button
                  style={{ width: 128, height: 128 }}
                  onClick={() => handleClick(wrongColor.name)}
                >
                  {wrongColor.name.toUpperCase()}
                </button>
                <button
                  style={{ width: 128, height: 128 }}
                  onClick={() => handleClick(color.name)}
                >
                  {color.name.toUpperCase()}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
