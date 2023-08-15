import { useEffect } from "react";
import { useGameContext } from "../GameContext";

export default function Playing() {
  const { status, setStatus, time, setTime, score, setScore, color } =
    useGameContext();

  // Generar un índice aleatorio para seleccionar uno de los colores disponibles
  const randomIndex = Math.floor(Math.random() * color.length);
  const randomColor = color[randomIndex];
  const wrongIndex = (randomIndex + 1) % color.length;
  const wrongColor = color[wrongIndex];

  return (
    <>
      {color.length !== 0 && (
        <div className="container">
          {/* HEADER */}
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <div>{time}</div>
            <div>{score}</div>
          </div>
          {/* COLOR NAME */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <p style={{ fontSize: 40 }}>{randomColor.name.toUpperCase()}</p>
          </div>
          {/* COLOR OPTIONS */}
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            {Math.random() < 0.5 ? (
              <>
                <button style={{ width: 128, height: 128 }}>
                  {randomColor.name.toUpperCase()}
                </button>
                <button style={{ width: 128, height: 128 }}>
                  {wrongColor.name.toUpperCase()}
                </button>
              </>
            ) : (
              <>
                <button style={{ width: 128, height: 128 }}>
                  {wrongColor.name.toUpperCase()}
                </button>
                <button style={{ width: 128, height: 128 }}>
                  {randomColor.name.toUpperCase()}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
