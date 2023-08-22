import {useState} from "react";

import {useGameContext} from "../GameContext";
import colorsData from "../colors";
import {Colors} from "../types";

export default function Playing() {
  const {setStatus, time, setTime, score, setScore, counter, setCounter} = useGameContext();

  const [color, setColor] = useState<Colors>(colorsData[0]);
  const [wrongColor, setWrongColor] = useState<Colors>(colorsData[1]);
  const [order, setOrder] = useState<number>(0);

  function handleClick(clickedColorName: string) {
    const [selectedColor, selectedWrongColor] = colorsData.slice().sort(() => Math.random() - 0.5);

    setColor(selectedColor);
    setWrongColor(selectedWrongColor);

    setOrder(Math.random());

    if (clickedColorName === color.name) {
      setScore(score + 1);
      setCounter(counter + 1);
    } else {
      setScore(score);
      setCounter(counter + 1);
    }
  }

  const timer = setTimeout(() => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      setStatus("finished");
      clearTimeout(timer);
    }
  }, 1000);

  return (
    <>
      {colorsData.length !== 0 && (
        <div className="container">
          {/* HEADER */}
          <div />
          {/* COLOR NAME */}
          <div
            className="circleBox"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              color: "black",
            }}
          >
            <p>{time}</p>
            <p style={{fontSize: 30, color: wrongColor.color}}>{color.name.toUpperCase()}</p>
            <p style={{fontSize: 24}}>{score} pts</p>
          </div>
          {/* COLOR OPTIONS */}
          <div style={{display: "flex", flexDirection: "row", gap: 8}}>
            {order < 0.5 ? (
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
