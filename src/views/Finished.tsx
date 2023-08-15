import React from "react";
import { useGameContext } from "../GameContext";

export default function Finished() {
  const { setStatus, setTime } = useGameContext();

  return (
    <div className="container">
      <button
        onClick={() => {
          setStatus("playing");
          setTime(60);
        }}
      >
        Reset
      </button>
    </div>
  );
}