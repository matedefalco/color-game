import React, { useEffect, useState } from "react";
import { useGameContext } from "../GameContext";
import colorsData from "../colors";
import { Colors } from "../types";

export default function Playing() {
  const { setStatus, time, setTime, score, setScore, counter, setCounter } =
    useGameContext();

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
      setCounter(counter + 1);
      setTime(time - 10);
    } else {
      setScore(score);
      setCounter(counter + 1);
      setTime(time - 10);
    }
  }

  useEffect(() => {
    if (time === 0) {
      setStatus("finished");
    }
  }, [time]);

  return (
    <>
      {colorsData.length !== 0 && (
        <div className="container">
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <p>{time}</p>
            <p>{score}</p>
          </div>
          {/* COLOR NAME */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <p style={{ fontSize: 40, color: wrongColor.color }}>
              {color.name.toUpperCase()}
            </p>
          </div>
          {/* COLOR OPTIONS */}
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            {Math.random() < 0.5 ? (
              <>
                <button
                  style={{
                    width: 128,
                    height: 128,
                    backgroundColor: color.color,
                    color: wrongColor.color,
                  }}
                  onClick={() => handleClick(color.name)}
                >
                  {color.name.toUpperCase()}
                </button>
                <button
                  style={{
                    width: 128,
                    height: 128,
                    backgroundColor: wrongColor.color,
                    color: color.color,
                  }}
                  onClick={() => handleClick(wrongColor.name)}
                >
                  {wrongColor.name.toUpperCase()}
                </button>
              </>
            ) : (
              <>
                <button
                  style={{
                    width: 128,
                    height: 128,
                    backgroundColor: wrongColor.color,
                    color: color.color,
                  }}
                  onClick={() => handleClick(wrongColor.name)}
                >
                  {wrongColor.name.toUpperCase()}
                </button>
                <button
                  style={{
                    width: 128,
                    height: 128,
                    backgroundColor: color.color,
                    color: wrongColor.color,
                  }}
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
