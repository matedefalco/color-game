import { useGameContext } from "../GameContext";

export default function Finished() {
  const { setStatus, setTime, counter, score } = useGameContext();
  console.log("Suka ~ file: Finished.tsx:5 ~ counter:", counter);
  console.log("Suka ~ file: Finished.tsx:5 ~ score:", score);

  return (
    <div className="container">
      <header />
      <div className="flex">
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            textDecoration: "underline",
          }}
        >
          THE COLOR GAME
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>YOUR SCORE</h3>
          <p
            style={{
              fontSize: "32px",
              color: "white",
            }}
          >
            {Math.floor((score * 100) / counter)}%
          </p>
        </div>
        <button
          style={{
            backgroundColor: "transparent",
            border: "2px solid white",
            fontSize: "16px",
            padding: "8px",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={() => {
            setStatus("playing");
            setTime(60);
          }}
        >
          NEW GAME
        </button>
      </div>
      <footer />
    </div>
  );
}
