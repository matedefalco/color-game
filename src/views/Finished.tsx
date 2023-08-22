import { useGameContext } from "../GameContext";

export default function Finished() {
  const { setStatus, setTime, counter, score, maxScore, setMaxScore } = useGameContext();

  if (score > maxScore) {
    setMaxScore(score);
  }

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
            {score}
          </p>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: 1, alignItems: "center"}}>
          <div style={{display: "flex", gap: 1, alignItems: "center"}}>
            <p>Success rate:</p>
            <p
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              {Math.floor((score * 100) / counter)}%
            </p>
          </div>
          <div style={{display: "flex", gap: 1, alignItems: "center"}}>
            <p>Max score:</p>
            <p
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              {maxScore}
            </p>
          </div>
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
