import { useGameContext } from "../GameContext";

export default function Playing() {
  const { status, setStatus, time, setTime, score, setScore, color } =
    useGameContext();
  console.log("Suka ~ file: Playing.tsx:5 ~ color:", color);

  return (
    <div className="container">
      {color.length !== 0 && (
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <button style={{ width: 128, height: 128 }}>
            {color[0].name.toUpperCase()}
          </button>
          <button style={{ width: 128, height: 128 }}>
            {color[1].name.toUpperCase()}
          </button>
        </div>
      )}
      <div>{time}</div>
      <div>{score}</div>
    </div>
  );
}
